const mongoose = require('mongoose');

module.exports = mongoose.model('User', mongoose.Schema({
    mail: String,
    active: Boolean
}));