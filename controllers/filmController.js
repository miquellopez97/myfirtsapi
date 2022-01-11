const { request } = require("express");

const status = {
    ok: 200,
    notFound: 404,
    created: 201,
};

const c = require('../constants/constants');
const filmServices = require('../services/filmServices');

module.exports = {
    selectById: async(req, res) => {
        const response = { status: c.status.serverError, msg: 'Internal server error' };
        try {
            const filmId = req.params.id;

            const resFromService = await filmServices.selectById(filmId);

            if (resFromService.status) {
                console.log(resFromService);
                if (resFromService.result) {
                    response.status = c.status.ok;
                    response.msg = "Film found"
                    response.body = resFromService.result;
                } else {
                    response.status = c.status.notFound;
                    response.msg = "Film not found";
                }
            }
        } catch (err) {
            console.log('ERROR-filmController-selectById : ', err);
            response.error = err;
        }
        res.status(response.status).send(response);
    }
}