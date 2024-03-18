const express = require('express');
const router = express.Router();
const blogPostController = require('../controllers/blogPostController');


router.post('/', blogPostController.createBlogPost);

router.get('/', blogPostController.fetchBlogPosts);

module.exports = router;
