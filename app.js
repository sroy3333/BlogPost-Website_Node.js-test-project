const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

// Routes
const blogPostRoutes = require('./routes/blogPostRoutes');
const commentRoutes = require('./routes/commentRoutes');

app.use('/blog-posts', blogPostRoutes);
app.use('/comments', commentRoutes);

// Serve the blog post creation form
app.get('/create-blog-post', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'create-blog-post.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
