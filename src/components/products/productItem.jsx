/* eslint-disable react/prop-types */
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { add } from "@/slices/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

function ProductItem({ product }) {
  const { productsIds } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const { toast } = useToast();

  const priceAfterDiscount = (originalPrice, discountPercentage) => {
    const discountedAmount = (originalPrice * discountPercentage) / 100;
    return originalPrice - discountedAmount;
  };

  const handleAddToCart = () => {
    dispatch(add({ ...product, quantity: 1 }));
    toast({
      description: `${product.title} added to cart successfully!`,
    });
  };

  return (
    <>
      <div className="relative rounded border-y-2 border-y-transparent hover:border-y-primary transition-all group">
        <Link to={`/product/${product.id}`}>
          <img
            src="/src/assets/HydratingOil.jpg"
            alt={`${product.title} image`}
            className="aspect-square w-full object-cover"
          />
        </Link>
        <div className="opacity-100 visible group-hover:opacity-0 group-hover:invisible transition-all">
          <h2 className="text-lg sm:text-xl py-2">{product.title}</h2>
          <p>
            {priceAfterDiscount(product.basePrice, product.discountPercentage)}{" "}
            EGP
            {product.discountPercentage > 0 && (
              <span className="ms-1 text-sm text-red-400 line-through">
                {product.basePrice} EGP
              </span>
            )}
          </p>
        </div>
        <Button
          className="absolute bottom-0 left-1/2 -translate-x-1/2 opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:-translate-y-3 group-hover:disabled:opacity-50 transition-all"
          onClick={handleAddToCart}
          disabled={productsIds.includes(product.id) ? true : false}
        >
          Add To Cart
          <span className="hidden sm:inline-block">
            -{" "}
            {priceAfterDiscount(product.basePrice, product.discountPercentage)}{" "}
            EGP
          </span>
        </Button>
      </div>
    </>
  );
}

export default ProductItem;
