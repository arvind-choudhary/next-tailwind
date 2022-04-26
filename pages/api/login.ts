import nextConnect from "next-connect";
import type { NextApiRequest, NextApiResponse } from "next"; 
import { signUpHandler } from '../../server/handlers/users.handlers';


const loginRoute = nextConnect<NextApiRequest, NextApiResponse>();

loginRoute.post(signUpHandler);


export default loginRoute;