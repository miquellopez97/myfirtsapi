const mongoose = require('mongoose');
const user = require('../models/bd/userModel');
const repository = require('../database/repository');

module.exports = {
    selectById: async(userId) => {
        const response = { status: false };

        try {
            const data = {
                _id: mongoose.Types.ObjectId(userId),
                model: user,
            };
            const resFromRepo = await repository.selectById(data);
            if (resFromRepo.status) {
                response.result = resFromRepo.result;
                response.status = true;
            }
        } catch (err) {
            console.log('Error-userService-selectById', err);
        }

        return response;
    }
}

module.exports = {
    selectAll: async(queryparams) => {
        const response = { status: false };

        try {
            const data = {
                findQuery: queryparams,
                model: user,
                projection: {

                }
            };
            const resFromRepo = await repository.selectAll(data);
            if (resFromRepo.status) {
                response.result = resFromRepo.result;
                response.status = true;
            }
        } catch (err) {
            console.log('Error-userService-selectAll', err);
        }

        return response;
    }
}