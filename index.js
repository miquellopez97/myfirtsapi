const express = require('express');
const app = express();

require('dotenv');

const myFirtsController = require('./controllers/myFirtsController');


app.get('/', myFirtsController.alumnos);

app.listen(process.env.PORT || 3000, () => {
    console.log('My firts API running!')
});