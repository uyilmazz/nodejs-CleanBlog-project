const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PostSchema = new Schema({
    title: String,
    detail: String
}, {
    collection: 'posts',
    timestamps: true
});

const Post = mongoose.model('Post',PostSchema);

module.exports = Post;