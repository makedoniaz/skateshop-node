import { ItemProps } from "@/components/helpers/interfaces/items";
import QuantitySelector from "@/components/shared/quantity-selector";
import { Button } from "@/components/ui/button";
import { Heart, Star } from "lucide-react";
import Image from "next/image";

import { items } from "@/data/items";



interface ProdProps {
  params: Promise<{
    path: string;
  }>;
}

export default async function ProductCategory({ params }: ProdProps) {
  const { path } = await params;

  const product = items
    .flatMap((item) => item)
    .find((item) => item.path === `/products/${path}`);

  return (
    <div className="min-h-screen container p-5">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
        <div className="aspect-square relative overflow-hidden rounded-lg">
          <Image
            src="https://www.freeiconspng.com/thumbs/no-image-icon/no-image-icon-6.png"
            alt={product?.name || "No image"}
            fill
            className="object-cover"
          />
        </div>

        <div className="space-y-6">
          <div>
            <div>
              <h1 className="text-2xl font-bold mb-2">
                Product Name
              </h1>
              <p className="text-zinc-400">
                Description
              </p>
            </div>

            <div>
              <p className="font-bold">
                $100
              </p>
            </div>

            <div>
              <p className="text-zinc-400">
                In Stock
              </p>
            </div>

            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-5 h-5 ${
                    i < 0
                      ? "text-yellow-400"
                      : "text-gray-400"
                  }`}
                  fill="currentColor"
                />
              ))}
            </div>

            <QuantitySelector />

            <div className="flex gap-4">
              <Button className="flex-1 bg-white hover:bg-zinc-200">
                Buy now{" "}
              </Button>
              <Button variant={"outline"} className="flex-1 border-zinc-800">
                Add to card
              </Button>
              <Button variant={"outline"} className="flex-1 border-zinc-800">
                <Heart className="w-4 h-4" />
              </Button>
            </div>

            <div className="mt-8 flex flex-col gap-4">
              <h2 className="text-xl font-bold">Description</h2>
              <p className="text-zinc-400">
                Description
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}