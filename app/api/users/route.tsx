import { NextRequest, NextResponse } from "next/server";
import UserSchema from './schema';
export function GET(request: NextRequest){//if we remove request: NextRequest, NextJS will cache the response of this endpoint
    return NextResponse.json([{
        id: 1,
        name: 'John Doe'
    },{
        id: 2,
        name: 'Jane Doe'
        
    }]);
}



export async function POST(request: NextRequest){
    const body = await request.json();
    const validation = UserSchema.safeParse(body);
    if(!validation.success) 
        return NextResponse.json(validation.error.errors, {status:400});
    return NextResponse.json({message: 'User created', body}, {status:201});
}
 