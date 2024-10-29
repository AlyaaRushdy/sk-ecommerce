import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import axios from "axios";
import { useEffect, useState } from "react";
import CartItem from "../cart/CartItem";

function Cart() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5000/products/")
      .then((res) => res.data)
      .then((res) => {
        setProducts(res.products);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline">Cart</Button>
        </SheetTrigger>
        <SheetContent className="w-5/6 max-w-96 px-4 sm:px-6">
          <SheetHeader className=" text-left pb-2">
            <SheetTitle>CART</SheetTitle>
          </SheetHeader>
          {products.length > 0 && (
            <div className="flex flex-col gap-3 py-4">
              {products.map((product, index) => (
                <CartItem
                  product={product}
                  isLast={products.length - 1 == index}
                  key={index}
                />
              ))}
            </div>
          )}
          <SheetFooter>
            <SheetClose asChild>
              <Button className={"sm:w-full"}>Check Out</Button>
            </SheetClose>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </>
  );
}

export default Cart;
