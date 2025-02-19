import { NextResponse } from "next/server";
import { prisma } from "../../../../../../prisma/prisma-client";

function formatSpecialCases(subCategoryName: string) {
    const replacements: { [key: string]: string } = {
        'high-tops': 'High Tops',
        'low-tops': 'Low Tops',
        'skate-rails': 'Skate Rails',
        'skate-tools': 'Skate Tools',
        'shock-riser-pads': "Shock & Riser Pads"
    };

    const result = replacements[subCategoryName] || subCategoryName;
    const isChanged = result !== subCategoryName;

    return { result, isChanged };
}

export async function GET(req: Request, { params }: { params: { href: string } }) {
     try {  
            const formattedSubCategory = formatSpecialCases(params.href)


            const subCategory = await prisma.subCategory.findFirst({
                where: { name: formattedSubCategory.isChanged ? formattedSubCategory.result :
                    formattedSubCategory.result.charAt(0).toUpperCase() + formattedSubCategory.result.slice(1).toLowerCase(), 
                }
            });

            if (!subCategory) {
                return NextResponse.json({ error: "Subcategory not found" }, { status: 404 });
            }
    
            console.log("Found subcategory:", subCategory);

            const products = await prisma.product.findMany({
                where: { subCategoryId: subCategory.id }
            });
    
            return NextResponse.json(products);
        } catch (error) {
            console.error("Error while getting navbar:", error);
            return NextResponse.json({ error: "Server Error!" }, { status: 500 });
        }
}