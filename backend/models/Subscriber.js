const mongoose = require('mongoose');

const subscriberSchema = new mongoose.Schema({
    id: { type: String, required: true },
    subscribed_at: { type: Date, default: Date.now },
    email: { type: String, required: true }
});

module.exports = mongoose.model('Subscriber', subscriberSchema);
