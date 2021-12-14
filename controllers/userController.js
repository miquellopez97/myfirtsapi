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
}