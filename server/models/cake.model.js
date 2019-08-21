const mongoose = require('mongoose');
const CommentSchema = new mongoose.Schema({
    rating: Number,
    content: String,
}, {timestamps: true});
const CakeSchema = new mongoose.Schema({
    name: String,
    image: String,
    comments: [CommentSchema],
}, {timestamps: true});
const Cake = mongoose.model('Cake', CakeSchema);
const Comment = mongoose.model('Comment', CommentSchema);

module.exports = {Cake, Comment}