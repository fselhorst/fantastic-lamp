const { ObjectId } = require("mongodb");
const PostModel = require("../models/post-model");

const postController = () => {
    const getAll = (req,res,next) => {
        const author = req.headers['x-author'];
        PostModel.find({author: author}).then(function(posts) {
            return res.json(posts);
        });
    }
    const deleteOne = (req,res,next) => {
        const { id } = req.query;

        PostModel.deleteOne({_id: id}).then(function() {
            return res.json({id});
        });
    }
    const createOne = (req,res,next) => {
        const { title, author } = req.body;
        PostModel.create({
            title,
            author,
            _id: ObjectId(),
        }).then(function(value) {
            return res.json(value);
        });
    }
    
    return {
        getAll,
        deleteOne,
        createOne
    }
}

module.exports = postController