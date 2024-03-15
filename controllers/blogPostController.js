const express = require('express');

exports.createBlogPost = async (req, res) => {
  try {
    const { title, author, content } = req.body;
    const blogPost = await BlogPost.create({ title, author, content });
    res.status(201).json(blogPost);
  } catch (error) {
    console.error('Error creating blog post:', error);
    res.status(500).json({ error: 'Failed to create blog post' });
  }
};