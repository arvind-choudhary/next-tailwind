import { userModel } from "../model/user.model";
import { asyncUtil } from "../utils/async.util";
import { ErrorHandler, getErrorByType } from "../utils/error.util";

const getSignupMessages = getErrorByType('signup');

export const createUser = asyncUtil(async (req, res, next) => {
    const { firstName, lastName, email, password } = req.body;
    const isUserExsist = await userModel.findOne({ email }).catch((error) => next(new ErrorHandler({ ...getSignupMessages("404"), statusCode: 404, error })));

    /**
        if user exsist in DB, throw an error
    */
    if (isUserExsist) {
        return next(new ErrorHandler({ ...getSignupMessages("409"), statusCode: 409 }))
    }
    /**
     *  Create user in data base
     */
    const createUser = await userModel.create({ firstName, lastName, email, password });
    res.status(201).json({ ...getSignupMessages("201"), userData: { firstName, lastName, email }});

});