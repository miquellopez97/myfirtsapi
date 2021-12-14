const express = require('express');
require('dotenv').config();
const app = express();
const appAlumnes = express();
const cors = require('cors');
const connect = require(`./database/connect`);

connect.createConnection();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const myFirtsController = require('./controllers/myFirtsController');


app.get('/', myFirtsController.alumnos);

app.use('/api/v1/user', require('./routes/userRoutes'));
app.use('/api/v1/S04S05', require('./routes/S04S05'));
app.use('/api/v1/S06', require('./routes/S06'));

app.listen(process.env.PORT || 3000, () => {
    console.log('My firts API running!')
});