import NextAuth from "next-auth";
import { authOptions } from "../authOptions";

// i m willing to add adapter but it is not working yet.
// DONE : by following the documentation, i have solved the problem.
// there is a version error with the prisma adapter auth -- next-auth.
// This part is not fully implemented yet.
//---- Finished -----



const handler = NextAuth(authOptions);


export { handler as GET, handler as POST };
