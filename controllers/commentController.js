const Comment = require('../models/Comment');

let comments = [];

exports.createComment = async (req, res) => {
    try {
        const { content, postId } = req.body;
        const createdAt = new Date();
        const newComment = new Comment(content, postId, createdAt);
        comments.push(newComment);
        res.status(201).json(newComment);
    } catch (error) {
        console.error('Error creating comment:', error);
        res.status(500).json({ error: 'Failed to create comment' });
    }
};
