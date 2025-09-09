import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";
const SECRET_KEY = process.env.JWT_SECRET_KEY || "secretKey";
export async function GET(request: NextRequest) {
    try {
        const token = request.cookies.get("token")?.value;
        if(!token) {
            return NextResponse.json({error: "User not logged in!"}, {status: 404})
        }
        const data = jwt.verify(token, SECRET_KEY)
        if(!data) {
            return NextResponse.json({error: "User do not match!"}, {status: 400})
        } 
        // console.log(data);
        return NextResponse.json(data, {status: 200})
    } catch(err) {
        return NextResponse.json({error: "Expired"}, {status: 400})
    }
    
}