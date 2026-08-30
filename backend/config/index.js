const path = require('path');

module.exports = {
    PORT: process.env.PORT || 3000,
    HOST: process.env.HOST || '0.0.0.0',
    // We resolve paths relative to the project root (one level up from config)
    DATA_DIR: path.join(__dirname, '../data'),
    PUBLIC_DIR: path.join(__dirname, '../public'),
};
