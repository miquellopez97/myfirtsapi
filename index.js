const express = require('express');
const app = express();

const myFirtsController = require('./controllers/myFirtsController');

app.get('/', myFirtsController.helloWorld);

app.listen(process.env.PORT || 3000, () => {
    console.log('My firts API running!')
});