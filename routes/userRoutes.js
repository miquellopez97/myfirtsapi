const express = require('express');
const router = express.Router();

const userController = require('../controllers/userController');
const joiMiddleware = require('../middlewares/joiMiddleware');
const userSchema = require('../models/joi/userSchema');

router.get('/listArray', userController.list);
router.get('/profile/:userId?', userController.profile); //El ? en la ruta hace que la Id sea opcionalS
router.post('/create', userController.create);

router.get('/user/:id',
    joiMiddleware.validate(userSchema.selectUserSchema, 'params'),
    userController.selectById
);

router.get('/list', joiMiddleware.validate(userSchema.selectAllSchema, 'query'),
    userController.selectAll
);

module.exports = router;