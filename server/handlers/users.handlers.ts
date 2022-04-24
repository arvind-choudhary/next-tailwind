import { userModel } from "../model/user.model";
import { asyncUtil } from "../utils/async.util";


export const createUser = asyncUtil(async (req, res, next) => {
    const { email } = req.body;
    const resp = await userModel.findOne({ email }).catch(console.error);
    console.log(resp);
    
    next();
});