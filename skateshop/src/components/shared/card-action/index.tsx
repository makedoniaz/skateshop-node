"use client";

import { ItemProps } from "@/components/helpers/interfaces/items";
import QuantitySelector from "../quantity-selector";
import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";
import { useProductStore } from "@/store";
import { useState } from "react";

export default function CardAction({ product }: { product: ItemProps }) {
  const { setProducts } = useProductStore();
  const [ isFirstClick, setIsFirstClick ] = useState<boolean>(true)

  const addProducts = (
    event: React.MouseEvent<HTMLButtonElement>,
    product: ItemProps
  ) => {
    
    setIsFirstClick(false)

    event.preventDefault();
    setProducts((prev) => {
      const current = prev.find((p) => p.id === product.id);
      if (current) {
        if (isFirstClick)
          alert("This product is already in card!")

        return prev.map((p) =>
          p.id === product.id ? { ...p, quantity: (p.quantity || 1) + (isFirstClick ? 0 : 1) } : p
        );
      }
      
      alert("Product was successfully added to your card!")
      
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  return (
    <div className="flex flex-col gap-4">
      <QuantitySelector id={product.id} />

      <div className="flex gap-4">
        <Button className="flex-1 bg-white hover:bg-zinc-200">Buy now </Button>
        <Button
          variant={"outline"}
          className="flex-1 border-zinc-800"
          onClick={(event) => addProducts(event, product)}
        >
          Add to card
        </Button>
        <Button variant={"outline"} className="flex-1 border-zinc-800">
          <Heart className="w-4 h-4" />
        </Button>
      </div>
    </div>
  );
}
