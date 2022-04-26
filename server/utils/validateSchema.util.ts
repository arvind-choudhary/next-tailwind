import { ErrorHandler, getErrorByType } from "./error.util";

const getSchemaMessages = getErrorByType('schemavalidation');

export const validateSchema = (schema, reqType = 'body') => {
    return (req, res, next) => {
        const hasError = schema?.validate(req[reqType], { abortEarly: false });
        if (hasError?.error) {
            return next(new ErrorHandler({ ...getSchemaMessages("400"), error: hasError.error, statusCode: 400 }))
        }
        next();
    }
}