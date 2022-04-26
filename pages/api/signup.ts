import nextConnect from "next-connect";
import type { NextApiRequest, NextApiResponse } from "next"; 
import { onError, onNoMatch } from "../../server/utils/nextConnect.utils";
import { signUpHandler } from '../../server/handlers/users.handlers';
import { signUpSchemaValidator } from "../../server/validators/userSchema.validators";
import { validateSchema } from "../../server/utils/validateSchema.util";

const userRoutes = nextConnect<NextApiRequest, NextApiResponse>({ onError, onNoMatch });

userRoutes.use(validateSchema(signUpSchemaValidator, 'body'));
userRoutes.post(signUpHandler);


export default userRoutes;