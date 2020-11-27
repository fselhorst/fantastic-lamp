const express = require('express');
const app = express();

const PORT = process.env.PORT || 8080;
const API_CONTEXT = process.env.API_CONTEXT || '/api'

app.get(API_CONTEXT, (_, res) => {
    return res.json({'🚀':'api response'});
});

app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`)
});
