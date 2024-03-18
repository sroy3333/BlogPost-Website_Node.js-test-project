class Comment {
    constructor(content, postId, createdAt = new Date()) {
        this.content = content;
        this.postId = postId;
        this.createdAt = createdAt;
    }
}

module.exports = Comment;
