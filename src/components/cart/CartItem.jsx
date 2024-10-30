/* eslint-disable react/prop-types */
import { useState } from "react";
import { Plus, Minus, Trash2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

function CartItem({ product, isLast }) {
  const [count, setCount] = useState(1);

  const priceAfterDiscount = (originalPrice, discountPercentage) => {
    const discountedAmount = (originalPrice * discountPercentage) / 100;
    return originalPrice - discountedAmount;
  };

  return (
    <>
      <div
        className={cn(
          "grid grid-cols-cart items-center gap-4 pb-3",
          !isLast ? "border-b" : ""
        )}
      >
        <img
          src="/src/assets/HydratingOil.jpg"
          alt={`${product.title} image`}
          className="w-full"
        />
        <div>
          <p className="font-bold">{product.title}</p>
          <p>{`${product.volume} - ${product.scent}`}</p>
          <p className="">
            {priceAfterDiscount(product.basePrice, product.discountPercentage)}{" "}
            EGP
            <span className="ms-1 text-sm text-red-400 line-through">
              {product.basePrice} EGP
            </span>
          </p>
          <div className="flex flex-row gap-1 justify-between items-center pt-2">
            <div className="p-1 border flex gap-1 justify-center items-center">
              <Button
                className={
                  "h-auto p-1.5 hover:bg-background hover:text-primary"
                }
                variant="ghost"
                onClick={() => {
                  setCount(count - 1);
                }}
                disabled={count > 1 ? false : true}
              >
                <Minus />
                <span className="sr-only">decrease item quantity</span>
              </Button>
              <p>{count}</p>
              <Button
                className="h-auto p-1.5 hover:bg-background hover:text-primary"
                variant="ghost"
                onClick={() => {
                  setCount(count + 1);
                }}
              >
                <Plus />
                <span className="sr-only">increase item quantity</span>
              </Button>
            </div>
            <Button className="h-auto p-2.5" variant="destructive">
              <Trash2 />
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default CartItem;