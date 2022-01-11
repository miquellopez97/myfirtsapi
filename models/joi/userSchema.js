const Joi = require('@hapi/joi');
Joi.objectId = require('joi-objectid')(Joi);

module.exports.createuserschema = Joi.object({
    name: Joi.string().regex(/^[a-za-z0-9]{3,30}$/).min(3).max(20).required(),
    job: Joi.string().alphanum().min(5).max(50).required(),
    birthday: Joi.date().min('1/1/2000').iso().required(),
    username: Joi.string().alphanum().min(3).max(20),
    email: Joi.string().email().min(5).max(30),
    password: Joi.string().regex(/^[a-za-z0-9]{3,30}$/).required()
});

module.exports.selectUserSchema = Joi.object({
    id: Joi.objectId().required(),
});

module.exports.selectAllSchema = Joi.object({
    active: Joi.boolean().optional(),
    skip: Joi.number().integer().optional(),
    limit: Joi.number().integer().optional(),
}).and('skip', 'limit');