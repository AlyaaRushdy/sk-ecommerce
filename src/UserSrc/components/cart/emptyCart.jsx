import { ShoppingBasket } from "lucide-react";
function EmptyCart() {
  return (
    <>
      <div className="flex-grow flex flex-col justify-center items-center gap-4">
        <ShoppingBasket size={60} />
        <p className="capitalize">your cart is empty</p>
      </div>
    </>
  );
}

export default EmptyCart;
