exports.notFoundHandler = (req, res, next) => {
    res.status(404).json({ error: 'API route not found' });
};

exports.globalErrorHandler = (err, req, res, next) => {
    console.error('ERROR:', err);
    if (req.path.startsWith('/api/')) {
        return res.status(500).json({ error: 'Internal server error' });
    }
    res.status(500).send('Internal server error');
};
