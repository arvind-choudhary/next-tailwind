import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github"

export default NextAuth({

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
    ],
    secret: "ZLh6V0SfcTqy1448O53o1Ds2KYB3Y63SoRsqPlnvZHI="
})