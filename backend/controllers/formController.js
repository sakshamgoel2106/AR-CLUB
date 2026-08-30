const Message = require('../models/Message');
const Subscriber = require('../models/Subscriber');

const isEmail = (s) => typeof s === 'string' && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s);

exports.submitContact = async (req, res, next) => {
    try {
        const { name, email, message, interest } = req.body || {};
        
        if (!name || typeof name !== 'string' || name.length > 200) {
            return res.status(400).json({ error: 'Name is required (≤200 chars).' });
        }
        if (!isEmail(email)) {
            return res.status(400).json({ error: 'A valid email is required.' });
        }
        if (!message || typeof message !== 'string' || message.length > 4000) {
            return res.status(400).json({ error: 'Message is required (≤4000 chars).' });
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
        const { email } = req.body || {};
        
        if (!isEmail(email)) {
            return res.status(400).json({ error: 'A valid email is required.' });
        }
        
        const entry = new Subscriber({
            id: Date.now().toString(36),
            email: email.trim().toLowerCase(),
        });
        
        await entry.save();
        res.json({ ok: true, id: entry.id });
    } catch (err) {
        next(err);
    }
};
