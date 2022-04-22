export class ErrorUtil extends Error {
    constructor({ status = 500, message = "Internal server error"}) {
        this.statue = status;
        this.message = message;
        Error.captureStackTrace(this, this.stack);
    }
}