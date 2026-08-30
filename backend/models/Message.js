const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
    id: { type: String, required: true },
    received_at: { type: Date, default: Date.now },
    name: { type: String, required: true, maxLength: 200 },
    email: { type: String, required: true },
    interest: { type: String, enum: ['general', 'join', 'collaborate', 'press'], default: 'general' },
    message: { type: String, required: true, maxLength: 4000 }
});

module.exports = mongoose.model('Message', messageSchema);
