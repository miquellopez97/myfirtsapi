module.exports.helloWorld = (req, res) => {
    const responseObj = { msg: 'Hello Wordl!!' };
    const responseStatus = 200;
    res.status(responseStatus).send(responseObj);
}