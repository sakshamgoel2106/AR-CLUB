const express = require('express');
const path = require('path');
const { PUBLIC_DIR } = require('./config');

const helmet = require('helmet');
const morgan = require('morgan');
const compression = require('compression');
const { notFoundHandler, globalErrorHandler } = require('./middlewares/errorHandler');
const apiRoutes = require('./routes/apiRoutes');

const app = express();

// Trust reverse proxy (Cloudflare, Nginx, Render, Heroku)
app.set('trust proxy', 1);

// Force HTTPS in production
app.use((req, res, next) => {
    if (process.env.NODE_ENV === 'production') {
        const proto = req.headers['x-forwarded-proto'];
        if (proto && proto !== 'https' && !req.secure) {
            return res.redirect(301, `https://${req.headers.host}${req.url}`);
        }
    }
    next();
});

// Response compression (gzip/brotli) for high page load speed
app.use(compression());

// Security Headers & HSTS
app.use(helmet({
    hsts: {
        maxAge: 31536000,
        includeSubDomains: true,
        preload: true
    },
    contentSecurityPolicy: {
        directives: {
            defaultSrc: ["'self'"],
            imgSrc: ["'self'", "data:", "https://hoirqrkdgbmvpwutwuwj.supabase.co", "https://fonts.gstatic.com", "https://ik.imagekit.io"],
            styleSrc: ["'self'", "https://fonts.googleapis.com", "'unsafe-inline'"],
            fontSrc: ["'self'", "https://fonts.gstatic.com", "data:"],
            scriptSrc: ["'self'", "'unsafe-inline'", "https://unpkg.com"],
            connectSrc: ["'self'", "https://ik.imagekit.io"],
            frameAncestors: ["'self'"],
            baseUri: ["'self'"]
        }
    }
}));

app.use(express.json({ limit: '64kb' }));
app.use(express.urlencoded({ extended: true, limit: '64kb' }));
app.use(morgan('dev'));

const isDev = process.env.NODE_ENV !== 'production';

// SEO Crawlers: Explicit robots.txt and sitemap.xml endpoints
app.get('/robots.txt', (req, res) => {
    res.type('text/plain');
    res.sendFile(path.join(PUBLIC_DIR, 'robots.txt'), err => {
        if (err) res.sendFile(path.join(PUBLIC_DIR, 'dist', 'robots.txt'));
    });
});

app.get('/sitemap.xml', (req, res) => {
    res.type('application/xml');
    res.sendFile(path.join(PUBLIC_DIR, 'sitemap.xml'), err => {
        if (err) res.sendFile(path.join(PUBLIC_DIR, 'dist', 'sitemap.xml'));
    });
});

app.get('/favicon.ico', (req, res) => {
    res.sendFile(path.join(PUBLIC_DIR, 'dist', 'favicon.ico'), err => {
        if (err) res.sendFile(path.join(PUBLIC_DIR, 'favicon.ico'));
    });
});

// Static frontend — serve built dist assets first with caching
app.use('/dist', express.static(path.join(PUBLIC_DIR, 'dist'), {
    maxAge: isDev ? 0 : '7d',
    etag: !isDev
}));

// Root static assets (favicon, logo, og-image, etc.)
app.use(express.static(path.join(PUBLIC_DIR, 'dist'), {
    maxAge: isDev ? 0 : '1d',
    etag: !isDev
}));

app.use(express.static(PUBLIC_DIR, {
    extensions: ['html'],
    maxAge: isDev ? 0 : '1d',
    etag: !isDev
}));

// API Routes
app.use('/api', apiRoutes);

app.get('/health', (req, res) => {
    res.status(200).send('OK');
});

// 404 for unknown API routes
app.use('/api', notFoundHandler);

// SPA fallback for frontend routing
app.get('*', (req, res, next) => {
    res.sendFile(path.join(PUBLIC_DIR, 'dist', 'index.html'), err => err && next(err));
});

// Global Error Handler
app.use(globalErrorHandler);

module.exports = app;
