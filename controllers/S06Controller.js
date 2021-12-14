const { request } = require("express");
const c = require('../constants/constants')

module.exports = {
    randomNum: (req, res) => {
        const sol = Math.round(Math.random() * Number.parseInt(req.params.num));
        res.status(c.status.ok).send({ Number: sol });
    }
}