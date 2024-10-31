/* eslint-disable react/prop-types */
import { Plus, Minus, Trash2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { useDispatch } from "react-redux";
import { decrement, increment, remove } from "@/slices/cartSlice";
import { useToast } from "@/hooks/use-toast";

function CartItem({ product, isLast }) {
  const dispatch = useDispatch();
  const { toast } = useToast();

  const handleRemoveFromCart = () => {
    dispatch(remove(product));
    toast({
      description: `${product.title} removed from cart successfully!`,
    });
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
          {product.discountPercentage > 0 ? (
            <p>
              {product.priceAfterDiscount} EGP
              <span className="ms-1 text-sm text-red-400 line-through">
                {product.basePrice} EGP
              </span>
            </p>
          ) : (
            <p>{product.basePrice}</p>
          )}
          <div className="flex flex-row gap-1 justify-between items-center pt-2">
            <div className="p-1 border flex gap-1 justify-center items-center">
              <Button
                className={
                  "h-auto p-1.5 hover:bg-background hover:text-primary"
                }
                variant="ghost"
                onClick={() => {
                  dispatch(decrement(product));
                }}
                disabled={product.quantity > 1 ? false : true}
              >
                <Minus />
                <span className="sr-only">decrease item quantity</span>
              </Button>
              <p>{product.quantity}</p>
              <Button
                className="h-auto p-1.5 hover:bg-background hover:text-primary"
                variant="ghost"
                onClick={() => {
                  dispatch(increment(product));
                }}
              >
                <Plus />
                <span className="sr-only">increase item quantity</span>
              </Button>
            </div>
            <Button
              className="h-auto p-2.5"
              variant="destructive"
              onClick={handleRemoveFromCart}
            >
              <Trash2 />
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default CartItem;
