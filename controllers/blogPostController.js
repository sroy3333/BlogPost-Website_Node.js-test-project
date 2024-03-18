const BlogPost = require('../models/BlogPost');

let blogPosts = [];

exports.createBlogPost = async (req, res) => {
    try {
        const { title, author, content } = req.body;
        const createdAt = new Date();
        const newBlogPost = new BlogPost(title, author, content, createdAt);
        blogPosts.push(newBlogPost);
        res.status(201).json(newBlogPost);
    } catch (error) {
        console.error('Error creating blog post:', error);
        res.status(500).json({ error: 'Failed to create blog post' });
    }
};

exports.fetchBlogPosts = async (req, res) => {
    try {
        res.status(200).json(blogPosts);
    } catch (error) {
        console.error('Error fetching blog posts:', error);
        res.status(500).json({ error: 'Failed to fetch blog posts' });
    }
};
