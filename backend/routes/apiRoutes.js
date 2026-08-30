const express = require('express');
const contentController = require('../controllers/contentController');
const formController = require('../controllers/formController');
const rateLimit = require('express-rate-limit');

const router = express.Router();

const limiter = rateLimit({ windowMs: 60 * 1000, max: 5 });

// READ endpoints
router.get('/health', contentController.getHealth);
router.get('/blogs', contentController.getBlogs);
router.get('/blogs/:slug', contentController.getBlogBySlug);
router.get('/manifesto', contentController.getManifesto);

// WRITE endpoints
router.post('/contact', limiter, formController.submitContact);
router.post('/subscribe', limiter, formController.submitSubscribe);

module.exports = router;
