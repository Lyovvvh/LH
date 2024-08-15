import Joi from 'joi';

export default {
    register: Joi.object({
        name: Joi.string().min(3).alphanum().max(50).required(),
        email: Joi.string().email({minDomainSegments: 2}).required(),
        number: Joi.string().min(6).max(30).required(),
    }),
    login: Joi.object({
        email: Joi.string().email({minDomainSegments: 2}).required(),
    }),
}