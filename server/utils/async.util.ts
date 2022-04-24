export const asyncUtil = (cb) => {
    return async (req, res, next) => {
        try {
            return await cb(req, res, next).catch(next);     
        } catch (error) {
            next(error);    
        }
    }
}