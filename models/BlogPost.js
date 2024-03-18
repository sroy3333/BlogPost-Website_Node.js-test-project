class BlogPost {
    constructor(title, author, content, createdAt = new Date()) {
        this.title = title;
        this.author = author;
        this.content = content;
        this.createdAt = createdAt;
        this.comments = [];
    }

    addComment(comment) {
        this.comments.push(comment);
    }
}

module.exports = BlogPost;
