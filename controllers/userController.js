const { request } = require("express");

const users = [
    { id: 1, name: 'john' },
    { id: 2, name: 'david' },
    { id: 3, name: 'maria' }
];

const status = {
    ok: 200,
    notFound: 404,
    created: 201,
};

const c = require('../constants/constants');
const userService = require('../services/userServices');

module.exports = {
    list: (req, res) => {
        console.log(req.query);
        //Peticio a la base de dades
        res.status(status.ok).send(users)
    },

    profile: (req, res) => {
        //Peticio de la id per parametre

        const user = users.find((user) => user.id == req.params.userId);

        if (user) {
            res.status(status.ok).send(user);
        } else {
            const msg = { error: 'User Id not found' }
            res.status(status.notFound).send(msg);
        }
    },

    create: (req, res) => {
        const user = req.body;
        user.id = users.length + 1;

        users.push(users);
        res.status(status.created).send(user);
    },

    selectById: async(req, res) => {
        const response = { status: c.status.serverError, msg: 'Internal server error' };
        try {
            const userId = req.params.id;
            const resFromService = await userService.selectById(userId);
            if (resFromService.status) {
                if (resFromService.result) {
                    response.status = c.status.ok;
                    response.msg = "User found"
                    response.body = resFromService.result;
                } else {
                    response.status = c.status.notFound;
                    response.msg = "User not found";
                }
            }
        } catch (err) {
            console.log('ERROR- userController-selectById : ', err);
            response.error = err;
        }
        res.status(response.status).send(response);
    },

    selectAll: async(req, res) => {
        const response = { status: c.status.serverError, msg: 'Internal server error' };
        try {
            const queryparams = req.query || {};
            const resFromService = await userService.selectAll(queryparams);
            if (resFromService.status) {
                if (resFromService.result) {
                    response.status = c.status.ok;
                    response.msg = "Users found"
                    response.body = resFromService.result;
                } else {
                    response.status = c.status.notFound;
                    response.msg = "Users not found";
                }
            }
        } catch (err) {
            console.log('ERROR- userController-selectAll : ', err);
            response.error = err;
        }
        res.status(response.status).send(response);
    },
}