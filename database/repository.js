module.exports.selectById = async(data) => {
    let response = { status: false };

    try {
        const doc = await data.model.findById(data._id, data.projection);
        response = {
            status: true,
            result: doc,
        }
    } catch (err) {
        console.log('Error-userRepo-selectById', err);
    }

    return response;
}

module.exports.selectAll = async(data) => {
    let response = { status: false };

    try {
        console.log(data)
        const doc = await data.model.find(data.findQuery, data.projection);
        console.log(doc)
        response = {
            status: true,
            result: doc,
        }
    } catch (err) {
        console.log('Error-userRepo-selectAll', err);
    }

    return response;
}