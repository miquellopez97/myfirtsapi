const express = require('express');
const router = express.Router();

const userController = require('../controllers/userController');

router.get('/list', userController.list);
router.get('/profile/:userId?', userController.profile); //El ? en la ruta hace que la Id sea opcionalS
router.post('/create', userController.create);

module.exports = router;