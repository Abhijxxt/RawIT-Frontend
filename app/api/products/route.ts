import { prisma } from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
    const products = await prisma.products.findMany({
        take: 10
    })
    if(!products) {
        return NextResponse.json({"error": "Products failed to fetch"}, {status: 400})
    }
    return NextResponse.json(products, {status: 200})
}

export async function POST(request: NextRequest) {
    const { pid } = await request.json();
    // const product = await prisma.products.findUnique({
    //     where: {
    //         pid: parseInt(pid)
    //     }
    // })
    const product = await prisma.$queryRaw`SELECT products.*, vendor.name AS vendor_name, vendor.phone, vendor.address FROM products,vendor WHERE products.vid = vendor.vid AND products.pid = ${parseInt(pid)}`;
    if(!product) {
        return NextResponse.json({"error": "Product not found"}, {status: 400})
    }
    return NextResponse.json(product, {status: 200})
}