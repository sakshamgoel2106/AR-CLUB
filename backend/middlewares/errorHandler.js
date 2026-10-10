exports.notFoundHandler = (req, res, next) => {
    res.status(404).json({
        error: '404 Not Found',
        message: 'API route not found'
    });
};

exports.globalErrorHandler = (err, req, res, next) => {
    console.error('ERROR:', err);
    if (req.path.startsWith('/api') || (req.originalUrl && req.originalUrl.startsWith('/api'))) {
        return res.status(500).json({ error: 'Internal server error' });
    }
    res.status(500).send('Internal server error');
};
