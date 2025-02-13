import { NextResponse } from "next/server";
import { prisma } from "../../../../../prisma/prisma-client";

export async function GET(req: Request, { params }: { params: { category: string } }) {
    try {
        const category = await prisma.category.findFirst({
            where: {
                name: params.category.charAt(0).toUpperCase() + params.category.slice(1).toLowerCase(),
            },

            include: {
                subcategories: true,
            },
        })

        return NextResponse.json(category);
    } catch (error) {
        console.error("Ошибка при получении navbar:", error);
        return NextResponse.json({ error: "Ошибка сервера" }, { status: 500 });
    }
}