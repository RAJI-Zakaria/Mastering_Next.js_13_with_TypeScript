import { PrismaAdapter } from "@auth/prisma-adapter";
import GoogleProvider from "next-auth/providers/google"
import CredentialsProvider from "next-auth/providers/credentials" 
import bcrypt from 'bcrypt';
import prisma from "@/prisma/client";

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
      // authorized function
      async authorize(credentials, req) {
        if (!credentials?.email || !credentials?.password) return null;
        const user = await prisma.user.findUnique({
          where: {
            email: credentials.email
          }
        })
        if (!user) return null;

        const passwordMatch = await bcrypt.compare(credentials.password, user.hashedPassword!)

        return passwordMatch ? user : null;
      }
    })
  ],
  session: {
    strategy: "jwt" , // Type assertion
  }
}