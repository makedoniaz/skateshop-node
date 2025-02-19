import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const navbar = [
    {
        id: 1,
        name: "Skateboards",
        category: "skateboards",
        description: "The best skateboards for all levels of skaters.",
        items: [
            {
                id: 1,
                title: "All",
                href: "/docs/skateboards",
                description: "All skateboards",
            },
            {
                id: 2,
                title: "Desks",
                href: "/docs/skateboards/desks",
                description: "The board itself.",
            },
            {
                id: 3,
                title: "Wheels",
                href: "/docs/skateboards/wheels",
                description: "The wheels that go on the board.",
            },
            {
                id: 4,
                title: "Trucks",
                href: "/docs/skateboards/trucks",
                description: "The trucks that go on the board.",
            },
            {
                id: 5,
                title: "Bearings",
                href: "/docs/skateboards/bearings",
                description: "The bearings that go in the wheels.",
            },
            {
                id: 6,
                title: "Griptape",
                href: "/docs/skateboards/griptape",
                description: "The griptape that goes on the board.",
            },
            {
                id: 7,
                title: "Hardware",
                href: "/docs/skateboards/hardware",
                description: "The hardware that goes on the board.",
            },
            {
                id: 8,
                title: "Tools",
                href: "/docs/skateboards/tools",
                description: "The tools that go with the board.",
            },
        ],
    },
    {
        id: 2,
        name: "Clothing",
        category: "clothing",
        description: "Stylish and comfortable skateboarding clothing.",
        items: [
            {
                id: 1,
                title: "All",
                href: "/docs/clothing",
                description: "All Clothing",
            },
            {
                id: 2,
                title: "T-shirt",
                href: "/docs/clothing/t-shirt",
                description: "Cool and comfy tees for effortless style.",
            },
            {
                id: 3,
                title: "Hoodies",
                href: "/docs/clothing/hoodies",
                description: "Cozy up in trendy hoodies.",
            },
            {
                id: 4,
                title: "Pants",
                href: "/docs/clothing/pants",
                description: "Relaxed and stylish pants for everyday wear.",
            },
            {
                id: 5,
                title: "Shorts",
                href: "/docs/clothing/shorts",
                description: "Stay cool with casual and comfortable shorts.",
            },
            {
                id: 6,
                title: "Hats",
                href: "/docs/clothing/hats",
                description: "Top off your look with stylish and laid-back hats.",
            },
        ],
    },
    {
        id: 3,
        name: "Shoes",
        category: "shoes",
        description: "Rad shoes for long skate sessions.",
        items: [
            {
                id: 1,
                title: "All",
                href: "/docs/shoes",
                description: "All Shoes",
            },
            {
                id: 2,
                title: "Low Tops",
                href: "/docs/clothing/low-tops",
                description: "Rad low tops shoes for a stylish low-profile look.",
            },
            {
                id: 3,
                title: "High Tops",
                href: "/docs/clothing/high-tops",
                description: "Elevate your style with rad high top shoes.",
            },
            {
                id: 4,
                title: "Slip-ons",
                href: "/docs/clothing/slip-ons",
                description: "Effortless style with rad slip-on shoes.",
            },
            {
                id: 5,
                title: "Pros",
                href: "/docs/clothing/pros",
                description: "Performance-driven rad shoes for the pros.",
            },
            {
                id: 6,
                title: "Classics",
                href: "/docs/clothing/classics",
                description: "Timeless style with rad classic shoes.",
            },
        ],
    },
    {
        id: 4,
        name: "Accessories",
        category: "accessories",
        description: "The essential skateboarding accessories to keep you rolling.",
        items: [
            {
                id: 1,
                title: "All",
                href: "/docs/accessories",
                description: "All Accessories",
            },
            {
                id: 2,
                title: "Skate Tools",
                href: "/docs/accessories/skate-tools",
                description: "Essential tools for maintaining your skateboard, all rad.",
            },
            {
                id: 3,
                title: "Bushings",
                href: "/docs/accessories/skate-tools",
                description: "Upgrade your ride with our rad selection of bushings.",
            },
            {
                id: 4,
                title: "Shock & Riser Pads",
                href: "/docs/accessories/shock-riser-pads",
                description: "Enhance your skateboard's performance with rad shock and riser pads.",
            },
            {
                id: 5,
                title: "Skate Rails",
                href: "/docs/accessories/skate-rails",
                description: "Add creativity and style to your tricks with our rad skate rails.",
            },
            {
                id: 6,
                title: "Wax",
                href: "/docs/accessories/wax",
                description: "Keep your board gliding smoothly with our rad skate wax.",
            },
            {
                id: 7,
                title: "Socks",
                href: "/docs/accessories/socks",
                description: "Keep your feet comfy and stylish with our rad socks.",
            },
            {
                id: 8,
                title: "Backpacks",
                href: "/docs/accessories/backpacks",
                description: "Carry your gear in style with our rad backpacks.",
            },
        ],
    },
];

async function main() {
    for (const categoryData of navbar) {
        // Create the category
        const category = await prisma.category.create({
            data: {
                name: categoryData.name,
                description: categoryData.description,
                href: `/docs/${categoryData.category}`,
            },
        });

        console.log(`Created category: ${category.name}`);

        // Create subcategories using createMany with foreign key
        await prisma.subCategory.createMany({
            data: categoryData.items.map((item) => ({
                name: item.title,
                description: item.description,
                href: item.href,
                categoryId: category.id,  // Foreign key reference to the created category
            })),
        });

        console.log(`Created subcategories for category: ${category.name}`);
    }

    const productsCount = await prisma.product.count();

    if (productsCount > 0) {
        console.log("Products already exist! Skip product creation.");
        return;
    }

    await prisma.product.createMany({
        data: [
            // Категория 1 (2-8)
            ...[2, 3, 4, 5, 6, 7, 8].map((subId) => ({
                name: "Complete Skateboard",
                imageUrl: "https://images.unsplash.com/photo-1450644995374-1721affb8ecd?q=80&w=2070&auto=format&fit=crop",
                price: 120,
                href: "/products/complete-skateboard",
                description: "A complete skateboard ready to ride.",
                stockCount: 50,
                categoryId: 1,
                subCategoryId: subId,
                rating: 5,
                quantity: 1,
            })),
            ...[2, 3, 4, 5, 6, 7, 8].map((subId) => ({
                name: "Skateboard Deck",
                imageUrl: "https://images.unsplash.com/photo-1607822775841-940a09c90117?q=80&w=1931&auto=format&fit=crop",
                price: 60,
                href: "/products/skateboard-deck",
                description: "A high-quality skateboard deck.",
                stockCount: 75,
                categoryId: 1,
                subCategoryId: subId,
                rating: 4,
                quantity: 1,
            })),
        
            // Категория 2 (10-14)
            ...[10, 11, 12, 13, 14].map((subId) => ({
                name: "Complete Skateboard",
                imageUrl: "https://images.unsplash.com/photo-1450644995374-1721affb8ecd?q=80&w=2070&auto=format&fit=crop",
                price: 120,
                href: "/products/complete-skateboard",
                description: "A complete skateboard ready to ride.",
                stockCount: 50,
                categoryId: 2,
                subCategoryId: subId,
                rating: 5,
                quantity: 1,
            })),
            ...[10, 11, 12, 13, 14].map((subId) => ({
                name: "Skateboard Deck",
                imageUrl: "https://images.unsplash.com/photo-1607822775841-940a09c90117?q=80&w=1931&auto=format&fit=crop",
                price: 60,
                href: "/products/skateboard-deck",
                description: "A high-quality skateboard deck.",
                stockCount: 75,
                categoryId: 2,
                subCategoryId: subId,
                rating: 4,
                quantity: 1,
            })),
        
            // Категория 3 (16-20)
            ...[16, 17, 18, 19, 20].map((subId) => ({
                name: "Complete Skateboard",
                imageUrl: "https://images.unsplash.com/photo-1450644995374-1721affb8ecd?q=80&w=2070&auto=format&fit=crop",
                price: 120,
                href: "/products/complete-skateboard",
                description: "A complete skateboard ready to ride.",
                stockCount: 50,
                categoryId: 3,
                subCategoryId: subId,
                rating: 5,
                quantity: 1,
            })),
            ...[16, 17, 18, 19, 20].map((subId) => ({
                name: "Skateboard Deck",
                imageUrl: "https://images.unsplash.com/photo-1607822775841-940a09c90117?q=80&w=1931&auto=format&fit=crop",
                price: 60,
                href: "/products/skateboard-deck",
                description: "A high-quality skateboard deck.",
                stockCount: 75,
                categoryId: 3,
                subCategoryId: subId,
                rating: 4,
                quantity: 1,
            })),
        
            // Категория 4 (22-28)
            ...[22, 23, 24, 25, 26, 27, 28].map((subId) => ({
                name: "Complete Skateboard",
                imageUrl: "https://images.unsplash.com/photo-1450644995374-1721affb8ecd?q=80&w=2070&auto=format&fit=crop",
                price: 120,
                href: "/products/complete-skateboard",
                description: "A complete skateboard ready to ride.",
                stockCount: 50,
                categoryId: 4,
                subCategoryId: subId,
                rating: 5,
                quantity: 1,
            })),
            ...[22, 23, 24, 25, 26, 27, 28].map((subId) => ({
                name: "Skateboard Deck",
                imageUrl: "https://images.unsplash.com/photo-1607822775841-940a09c90117?q=80&w=1931&auto=format&fit=crop",
                price: 60,
                href: "/products/skateboard-deck",
                description: "A high-quality skateboard deck.",
                stockCount: 75,
                categoryId: 4,
                subCategoryId: subId,
                rating: 4,
                quantity: 1,
            })),
        ]
    });

    console.log("Products were successfully added!");
}

main()
    .catch((e) => {
        console.error(e);
    })
    .finally
