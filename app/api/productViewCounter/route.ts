import { prisma } from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
    const { pid } = await request.json();
    const interestedCount = await prisma.$queryRaw`UPDATE products SET clicks=clicks+1 WHERE products.pid = ${parseInt(pid)}`;
    return NextResponse.json({"success": "success"}, {status:200});
}