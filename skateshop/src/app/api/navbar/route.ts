import { NextResponse } from 'next/server';
import { prisma } from '../../../../prisma/prisma-client';

export async function GET() {
    try {
        const categories = await prisma.category.findMany({
            include: {
                subcategories: true,
            },
        })
        return NextResponse.json(categories);
    } catch (error) {
      console.error("Ошибка при получении navbar:", error);
      return NextResponse.json({ error: "Ошибка сервера" }, { status: 500 });
    }
}