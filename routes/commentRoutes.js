const express = require('express');
const router = express.Router();
const commentController = require('../controllers/commentController');

// Create a new comment
router.post('/', commentController.createComment);

// Delete a comment
router.delete('/:commentId', commentController.deleteComment);

// Implement other routes for fetching, updating comments

module.exports = router;
