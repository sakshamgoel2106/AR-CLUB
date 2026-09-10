const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        const uri = process.env.MONGO_URI;
        if (!uri) {
            console.warn('MONGO_URI is not defined; starting without MongoDB.');
            return false;
        }
        await mongoose.connect(uri);
        console.log('MongoDB Connected Successfully');
        return true;
    } catch (err) {
        console.error('MongoDB Connection Error; starting without MongoDB:', err.message);
        return false;
    }
};

module.exports = connectDB;
