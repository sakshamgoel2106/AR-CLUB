const express = require('express');
const path = require('path');
const { PUBLIC_DIR } = require('./config');

const helmet = require('helmet');
const morgan = require('morgan');
const { notFoundHandler, globalErrorHandler } = require('./middlewares/errorHandler');
const apiRoutes = require('./routes/apiRoutes');

const app = express();

// Middlewares
app.use(helmet({
    contentSecurityPolicy: {
        directives: {
            defaultSrc: ["'self'"],
            imgSrc: ["'self'", "data:", "https://hoirqrkdgbmvpwutwuwj.supabase.co"],
            styleSrc: ["'self'", "https://fonts.googleapis.com", "'unsafe-inline'"],
            fontSrc: ["'self'", "https://fonts.gstatic.com", "data:"],
            scriptSrc: ["'self'", "'unsafe-inline'", "https://unpkg.com"],
            connectSrc: ["'self'"],
            frameAncestors: ["'self'"],
            baseUri: ["'self'"]
        }
    }
}));
app.use(express.json({ limit: '64kb' }));
app.use(express.urlencoded({ extended: true, limit: '64kb' }));
app.use(morgan('dev'));

// Static frontend — no cache in dev so changes show immediately on refresh
const isDev = process.env.NODE_ENV !== 'production';
app.use(express.static(PUBLIC_DIR, {
    extensions: ['html'],
    maxAge: isDev ? 0 : '1h',
    etag: !isDev
}));

// API Routes
app.use('/api', apiRoutes);

app.get('/health', (req, res) => {
  res.status(200).send('OK');
});

// SPA fallback for frontend routing
app.get(/^\/(?!api\/).*/, (req, res, next) => {
    res.sendFile(path.join(PUBLIC_DIR, 'dist', 'index.html'), err => err && next(err));
});

// 404 for unknown API routes
app.use('/api', notFoundHandler);

// Global Error Handler
app.use(globalErrorHandler);

module.exports = app;
