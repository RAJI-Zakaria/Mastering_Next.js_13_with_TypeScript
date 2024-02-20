import { NextRequest, NextResponse } from "next/server";
import UserSchema from './schema';
import prisma from "@/prisma/client";

export async function GET(request: NextRequest){//if we remove request: NextRequest, NextJS will cache the response of this endpoint
    const users = await prisma.user.findMany();
    return NextResponse.json(users);
}

export async function POST(request: NextRequest){
    const body = await request.json();
    const validation = UserSchema.safeParse(body);
    if(!validation.success) 
        return NextResponse.json(validation.error.errors, {status:400});

    const findUser = await prisma.user.findUnique({
        where: {email: body.email}
    });

    if(findUser) return NextResponse.json({error: 'user already exists [email]'}, {status:400});

    const user = await prisma.user.create({data: {
        name: body.name,
        email: body.email,
    }});
    return NextResponse.json(user, {status:201});
}