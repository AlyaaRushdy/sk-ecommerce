import axios from "axios";
import { LayoutGrid, Square } from "lucide-react";
import { useEffect, useState } from "react";
function Products() {
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
      <section className="py-4">
        <h1 className="text-center capitalize pb-4 font-semibold text-lg">
          all products
        </h1>
        <div className="border flex flex-row md:flex-row-reverse items-center justify-between">
          <div className="flex flex-grow md:flex-grow-0 px-3">
            <button className="flex-grow md:w-32 md:border-l py-2">
              Filter
            </button>
            <button className="flex-grow md:w-32 border-l py-2">Sort By</button>
          </div>
          <div className="flex-grow-0 py-2 px-3 border-s md:border-e md:border-s-0">
            <button>
              <LayoutGrid />
            </button>
            <button className="pl-2">
              <Square />
            </button>
          </div>
        </div>
        <div className="p-4 grid grid-cols-2 gap-3">
          {products.map((product, index) => (
            <div key={index}>
              <img
                src="/src/assets/HydratingOil.jpg"
                alt={`${product.title} image`}
                className="max-w-full"
              />
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default Products;
