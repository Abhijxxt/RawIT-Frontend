import { prisma } from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
    const { title, description, status, person_id, category } = await request.json();
    const createUserIssue = await prisma.issues.create({
        data: {
            title,
            description,
            status,
            person_id,
            category
        }
    })
    if(createUserIssue) {
        return NextResponse.json(createUserIssue, { status: 200 });
    } else {
        return NextResponse.json({error: "Error creating issue"}, {status: 500});
    }
}