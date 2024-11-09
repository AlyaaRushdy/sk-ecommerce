/* eslint-disable react/prop-types */
import { Plus, Minus, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useDispatch, useSelector } from "react-redux";
import {
  decrement,
  decrementItem,
  increment,
  incrementItem,
  remove,
  removeItem,
} from "@/Redux/cartSlice";
import { useToast } from "@/hooks/use-toast";

function CartItem({ product, isLast }) {
  const { token } = useSelector((state) => state.user);
  const { status } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const { toast } = useToast();

  const handleRemoveFromCart = () => {
    if (token) {
      dispatch(removeItem({ token, productId: product.id }));
      if (status == "succeeded") {
        toast({
          description: `${product.title} removed from cart successfully!`,
        });
      } else if (status == "failed") {
        toast({
          variant: "destructive",
          description: `something went wrong, please try again later!`,
        });
      }
    } else {
      dispatch(remove(product));
    }
  };

  const handleIncrement = () => {
    if (token) {
      dispatch(incrementItem({ token, productId: product.id }));
      if (status == "failed") {
        toast({
          variant: "destructive",
          description: `something went wrong, please try again later!`,
        });
      }
    } else {
      dispatch(increment(product));
    }
  };

  const handleDecrement = () => {
    if (token) {
      dispatch(decrementItem({ token, productId: product.id }));
      if (status == "failed") {
        toast({
          variant: "destructive",
          description: `something went wrong, please try again later!`,
        });
      }
    } else {
      dispatch(decrement(product));
    }
  };

  return (
    <>
      <div
        className={`grid grid-cols-cart items-center gap-4 pb-3
          ${!isLast ? "border-b" : ""} ${
          status == "loading" ? "cursor-progress" : ""
        }`}
      >
        <img
          src={product.images[0]}
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
                className={`h-auto p-1.5 hover:bg-background hover:text-primary ${
                  status == "loading" && "cursor-progress"
                }`}
                variant="ghost"
                onClick={handleDecrement}
                disabled={product.quantity > 1 ? false : true}
              >
                <Minus />
                <span className="sr-only">decrease item quantity</span>
              </Button>
              <p>{product.quantity}</p>
              <Button
                className={`h-auto p-1.5 hover:bg-background hover:text-primary ${
                  status == "loading" && "cursor-progress"
                }`}
                variant="ghost"
                onClick={handleIncrement}
                disabled={product.quantity == product.stock ? true : false}
              >
                <Plus />
                <span className="sr-only">increase item quantity</span>
              </Button>
            </div>
            <Button
              className={`h-auto p-2.5 ${
                status == "loading" && "cursor-progress"
              }`}
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
