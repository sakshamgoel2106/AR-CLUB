const Message = require('../models/Message');
const Subscriber = require('../models/Subscriber');

const isEmail = (s) => typeof s === 'string' && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s.trim());

exports.submitContact = async (req, res, next) => {
    try {
        const { name, email, message, interest, _hp_company, _hp } = req.body || {};
        
        // 1. Honeypot check (Bots fill out hidden fields)
        if (_hp_company || _hp) {
            return res.json({ ok: true, id: 'ack' });
        }

        // 2. Input validation & sanitization
        if (!name || typeof name !== 'string' || name.trim().length < 2 || name.trim().length > 200) {
            return res.status(400).json({ error: 'Name is required (2–200 characters).' });
        }
        if (!isEmail(email)) {
            return res.status(400).json({ error: 'A valid email address is required.' });
        }
        if (!message || typeof message !== 'string' || message.trim().length < 10 || message.trim().length > 4000) {
            return res.status(400).json({ error: 'Message is required (10–4000 characters).' });
        }
        
        const entry = new Message({
            id: Date.now().toString(36),
            name: name.trim(),
            email: email.trim().toLowerCase(),
            interest: ['general', 'join', 'collaborate', 'press'].includes(interest) ? interest : 'general',
            message: message.trim(),
        });
        
        await entry.save();
        res.json({ ok: true, id: entry.id });
    } catch (err) {
        next(err);
    }
};

exports.submitSubscribe = async (req, res, next) => {
    try {
        const { email, _hp_company, _hp } = req.body || {};
        
        // 1. Honeypot check
        if (_hp_company || _hp) {
            return res.json({ ok: true, id: 'ack' });
        }

        // 2. Email format validation
        if (!isEmail(email)) {
            return res.status(400).json({ error: 'A valid email address is required.' });
        }
        
        const cleanEmail = email.trim().toLowerCase();

        // Check if already subscribed
        const existing = await Subscriber.findOne({ email: cleanEmail });
        if (existing) {
            return res.json({ ok: true, id: existing.id });
        }

        const entry = new Subscriber({
            id: Date.now().toString(36),
            email: cleanEmail,
        });
        
        await entry.save();
        res.json({ ok: true, id: entry.id });
    } catch (err) {
        next(err);
    }
};
