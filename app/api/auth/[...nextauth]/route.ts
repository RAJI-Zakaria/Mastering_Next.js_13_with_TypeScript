import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import prisma from "@/prisma/client"
import { PrismaAdapter } from "@auth/prisma-adapter"

// i m willing to add adapter but it is not working yet.
// DONE : by following the documentation, i have solved the problem.
// there is a version error with the prisma adapter auth -- next-auth.
// This part is not fully implemented yet.
//---- Finished -----


export const authOptions = {
  adapter: PrismaAdapter(prisma),
    providers: [
        GoogleProvider({
          clientId: process.env.GOOGLE_CLIENT_ID!,
          clientSecret: process.env.GOOGLE_CLIENT_SECRET!
        })
      ]
}

const handler = NextAuth(authOptions);


export {handler as GET, handler as POST}