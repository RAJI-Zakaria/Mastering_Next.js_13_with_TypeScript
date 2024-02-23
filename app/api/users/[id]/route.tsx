import { NextRequest, NextResponse } from "next/server";
import UserSchema from '../schema';
import prisma from "@/prisma/client";

export async function GET (request: NextRequest, {params}:{
    params: {id:string}
}){
    const user = await prisma.user.findUnique({
        where: {id: String(params.id)}
    });

    if(!user) return NextResponse.json({error: 'user not found'}, {status:404})

    return NextResponse.json(user);
}


export async function PUT( request: NextRequest, {params}:{params:{id:string}}){
    const body = await request.json();
    const validation = UserSchema.safeParse(body)
    if(!validation.success) return NextResponse.json(validation.error.errors, {status:400});
    
    const findUser = await prisma.user.findUnique({
        where: {id: String(params.id)}
    });
    
    if(!findUser) return NextResponse.json({error: 'user not found'}, {status:404});

    const user = await prisma.user.update({
        where: {id: String(params.id)},
        data: body
    });
    
    return NextResponse.json({message: 'User updated', user});
 
}


export async function DELETE( request: NextRequest, {params}:{params:{id:string}}){
    const findUser = await prisma.user.findUnique({
        where: {id: String(params.id)}
    });
    if(!findUser) return NextResponse.json({error: 'user not found'}, {status:404});
    await prisma.user.delete({
        where: {id: String(params.id)}
    });
    return NextResponse.json({message: 'User deleted'});
}
