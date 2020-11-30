const mongoose = require('mongoose');
const PostSchema = require("../schema/post-schema");

const PostModel = mongoose.model('Post', PostSchema );

module.exports = PostModel
