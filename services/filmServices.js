const mongoose = require('mongoose');
const Film = require('../models/bd/filmModel');
const repository = require('../database/repository');

module.exports.selectById = async(filmId) => {

    console.log(filmId);
    const response = { status: false };

    try {
        const data = {
            _id: mongoose.Types.ObjectId(filmId),
            model: Film,
            projection: {

            }
        };
        const resFromRepo = await repository.selectById(data);
        console.log('service', resFromRepo);
        if (resFromRepo.status) {
            response.result = resFromRepo.result;
            response.status = true;
        }
    } catch (err) {
        console.log('Error-filmService-selectById', err);
    }

    return response;
}