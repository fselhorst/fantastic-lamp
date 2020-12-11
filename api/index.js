if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const postController = require("./controllers/post");
const mealController = require("./controllers/meal");

app.use(bodyParser.json());
app.use(cors());

const PORT = process.env.PORT || 8080;
const API_CONTEXT = process.env.API_CONTEXT;
const MONGO_URI = process.env.MONGO_URI;

mongoose.connect(
  MONGO_URI,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (error) => {
    if (error) {
      throw new Error(error);
    }
    console.log("✨ Connected to MongoDB");
  }
);

app.get(API_CONTEXT, (_, res) => {
  return res.sendStatus(200);
});

app.get(API_CONTEXT + "/posts", postController().getAll);

app.post(API_CONTEXT + "/posts", postController().createOne);

app.delete(API_CONTEXT + "/posts", postController().deleteOne);

app.get(API_CONTEXT + "/meals", mealController().getAll);

app.post(API_CONTEXT + "/meals", mealController().createOne);

app.delete(API_CONTEXT + "/meals", mealController().deleteOne);

app.listen(PORT, () => {
  console.log(`🚀 listening on port ${PORT}`);
});
