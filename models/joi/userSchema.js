const Joi = require('@hapi/joi');

module.exports.createUserSchema = Joi.object({
    name: Joi.string().regex(a - zA - Z).min(3).max(20).required(),
    job: Joi.string().alphanum().min(5).max(50).required(),
    birthday: Joi.date().min('1/1/2000').iso().required(),
    username: Joi.string().alphanum().min(3).max(20),
    email: Joi.string().email().min(5).max(30),
    password: Joi.string().regex(/^[a-zA-Z0-9]{3,30}$/).required(),
    repeatPassword: Joi.string().equal(password),
});