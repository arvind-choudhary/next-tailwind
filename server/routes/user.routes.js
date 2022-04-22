import nextConnect from "next-connect";
import { userSchemaValidator } from "../validators/user.validators";
import { createUser } from '../handlers/uers.handlers';


const userRoutes = nextConnect();

userRoutes
    .post('/', userSchemaValidator, createUser)
