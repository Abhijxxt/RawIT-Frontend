import { prisma } from "@/prisma/client";
import { NextResponse } from "next/server";

export async function GET() {
    const usersPerMonth = await prisma.usersPerMonth.findMany();
    return NextResponse.json(usersPerMonth, {status: 200})
}