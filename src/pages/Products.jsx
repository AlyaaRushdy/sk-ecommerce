/* eslint-disable react/prop-types */
import _ from "lodash";
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import { LayoutGrid, Square } from "lucide-react";
import FilterSheet from "@/components/products/filterSheet";
import ProductItem from "@/components/products/productItem";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import FilterAccordion from "@/components/products/filterAccordion";
import useMediaQuery from "@/hooks/useMediaQuery";
import NoProductsFound from "@/components/products/noProductsFound";

const sortList = [
  { value: "priceAsc", title: "Price, low to high" },
  { value: "priceDes", title: "Price, high to low" },
  { value: "dateAsc", title: "date, old to new" },
  { value: "dateDes", title: "date, new to old" },
  { value: "alphAsc", title: "alphabitically, A to Z" },
  { value: "alphDes", title: "alphabitically, Z to A" },
];

function Products({ url, h1Text }) {
  const [products, setProducts] = useState([]);
  const originalProductsArray = useRef([]);
  const sortCriteria = useRef("");
  const [inStockChecked, setInStockChecked] = useState(false);
  const initPriceRange = useRef({ min: 0, max: 0 });
  const [priceRange, setPriceRange] = useState([]);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const isLargeScreen = useMediaQuery("(min-width: 1024px)");

  useEffect(() => {
    axios
      .get(url)
      .then((res) => res.data)
      .then((res) => {
        setProducts(res.products);
        originalProductsArray.current = res.products;
        initPriceRange.current.min = _.minBy(
          res.products,
          "priceAfterDiscount"
        )["priceAfterDiscount"];
        initPriceRange.current.max = _.maxBy(
          res.products,
          "priceAfterDiscount"
        )["priceAfterDiscount"];
        setPriceRange([initPriceRange.current.min, initPriceRange.current.max]);
      })
      .catch((err) => {
        if (err.response && err.response.status == 404) {
          setProducts([]);
          originalProductsArray.current = [];
          return null;
        } else console.log(err);
      });

    return () => setProducts([]);
  }, [url]);

  const handleSort = () => {
    switch (sortCriteria.current) {
      case "alphAsc":
        setProducts(_.orderBy(products, ["title"], ["asc"]));
        break;
      case "alphDes":
        setProducts(_.orderBy(products, ["title"], ["desc"]));
        break;
      case "priceAsc":
        setProducts(_.orderBy(products, ["priceAfterDiscount"], ["asc"]));
        break;
      case "priceDes":
        setProducts(_.orderBy(products, ["priceAfterDiscount"], ["desc"]));
        break;
      case "dateAsc":
        setProducts(_.orderBy(products, ["createdAt"], ["asc"]));
        break;
      case "dateDes":
        setProducts(_.orderBy(products, ["createdAt"], ["desc"]));
        break;
      default:
        break;
    }
  };

  const handleFilter = () => {
    if (inStockChecked) {
      setProducts(
        _.filter(originalProductsArray.current, (p) => {
          return (
            p.status !== "out-of-stock" &&
            p.priceAfterDiscount >= priceRange[0] &&
            p.priceAfterDiscount <= priceRange[1]
          );
        })
      );
    } else {
      setProducts(
        _.filter(originalProductsArray.current, (p) => {
          return (
            p.priceAfterDiscount >= priceRange[0] &&
            p.priceAfterDiscount <= priceRange[1]
          );
        })
      );
    }
  };

  return (
    <>
      <section className="py-4 flex flex-col">
        <h1 className="text-center uppercase pb-6 pt-4 md:pt-6 font-semibold text-xl sm:text-2xl tracking-[.25em]">
          {h1Text}
        </h1>
        <div className="border-y flex flex-row sm:flex-row-reverse justify-between sticky top-20 bg-background left-0 z-10">
          <div className="flex flex-grow sm:flex-grow-0 px-3 relative">
            <button
              className="flex-grow sm:w-32 sm:border-l py-2 lg:hidden"
              onClick={() => {
                setIsFilterOpen(true);
              }}
            >
              Filter
            </button>
            {isFilterOpen && (
              <FilterSheet
                isOpen={isFilterOpen}
                setIsOpen={setIsFilterOpen}
                handleFilter={handleFilter}
              >
                <FilterAccordion
                  priceRange={priceRange}
                  setPriceRange={setPriceRange}
                  initPriceRange={initPriceRange}
                  inStockChecked={inStockChecked}
                  setInStockChecked={setInStockChecked}
                />
              </FilterSheet>
            )}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="flex-grow sm:w-32 border-l py-2">
                  Sort By
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className={"w-56"}>
                <DropdownMenuRadioGroup
                  value={sortCriteria.current}
                  onValueChange={(val) => {
                    sortCriteria.current = val;
                    handleSort();
                  }}
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
          <p className="hidden lg:block tracking-widest uppercase my-auto">
            {products.length} products
          </p>
          <div className="flex-grow-0 py-2 px-3 border-s sm:border-e sm:border-s-0 flex gap-2 items-center">
            <button>
              <LayoutGrid />
            </button>
            <button>
              <Square />
            </button>
          </div>
        </div>

        <div className="p-4 flex gap-5 items-start">
          {isLargeScreen && (
            <div className="flex flex-col gap-3 py-4 min-w-60 xl:min-w-64 sticky top-32 bottom-0">
              <FilterAccordion
                priceRange={priceRange}
                setPriceRange={setPriceRange}
                initPriceRange={initPriceRange}
                inStockChecked={inStockChecked}
                setInStockChecked={setInStockChecked}
              />
              <Button className="ms-auto mt-4 w-fit" onClick={handleFilter}>
                Apply
              </Button>
            </div>
          )}
          {products.length == 0 ? (
            <NoProductsFound />
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:gap-5 gap-3">
              {products.map((product, index) => (
                <ProductItem product={product} key={index} />
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}

export default Products;
