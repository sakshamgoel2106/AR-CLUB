require('dotenv').config();
const connectDB = require('./config/db');
const app = require('./app');
const { PORT, HOST } = require('./config');

connectDB().then(() => {
    const server = app.listen(PORT, HOST, () => {
        console.log('');
        console.log('  ┌────────────────────────────────────────────┐');
        console.log('  │   AR CLUB  ·  Eco-Tech Server v4           │');
        console.log(`  │   Listening on http://${HOST}:${PORT}        `);
        console.log('  │   Health:  GET /api/health                 │');
        console.log('  │   Ctrl+C to stop                           │');
        console.log('  └────────────────────────────────────────────┘');
        console.log('');
    });
    module.exports = server;
});
