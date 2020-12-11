const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({
  title: String,
  author: String,
});

module.exports = PostSchema;
