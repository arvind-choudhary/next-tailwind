import HTTP_STATUS from "../config/error.messages.json"

interface Props {
    error?: object;
    message?: string;
    statusCode?: number;
}

export class ErrorHandler extends Error {
    constructor({ error, statusCode = 500, message = ""}: Props) {
        super()
        this.statusCode = statusCode;
        this.cause = error;
        this.message = message;
    }
}

export const getErrorByType = (type = 'signup') => (statusCode = "200") => HTTP_STATUS[type][statusCode];