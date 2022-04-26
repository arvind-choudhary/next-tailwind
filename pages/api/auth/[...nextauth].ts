import NextAuth, { Awaitable, IncomingRequest, User } from "next-auth";
import GithubProvider from "next-auth/providers/github"
import { MongoDBAdapter } from "@next-auth/mongodb-adapter"
import clientPromise from "../../../lib/mongodb";
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
            credentials: {},
            authorize: async function (credentials: Record<keyof C, string>, req: Pick<IncomingRequest, "headers" | "body" | "query" | "method">): Awaitable<Omit<User, "id"> | { id?: string; }> {
                if (!credentials?.email || !credentials?.password) {
                    throw new Error('Please enter a valid credentials')
                }
                
                const user = await userModel.findOne({ email: credentials.username });

                if (!user) {
                    throw new Error('User does not exsist.') 
                }

                


            }
        })
    ],
    //
    secret: "ZLh6V0SfcTqy1448O53o1Ds2KYB3Y63SoRsqPlnvZHI=",
    //
    pages: {
        signIn: '/user/login'
    },
    logger: {
        error(code, metadata) {
          console.error(code, metadata)
        },
        warn(code) {
            console.warn(code)
        },
        debug(code, metadata) {
            console.debug(code, metadata)
        }
    }
})