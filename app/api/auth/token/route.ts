import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";

//i am rendering the token data, please note that this is for testing purposes
/*

  "name": "vvvvvv",
  "email": "vvvvvvv@gmail.com",
  "picture": "vvvvv",
  "sub": "vvvvvv",
  "iat": 1708441815,
  "exp": 1711033815,
  "jti": "vvvvvv"
}

*/
export async function GET(request: NextRequest){
    const token = await getToken({req:request})
    return NextResponse.json(token);
}