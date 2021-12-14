const express = require('express');
const S06Controller = require('../controllers/S06Controller');
const S06Middleware = require('../middlewares/S06Middleware');
const router = express.Router();

router.get('/randomNum/:num', S06Middleware.checkNumInt, S06Controller.randomNum);

module.exports = router;