import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import CartItem from "../cart/CartItem";
import EmptyCart from "../cart/emptyCart";
import { ScrollArea } from "../ui/scroll-area";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { closeCart } from "@/slices/cartSlice";

function Cart() {
  const { isOpen, products } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // useEffect(() => {
  //   axios
  //     .get("http://localhost:5000/products/")
  //     .then((res) => res.data)
  //     .then((res) => {
  //       setProducts(res.products);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, []);

  return (
    <>
      <Sheet
        open={isOpen}
        onOpenChange={() => {
          dispatch(closeCart());
        }}
      >
        <SheetContent className="w-11/12 max-w-96 px-0 flex flex-col gap-0">
          <SheetHeader className="border-b text-left px-4 sm:px-6 pb-2">
            <SheetTitle>CART</SheetTitle>
          </SheetHeader>
          {products.length == 0 ? (
            <EmptyCart />
          ) : (
            <>
              <ScrollArea className="px-4 sm:px-6 mr-2 flex-grow">
                <div className="flex flex-col gap-3 py-4 ">
                  {products.map((product, index) => (
                    <CartItem
                      product={product}
                      isLast={products.length - 1 == index}
                      key={index}
                    />
                  ))}
                </div>
              </ScrollArea>
              <SheetFooter className={"px-4 sm:px-6"}>
                <SheetClose asChild>
                  <Button
                    className={"sm:w-full"}
                    onClick={() => {
                      navigate("/checkout");
                    }}
                  >
                    Check Out
                  </Button>
                </SheetClose>
              </SheetFooter>
            </>
          )}
        </SheetContent>
      </Sheet>
    </>
  );
}

export default Cart;
