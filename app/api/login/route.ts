import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export async function POST(request: NextRequest) {
    const { email, password } = await request.json();
    
    const EMAIL = "abhijeetchatterjee2004@gmail.com";
    const PASSWORD = "Abhijeet@10";
    const hashpassword = await bcrypt.hash(PASSWORD, 10);
    const SECRET_KEY = "RawIT@123_Abhijeet";

    if(email === EMAIL) {
        const validatePassword = await bcrypt.compare(password, hashpassword);
        if(!validatePassword){
            return NextResponse.json({error: "Wrong password"}, {status: 404});
        }

        const token = jwt.sign({uid: 1, email: email}, SECRET_KEY, { expiresIn: '1hr' })

        const response = NextResponse.json({token}, {status: 200})
        response.cookies.set({
            name: "token",
            value: token,
            httpOnly: true, // secure cookie, not accessible via JS
            path: "/",      // cookie available on all routes
            maxAge: 60 * 60 // 1 hour in seconds
        });

        return response;

    } else {
        return NextResponse.json({error: "Email not found"}, {status: 404});
    }

}