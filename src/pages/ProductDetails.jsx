import React, { useEffect, useState } from "react";
import axios from "axios";
import { Button } from "../components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { add } from "@/slices/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Minus, Plus } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../components/ui/accordion";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [mainImage, setMainImage] = useState("");
  const [counter, setCounter] = useState(1);

  const { productsIds } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const { toast } = useToast();

  const handleAddToCart = () => {
    dispatch(add({ ...product, quantity: counter }));
    toast({
      description: `${product.title} added to cart successfully!`,
    });
  };

  const ImagePath = (imagePath) => {
    return imagePath.replace(
      "E:\\DEPI\\SK backend\\sk-ecommerce-backend\\images\\",
      "http://localhost:5000/images/"
    );
  };

  useEffect(() => {
    axios
      .get(`http://localhost:5000/products/${id}`)
      .then((res) => {
        console.log(res.data.product);
        setProduct(res.data.product);
        if (res.data.product.images && res.data.product.images.length > 0) {
          setMainImage(ImagePath(res.data.product.images[0]));
        }
      })
      .catch((err) => {
        console.error("Error fetching product details", err);
      });
  }, [id]);

  if (!product) return <p className="text-center">Product not found!</p>;

  const handleImageClick = (imagePath) => {
    setMainImage(ImagePath(imagePath));
  };

  return (
    <div className="flex justify-center p-4">
      <div className="flex flex-col md:flex-row p-8 rounded-lg shadow-lg max-w-5xl w-full">
        <div className="md:w-1/2 flex flex-col">
          {mainImage && (
            <>
              <img
                src={mainImage}
                alt={product.title}
                className="mb-4 rounded-lg w-full"
              />

              {product.images && product.images.length > 1 && (
                <div className="flex space-x-2">
                  {product.images.map((image, index) => (
                    <img
                      key={index}
                      src={ImagePath(image)}
                      alt={`${product.title} `}
                      className="cursor-pointer w-1/4 rounded-lg border-gray-300 border-2"
                      onClick={() => handleImageClick(image)}
                    />
                  ))}
                </div>
              )}
            </>
          )}
        </div>

        <div className="md:w-1/2 md:pl-5">
          <h1 className="text-3xl font-bold mb-2 mt-3 ">{product.title}</h1>

          <p className="mb-4">{product.description}</p>

          <h2 className=" text-2xl mb-4">
            {product.priceAfterDiscount} EGP
            <span className="text-lg ml-2 text-red-500 line-through">
              {" "}
              {product.basePrice} EGP
            </span>
          </h2>

          <div className="flex flex-row gap-1 justify-between items-center pt-2 mb-4">
            <div className="p-1 border flex gap-1 justify-center items-center">
              <Button
                className={
                  "h-auto p-1.5 hover:bg-background hover:text-primary"
                }
                variant="ghost"
                onClick={() => {
                  setCounter(counter - 1);
                }}
                disabled={counter > 1 ? false : true}
              >
                <Minus />
                <span className="sr-only">decrease item quantity</span>
              </Button>
              <p>{counter}</p>
              <Button
                className="h-auto p-1.5 hover:bg-background hover:text-primary "
                variant="ghost"
                onClick={() => {
                  setCounter(counter + 1);
                }}
              >
                <Plus />
                <span className="sr-only">increase item quantity</span>
              </Button>
            </div>
          </div>

          <Button
            className="mb-2 w-full"
            onClick={handleAddToCart}
            disabled={
              productsIds.includes(product.id) ||
              product.status == "out-of-stock"
                ? true
                : false
            }
          >
            Add To Cart
            <span className="hidden sm:inline-block">
              - {product.priceAfterDiscount} EGP
            </span>
          </Button>

          <ul className="list-disc list-inside mt-4">
            <li>
              <strong>Volume:</strong> {product.volume}
            </li>
            <li>
              <strong>Scent:</strong> {product.scent}
            </li>
          </ul>

          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>Ingredients</AccordionTrigger>
              <AccordionContent>
                {product.ingredients.map((ingredient, index) => (
                  <ul key={index}>
                    <li>{ingredient}</li>
                  </ul>
                ))}
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>How To Use?</AccordionTrigger>
              <AccordionContent>
                {product.using.map((use, index) => (
                  <ul key={index}>
                    <p className="mb-2">{use}</p>
                  </ul>
                ))}
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;

