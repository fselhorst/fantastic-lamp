const mongoose = require('mongoose')

const PostSchema = new mongoose.Schema({
    title: String,
    slug: String
});

module.exports = PostSchema;