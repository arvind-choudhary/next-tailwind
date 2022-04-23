import nextConnect from "next-connect";
import type { NextApiRequest, NextApiResponse } from "next"; 
import { createUser } from '../../server/handlers/uers.handlers';


const userRoutes = nextConnect<NextApiRequest, NextApiResponse>();

userRoutes.post('/', createUser);


export default userRoutes;