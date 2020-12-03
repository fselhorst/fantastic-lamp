if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}
const express = require('express');
const mongoose = require('mongoose');
const fetch = require('node-fetch');
const { ObjectId } = require('mongodb');
const bodyParser = require('body-parser');
const cors = require('cors');

const PostModel = require('./models/post-model');
const app = express();


app.use(bodyParser.json());
app.use(cors());

const PORT = process.env.PORT || 8080;
const API_CONTEXT = process.env.API_CONTEXT
const MONGO_URI = process.env.MONGO_URI

mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, (error) => {
    if(error) { throw new Error(error)}
    console.log('✨ Connected to MongoDB')
})

app.get(API_CONTEXT, (_, res) => {
    return res.sendStatus(200)
});


app.get(API_CONTEXT + '/posts', (_, res) => {
    PostModel.find().then(function(posts) {
        return res.json(posts);
    });
});

app.post(API_CONTEXT + '/posts', (req, res) => {
    const { title } = req.body;
    console.log(req.body);
    PostModel.create({
        title,
        _id: ObjectId(),
    }).then(function(value) {
        return res.send(200);
    });
});

app.delete(API_CONTEXT + '/posts', (_, res) => {
    PostModel.remove({}).then(function() {
        return res.send(200);
    });
});

app.get(API_CONTEXT+'/btc', async (req, res) => {
    const response = await fetch('https://api.coindesk.com/v1/bpi/currentprice.json');
    const data = await response.json()
    return res.json(data);
})

app.listen(PORT, () => {
    console.log(`🚀 listening on port ${PORT}`)
});
