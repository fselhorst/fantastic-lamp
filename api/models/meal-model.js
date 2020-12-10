const mongoose = require("mongoose");
const MealSchema = require("../schema/meal-schema");

const MealModel = mongoose.model("Meal", MealSchema);

module.exports = MealModel;
