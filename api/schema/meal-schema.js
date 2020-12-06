const mongoose = require('mongoose')

const MealSchema = new mongoose.Schema({
    name: String,
    price: String,
    unitType: String,
    owner: String
});

module.exports = MealSchema;