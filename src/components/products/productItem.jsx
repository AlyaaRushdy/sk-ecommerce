/* eslint-disable react/prop-types */
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

function ProductItem({ product }) {
  const priceAfterDiscount = (originalPrice, discountPercentage) => {
    const discountedAmount = (originalPrice * discountPercentage) / 100;
    return originalPrice - discountedAmount;
  };

  return (
    <>
      <div className="relative rounded hover:border-y-2 hover:-my-0.5 border-primary transition-all duration-100 group">
        <Link to={`/product/${product.id}`}>
          <img
            src="/src/assets/HydratingOil.jpg"
            alt={`${product.title} image`}
            className="aspect-square w-full object-cover "
          />
        </Link>
        <div className="opacity-100 group-hover:opacity-0 transition-all">
          <Link to={`/product/${product.id}`}>
            <h2 className="text-lg sm:text-xl py-2">{product.title}</h2>
          </Link>
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
        <div className="text-center opacity-0 group-hover:opacity-100 transition-all">
          <Button className="absolute bottom-3 -translate-x-1/2">
            Add To Cart
            <span className="hidden sm:inline-block">
              -{" "}
              {priceAfterDiscount(
                product.basePrice,
                product.discountPercentage
              )}{" "}
              EGP
            </span>
          </Button>
        </div>
      </div>
    </>
  );
}

export default ProductItem;
