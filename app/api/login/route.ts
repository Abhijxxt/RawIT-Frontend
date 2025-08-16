import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcrypt";


export async function POST(request: NextRequest) {
    const { email, password } = await request.json();
    
    const EMAIL = "abhijeetchatterjee2004@gmail.com";
    const PASSWORD = "Abhijeet@10";
    const hashpassword = await bcrypt.hash(PASSWORD, 10);

    if(email == "abhijeetchatterjee2004@gmail.com") {
        const validatePassword = await bcrypt.compare(password, hashpassword);
        if(!validatePassword){
            return NextResponse.json({error: "Wrong password"}, {status: 404});
        }
        return NextResponse.json({uid: 1, email: email}, {status: 200})
    } else {
        return NextResponse.json({error: "Email not found"}, {status: 404});
    }

}