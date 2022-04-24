import nextConnect from "next-connect";
import type { NextApiRequest, NextApiResponse } from "next"; 
import { createUser } from '../../server/handlers/users.handlers';
import { onError, onNoMatch } from "../../server/utils/nextConnect.utils"


const userRoutes = nextConnect<NextApiRequest, NextApiResponse>({ onError, onNoMatch });

userRoutes.post(createUser);


export default userRoutes;