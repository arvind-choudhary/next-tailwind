import Joi from "joi";

export const userSchemaValidator = Joi.object({

    firstName: 
        Joi
            .alphanum()
            .min(3)
            .max(30)
            .required(),

    lastName: 
        Joi
            .alphanum()
            .min(3)
            .max(30)
            .required(),

    email: 
        Joi
            .string()
            .email(),

    password: 
        Joi
            .string()
            .min(8)
            .message('Minimum 8 characters is allowed.')
            .max(20)
            .message('Maximum 20 characters is allowed.')
            .pattern(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/)
            .message('Password must have minimum eight characters, at least one letter, one number and one special character'),

    confirmPassword:
        Joi
            .any()
            .equal(Joi.ref('password'))
            .required()

})