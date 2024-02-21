// import { NextRequest, NextResponse } from "next/server";
// import middleware from 'next-auth/middleware'
export {default} from 'next-auth/middleware'
//export default middleware;

export const config = {
    //*: 0 or more parameters
    //+: 1 or more 
    //?: 0 or one
    
    matcher: [
        // '/users/:id*',
        // '/products/:id*',
        '/admin/:id*'
    ]
}
