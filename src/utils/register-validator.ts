import Joi from 'joi';

export const registerSchema = Joi.object({
    physicsPerson: Joi.boolean().required(),
    juridicPerson: Joi.boolean().required(),
    cnpj: Joi.string().optional(),
    cpf: Joi.string().optional(),
    name: Joi.string().required(),
    fone: Joi.string().required(),
    cellphone: Joi.string().required(),
    email: Joi.string().email().required(),
    repeatEmail: Joi.string().email().required(),
    address: Joi.object({
        cep: Joi.string().required(),
        street: Joi.string().required(),
        number: Joi.number().required(),
        complement: Joi.string().optional(),
        city: Joi.string().required(),
        neighborhood: Joi.string().required(),
        state: Joi.string().length(2).required(),
    }).required(),
    acceptedTerms: Joi.boolean().required(),
});
