import Joi from "joi";

export const signUpSchemaValidator = Joi.object({

    firstName: 
        Joi
            .string()
            .min(1)
            .max(30)
            .required()
            .messages({
                'string.base': `"First name" is a required field`
            }),

    lastName: 
        Joi
            .string()
            .min(1)
            .max(30)
            .required()
            .messages({
                'string.required': `"Last name" is a required field`
            }),

    email: 
        Joi
            .string()
            .email()
            .required()
            .messages({
                'string.email': "Please enter a valid email",
                'string.required': `"Email" is a required field`
            }),

    password: 
        Joi
            .string()
            .pattern(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,20}$/)
            .required()
            .messages({
                "string.pattern.base": `Password must have minimum eight characters, at least one letter, one number and one special character`,
                'string.required': `Password field is required`
            }),

    confirmPassword:
        Joi
            .equal(Joi.ref('password'))
            .required()
            .messages({
                'any.only': `Confirm password and password is not matching`,
                'string.required': `Please enter confirm password as well.`
            }),

});


export const loginSchemaValidator = Joi.object({

    email: 
        Joi
            .string()
            .email()
            .required()
            .messages({
                'string.email': "Please enter a valid email",
                'string.required': `"Email" is a required field`
            }),

    password: 
        Joi
            .string()
            .pattern(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,20}$/)
            .required()
            .messages({
                "string.pattern.base": `Password must have minimum eight characters, at least one letter, one number and one special character`,
                'string.required': `Password field is required`
            }),

    required:
        Joi
            .boolean()

})