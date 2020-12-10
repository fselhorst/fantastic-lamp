const { ObjectId } = require("mongodb");
const MealModel = require("../models/meal-model");

const postController = () => {
  const getAll = (req, res) => {
    const owner = req.headers["x-owner"];
    MealModel.find({ owner: owner }).then(function (meals) {
      return res.json(meals);
    });
  };
  const deleteOne = (req, res) => {
    const { id } = req.query;

    MealModel.deleteOne({ _id: id }).then(function () {
      return res.json({ id });
    });
  };
  const createOne = (req, res) => {
    const { name, price, owner, description } = req.body;
    MealModel.create({
      name,
      price,
      owner,
      description,
      _id: ObjectId(),
    }).then(function (value) {
      return res.json(value);
    });
  };

  return {
    getAll,
    deleteOne,
    createOne,
  };
};

module.exports = postController;
