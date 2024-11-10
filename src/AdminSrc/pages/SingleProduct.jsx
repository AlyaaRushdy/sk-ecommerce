import Header from "@/AdminSrc/components/shared/Header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function SingleProduct() {
  const { id } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    axios
      .get(`http://localhost:5000/products/${id}`)
      .then((res) => res.data)
      .then((res) => setProduct(res.product))
      .catch((err) => {
        console.log(err);
      });

    return () => setProduct({});
  }, [id]);

  return (
    <>
      {Object.keys(product).length > 0 && (
        <main>
          {/* header section */}
          <div className="p-5">
            <Header
              currentPage={product.title}
              prevPage={"Products"}
              prevPageLink={"/products"}
            />
            {/* images section */}
            <section className="grid grid-cols-1 sm:grid-cols-8 pt-4">
              <div className="py-4 grid sm:col-span-6 justify-center">
                <Carousel className="w-full max-w-md">
                  <CarouselContent>
                    {Array.from({ length: 5 }).map((_, index) => (
                      <CarouselItem key={index}>
                        <div className="p-1">
                          <Card>
                            <CardContent className="flex aspect-square items-center justify-center p-6">
                              <span className="text-4xl font-semibold">
                                {index + 1}
                              </span>
                            </CardContent>
                          </Card>
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious />
                  <CarouselNext />
                </Carousel>
              </div>
              <div className="grid grid-cols-4 sm:grid-cols-1 gap-4 col-span-2">
                {product.images &&
                  product.images.map((img, i) => (
                    <Card
                      key={i}
                      className="grid justify-center content-center"
                    >
                      <img src={img} alt="" />
                    </Card>
                  ))}
              </div>
            </section>
            {/* product data section */}
            <section className="py-4">
              <Card className="p-10">
                <CardHeader>
                  <CardTitle>{product.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <span className="font-bold text-xl">Price : </span>
                  <span className="text-xl">${product.basePrice}</span>
                </CardContent>
                <CardContent>
                  <span className="font-bold text-xl">Description : </span>
                  <span className="text-xl">{product.description}</span>
                </CardContent>
                <CardContent>
                  <span className="font-bold text-xl">Stock : </span>
                  <span className="text-xl">{product.stock}</span>
                </CardContent>
                <CardContent>
                  <span className="font-bold text-xl">Created At : </span>
                  <span className="text-xl">{product.createdAt}</span>
                </CardContent>
                <CardContent>
                  <span className="font-bold text-xl">Rating : </span>
                  <span className="text-xl">{product.rating}</span>
                </CardContent>
                <CardContent>
                  <span className="font-bold text-xl">SKU : </span>
                  <span className="text-xl">{product.sku}</span>
                </CardContent>
                <CardContent>
                  <span className="font-bold text-xl">Status : </span>
                  <span className="text-xl">{product.status}</span>
                </CardContent>
                <CardContent>
                  <span className="font-bold text-xl">Gender : </span>
                  {product.options &&
                    product.options.gender.map((gend, i) => (
                      <span className="text-xl" key={i}>
                        {gend},
                      </span>
                    ))}
                </CardContent>
                <CardContent>
                  <span className="font-bold text-xl">Scent : </span>
                  {product.options &&
                    product.options.scent.map((scent, i) => (
                      <span className="text-xl" key={i}>
                        {scent},
                      </span>
                    ))}
                </CardContent>
                <CardContent>
                  <span className="font-bold text-xl">Size : </span>
                  {product.options &&
                    product.options.size.map((size, i) => (
                      <span className="text-xl" key={i}>
                        {size},
                      </span>
                    ))}
                </CardContent>
                <CardContent>
                  <span className="font-bold text-xl">Vitamins : </span>
                  {product.options &&
                    product.options.vitamins.map((vitamins, i) => (
                      <span className="text-xl" key={i}>
                        {vitamins},
                      </span>
                    ))}
                </CardContent>
                <section className="m-5 flex justify-end">
                  <div className="px-5 py-2 mx-2 bg-green-600 rounded-sm text-white">
                    <Link to="/products">Back To Products</Link>
                  </div>
                  <div className="px-5 py-2 mx-2 bg-sky-600 rounded-sm text-white">
                    <Link>Edit</Link>
                  </div>
                </section>
              </Card>
            </section>
            {/* actions */}
          </div>
        </main>
      )}
    </>
  );
}
