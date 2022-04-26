import NextAuth, { Awaitable, IncomingRequest, User } from "next-auth";
import GithubProvider from "next-auth/providers/github"
import { MongoDBAdapter } from "@next-auth/mongodb-adapter"
import clientPromise from "../../../lib/mongodb";
import CredentialsProvider from "next-auth/providers/credentials"; "next-auth/providers/credentials";

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
            credentials: {
                username: { label: "email", type: "text", placeholder: "jsmith" },
                password: { label: "Password", type: "password" }
            },
            authorize: function (credentials: Record<keyof C, string>, req: Pick<IncomingRequest, "headers" | "body" | "query" | "method">): Awaitable<Omit<User, "id"> | { id?: string; }> {
                console.log(credentials)
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