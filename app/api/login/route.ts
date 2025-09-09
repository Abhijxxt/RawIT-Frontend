import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { prisma } from "@/prisma/client";

export async function POST(request: NextRequest) {
    const { email, password } = await request.json();
    
    const SECRET_KEY = process.env.JWT_SECRET_KEY || "secretKey";

    const validateUser = await prisma.user.findUnique({
        where: {
            email: email,
        }
    })
    console.log(validateUser);
    if(!validateUser) {
        return NextResponse.json({error: "No user found"}, {status: 404})
    } else {
        console.log(validateUser);
        // const hashpassword = await bcrypt.hash(password, 10);
        console.log(validateUser.password);
        const validatePassword = await bcrypt.compare(password, validateUser.password);
        if(!validatePassword) {
            return NextResponse.json({error: "Wrong password"}, {status: 400});
        } else {
        
            const token = jwt.sign(validateUser, SECRET_KEY, { expiresIn: '1h' })

            const response = NextResponse.json({token}, {status: 200})
            response.cookies.set({
                name: "token",
                value: token,
                httpOnly: true, // secure cookie, not accessible via JS
                path: "/",      // cookie available on all routes
                maxAge: 60 * 60 // 1 hour in seconds
            });

            return response;
    
        
        }
    }

}