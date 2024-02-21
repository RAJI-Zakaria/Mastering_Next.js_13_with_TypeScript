import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";

// i m willing to add adapter but it is not working yet.
//TODO : there is a version error with the prisma adapter auth -- next-auth.
//this part is not fully implemented yet.
//----to be continued -----


export const authOptions = {
    providers: [
        GoogleProvider({
          clientId: process.env.GOOGLE_CLIENT_ID!,
          clientSecret: process.env.GOOGLE_CLIENT_SECRET!
        })
      ]
}

const handler = NextAuth(authOptions);


export {handler as GET, handler as POST}