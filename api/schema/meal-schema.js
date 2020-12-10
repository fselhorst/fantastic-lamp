const mongoose = require("mongoose");

const MealSchema = new mongoose.Schema({
  name: String,
  price: String,
  owner: String,
  description: String,
});

module.exports = MealSchema;
