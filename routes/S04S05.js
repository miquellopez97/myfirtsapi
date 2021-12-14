const express = require('express');
const S04S05Controller = require('../controllers/S04S05Controller');
const router = express.Router();

router.get('/ex1Milisec', S04S05Controller.ex1Milisec);
router.get('/ex1DMY', S04S05Controller.ex1DMY);
router.get('/ex1HMS', S04S05Controller.ex1HMS);
router.get('/ex2Mult/:num', S04S05Controller.ex2Mult);
router.get('/ex3Factorial/:num', S04S05Controller.ex3Factorial);
//router.get('/profile/:userId?', userController.profile); //El ? en la ruta hace que la Id sea opcionalS

module.exports = router;