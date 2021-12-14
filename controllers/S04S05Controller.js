const { request } = require("express");

const status = {
    ok: 200,
    notFound: 404,
    badRequest: 400
};

module.exports = {
    ex1Milisec: (req, res) => {
        res.status(status.ok).send({ dataActual: new Date().getTime() });
    },
    ex1DMY: (req, res) => {
        res.status(status.ok).send({ dataActual: `${new Date().getDate().toString()}-${new Date().getMonth()+1}-${new Date().getFullYear()}` });
    },
    ex1HMS: (req, res) => {
        res.status(status.ok).send({ dataActual: `${new Date().getHours().toString()}:${new Date().getMinutes()+1}:${new Date().getSeconds()}` });
    },
    ex2Mult: (req, res) => {
        if (Number.isNaN(req.params.num)) {
            const msg = { ERROR: 'Not number' }
            res.status(status.badRequest).send(msg);
        } else if (req.params.num >= 2 && req.params.num <= 5) {
            const result = mult(req.params.num);
            res.status(status.ok).send(result);
        } else {
            const msg = { ERROR: 'Number out of range' }
            res.status(status.badRequest).send(msg);
        }
    },
    ex3Factorial: (req, res) => {
        if (Number.isNaN(req.params.num)) {
            const msg = { ERROR: 'Not number' }
            res.status(status.badRequest).send(msg);
        } else if (req.params.num > 0) {
            const result = factorial(req.params.num);
            res.status(status.ok).send({
                factorial: result
            });;
        } else {
            const msg = { ERROR: 'Unexpected ERROR' }
            res.status(status.badRequest).send(msg);
        }
    }
}

function mult(x) {
    let nums = []
    for (i = 1; i <= 10; i++) {
        nums.push(`${i}*${x}=${i * x}`);
    }
    return nums;
}

function factorial(x) {
    if (x === 0) {
        return 1;
    }
    return x * factorial(x - 1);
}