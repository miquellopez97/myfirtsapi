module.exports.helloWorld = (req, res) => {
    const responseObj = { msg: 'Hello Wordl!!' };
    const responseStatus = 200;
    res.status(responseStatus).send(responseObj);
}

module.exports.alumnos = (req, res) => {
    const arrAlumn = ["Miquel", "Eric", "Alba", "Albert", "Alejandro", "Biel", "Dani", "Ivar", "Jordi", "Marcos"];
    const arrlenght = arrAlumn.length;
    const jsonResponse = {
        alumnosArr: arrAlumn,
        alumnesLenght: arrlenght,
    }
    const responseStatus = 200;

    res.status(responseStatus).send(jsonResponse);
}