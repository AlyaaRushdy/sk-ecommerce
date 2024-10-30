import FilterSheet from "@/components/products/filterSheet";
import ProductItem from "@/components/products/productItem";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import axios from "axios";
import { LayoutGrid, Square } from "lucide-react";
import { useEffect, useState } from "react";

const sortList = [
  { value: "priceAsc", title: "Price, low to high" },
  { value: "priceDes", title: "Price, high to low" },
  { value: "dateAsc", title: "date, old to new" },
  { value: "dateDes", title: "date, new to old" },
  { value: "alphAsc", title: "alphabitically, A to Z" },
  { value: "alphDes", title: "alphabitically, Z to A" },
];

function Products() {
  const [products, setProducts] = useState([]);
  const [sort, setSort] = useState("none");
  const [isFilterOpen, setIsFilterOpen] = useState(false);

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
        <h1 className="text-center uppercase pb-6 pt-4 md:pt-6 font-semibold text-xl sm:text-2xl tracking-[.25em]">
          all products
        </h1>
        <div className="border flex flex-row sm:flex-row-reverse items-center justify-between">
          <div className="flex flex-grow sm:flex-grow-0 px-3 relative">
            <button
              className="flex-grow sm:w-32 sm:border-l py-2 lg:hidden"
              onClick={() => {
                setIsFilterOpen(true);
              }}
            >
              Filter
            </button>
            <FilterSheet isOpen={isFilterOpen} setIsOpen={setIsFilterOpen} />
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="flex-grow sm:w-32 border-l py-2">
                  Sort By
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className={"w-56"}>
                <DropdownMenuRadioGroup
                  value={sort}
                  onValueChange={setSort}
                  className="capitalize"
                >
                  {sortList.map((item, i) => (
                    <DropdownMenuRadioItem value={item.value} key={i}>
                      {item.title}
                    </DropdownMenuRadioItem>
                  ))}
                </DropdownMenuRadioGroup>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          <p className="hidden lg:block tracking-widest uppercase">
            {products.length} products
          </p>
          <div className="flex-grow-0 py-2 px-3 border-s sm:border-e sm:border-s-0">
            <button>
              <LayoutGrid />
            </button>
            <button className="pl-2">
              <Square />
            </button>
          </div>
        </div>
        <div className="p-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 lg:gap-5 gap-3">
          {products.map((product, index) => (
            <ProductItem product={product} key={index} />
          ))}
        </div>
      </section>
    </>
  );
}

export default Products;
