import { prisma } from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export async function POST(request: NextRequest) {
    const { first_name, middle_name, last_name, phone_number, address, email, password } = await request.json();
    // console.log(first_name, middle_name, last_name, phone_number, address, email, password);
    const hashedPassword = await bcrypt.hash(password, 10);
    const createUser = await prisma.user.create({
        data: {
            first_name,
            middle_name,
            last_name,
            phone_number,
            address,
            email,
            password: hashedPassword
        }
    });
    if(createUser) {
        const SECRET_KEY = process.env.JWT_SECRET_KEY || "secretKey";
        const token = jwt.sign(createUser, SECRET_KEY, { expiresIn: '1h' })
        
        const response = NextResponse.json({token}, {status: 200})
        response.cookies.set({
            name: "token",
            value: token,
            httpOnly: true, // secure cookie, not accessible via JS
            path: "/",      // cookie available on all routes
            maxAge: 60 * 60 // 1 hour in seconds
        });
        
        return response;

        // return NextResponse.json({success: "User created successfully"}, {status: 200});
    } else {
        return NextResponse.json({error: "Error creating user"}, {status: 400});
    }
}