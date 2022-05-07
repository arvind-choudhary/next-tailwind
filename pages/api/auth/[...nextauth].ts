import NextAuth, { Awaitable, IncomingRequest, User } from "next-auth";
import GithubProvider from "next-auth/providers/github"
import { MongoDBAdapter } from "@next-auth/mongodb-adapter"
import clientPromise from "../../../common/lib/mongodb";
import CredentialsProvider from "next-auth/providers/credentials"; "next-auth/providers/credentials";
import { getErrorByType, ErrorHandler } from "../../../server/utils/error.util";
import { userModel } from "../../../server/model/user.model";

const getAuthErrorMessages = getErrorByType('auth');
const getLoginErrorMessage = getErrorByType('login');

export default NextAuth({

    adapter: MongoDBAdapter(clientPromise),

    // Configure one or more authentication providers
    providers: [

        GithubProvider({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET,
            httpOptions: {
                timeout: 10000,
            }
        }),
        // ...add more providers here
        CredentialsProvider({
            id: 'credentials',
            name: 'Credentials',
            credentials: {},
            authorize: async function (credentials: Record<keyof C, string>, req: Pick<IncomingRequest, "headers" | "body" | "query" | "method">): Awaitable<Omit<User, "id"> | { id?: string; }> {
                console.log("====================", credentials)
                if (!credentials?.email || !credentials?.password) {
                    throw new ErrorHandler({...getAuthErrorMessages("400"), statusCode: 400 });
                }
                // find is user exsist in db
                const user = await userModel.findOne({ email: credentials.email });
                // if user not exsist then throw an error
                if (!user) {
                    throw new ErrorHandler({...getAuthErrorMessages("404"), statusCode: 400 });
                }

                


            }
        })
    ],
    //
    secret: "ZLh6V0SfcTqy1448O53o1Ds2KYB3Y63SoRsqPlnvZHI=",
    //
    pages: {
        signIn: '/user/login'
    }
})