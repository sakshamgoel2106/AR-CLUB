const JsonModel = require('../models/JsonModel');

exports.getHealth = (req, res) => {
    res.json({
        ok: true,
        service: 'ar-club',
        version: '4.0.0',
        uptime: Math.round(process.uptime()),
        time: new Date().toISOString(),
    });
};

exports.getBlogs = async (req, res, next) => {
    try {
        const blogs = await JsonModel.readJSON('blogs.json');
        const { category } = req.query;
        const filtered = category
            ? blogs.filter(b => b.category.toLowerCase() === String(category).toLowerCase())
            : blogs;
        res.json(filtered);
    } catch (err) {
        next(err);
    }
};

exports.getBlogBySlug = async (req, res, next) => {
    try {
        const blogs = await JsonModel.readJSON('blogs.json');
        const post = blogs.find(b => b.slug === req.params.slug);
        if (!post) return res.status(404).json({ error: 'Not found' });
        res.json(post);
    } catch (err) {
        next(err);
    }
};

exports.getManifesto = async (req, res, next) => {
    try {
        res.json(await JsonModel.readJSON('manifesto.json'));
    } catch (err) {
        next(err);
    }
};
