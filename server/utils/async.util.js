import { getErrorByType } from "../constants/error.messages";
import { ErrorUtil } from "./error.util"

const getServerError = getErrorByType();

export const asyncUtil = (cb) => {
    return async (req, res, next) => {
        try {
            return await cb(req, res, next).catch((error) => { next(new ErrorUtil({ ...getServerError(), error })) });     
        } catch (error) {
            next(new ErrorUtil({...getServerError(500), error}))     
        }
    }
}