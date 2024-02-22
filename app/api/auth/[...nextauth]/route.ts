import NextAuth, { NextAuthOptions } from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import CredentialsProvider from "next-auth/providers/credentials"
import prisma from "@/prisma/client"
import { PrismaAdapter } from "@auth/prisma-adapter"

import bcrypt from 'bcrypt';

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
        }),
        CredentialsProvider({
          // The name to display on the sign in form (e.g. 'Sign in with...')
          name: 'Credentials',
          credentials: {
            email: { label: "Email", type: "email", placeholder: "Email@example.com" },
            password: { label: "Password", type: "password" }
          },
          //authorized function
          async authorize(credentials, req) {
            if(!credentials?.email || !credentials?.password) return null;
            const user = await prisma.user.findUnique({
              where: {
                email: credentials.email
              }
            })
            if(!user) return null;

            const passwordMatch = await bcrypt.compare(credentials.password, user.hashedPassword!)

            return passwordMatch ? user : null;
          }
        })
      ],
      session: {
        strategy: "jwt",
      }
}

const handler = NextAuth(authOptions);


export {handler as GET, handler as POST}