/* eslint-disable no-unused-vars */
"use client";
import { Button } from "@/components/ui/button";
import { useState } from "react";

import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

import { Coins } from "lucide-react";
import { PlaceholdersAndVanishInput } from "@/components/ui/placeholders-and-vanish-input";

const products = [
  {
    name: "Super Reboot Resurfacing Mask",
    description: "A powerful reset for skin with gentle ingredients",
    price: 45,
    brand: "SK Cosmetics",
    rating: 4,
    reviews: 1079,
    image: "../src/assets/transparent/pink.png",
  },
  {
    name: "Transparen-C Pro Spot Treatment",
    description: "A bright spot for dark spots.",
    price: 45,
    brand: "SK Cosmetics",
    rating: 2.5,
    reviews: 595,
    image: "src/assets/transparent/white.png",
  },
  {
    name: "Transparen-C Pro Spot Treatment",
    description: "A bright spot for dark spots.",
    price: 45,
    brand: "SK Cosmetics",
    rating: 2.5,
    reviews: 595,
    image: "../src/assets/transparent/pink.png",
  },
  {
    name: "Transparen-C Pro Spot Treatment",
    description: "A bright spot for dark spots.",
    price: 45,
    brand: "SK Cosmetics",
    rating: 2.5,
    reviews: 595,
    image: "../src/assets/transparent/red.png",
  },
  {
    name: "Transparen-C Pro Spot Treatment",
    description: "A bright spot for dark spots.",
    price: 45,
    brand: "SK Cosmetics",
    rating: 2.5,
    reviews: 595,
    image: "../src/assets/transparent/white.png",
  },
  {
    name: "Transparen-C Pro Spot Treatment",
    description: "A bright spot for dark spots.",
    price: 45,
    brand: "SK Cosmetics",
    rating: 2.5,
    reviews: 595,
    image: "../src/assets/transparent/pink.png",
  },
  {
    name: "Transparen-C Pro Spot Treatment",
    description: "A bright spot for dark spots.",
    price: 45,
    brand: "SK Cosmetics",
    rating: 2.5,
    reviews: 595,
    image: "../src/assets/transparent/red.png",
  },
];

function HeroSection() {
  return (
    <section className="pt-60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <span className="text-sm font-semibold text-gray-600 mb-2 block">
              NEW PRODUCT
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-4">
              Re—seal Budge-Proof Setting Spray
            </h1>
            <p className="text-xl text-gray-600 mb-6">
              A non-sticky, micro-fine setting spray that seals-in makeup
              <br /> for up to 16 hours.
            </p>
            <button className="bg-black text-white px-8 py-3 rounded-full font-semibold hover:bg-gray-800 transition-colors">
              LOCK YOURS IN
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

function Categories() {
  return (
    <div className="container mx-auto py-6 px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 lg:gap-14 h-auto md:h-72">
        {/* New Product Section */}
        <div className="relative rounded-lg overflow-hidden h-64 md:h-auto">
          <img
            src="../src/assets/vanilla musk.jpg"
            alt="New Product"
            className="object-cover w-full h-full"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 dark:bg-gray-900 dark:bg-opacity-60 flex flex-col justify-end p-4 sm:p-6">
            <p className="text-white text-xs sm:text-sm mb-1 sm:mb-2 dark:text-gray-300">
              WELCOME
            </p>
            <h2 className="text-white text-xl sm:text-2xl md:text-3xl font-bold mb-1 sm:mb-2 dark:text-gray-100">
              New Product
            </h2>
            <p className="text-white text-xs sm:text-sm mb-2 sm:mb-4 dark:text-gray-300">
              Meticulously tested by people who know your struggle
            </p>
            <Button
              variant="outline"
              className="self-start text-slate-900 dark:text-gray-100 border-gray-700 dark:border-gray-500 hover:bg-black hover:text-slate-400 dark:hover:bg-gray-800 dark:hover:text-gray-300 transition-colors text-xs sm:text-sm px-3 py-1 sm:px-4 sm:py-2"
            >
              SHOP NOW
            </Button>
          </div>
        </div>

        {/* Best Sellers Section */}
        <div className="relative rounded-lg overflow-hidden h-64 md:h-auto">
          <img
            src="../src/assets/hydration oils.jpg"
            alt="Skincare product tubes"
            className="object-cover w-full h-full"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 dark:bg-gray-900 dark:bg-opacity-60 flex flex-col justify-end p-4 sm:p-6">
            <p className="text-white text-xs sm:text-sm mb-1 sm:mb-2 dark:text-gray-300">
              INTRODUCING
            </p>
            <h2 className="text-white text-xl sm:text-2xl md:text-3xl font-bold mb-1 sm:mb-2 dark:text-gray-100">
              Best Sellers
            </h2>
            <p className="text-white text-xs sm:text-sm mb-2 sm:mb-4 dark:text-gray-300">
              You won&apos;t re—great these
            </p>
            <Button
              variant="outline"
              className="self-start text-slate-900 dark:text-gray-100 border-gray-700 dark:border-gray-500 hover:bg-black hover:text-slate-400 dark:hover:bg-gray-800 dark:hover:text-gray-300 transition-colors text-xs sm:text-sm px-3 py-1 sm:px-4 sm:py-2"
            >
              SHOP NOW
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

function Product() {
  return (
    <div className="container mx-auto py-6 px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-serif text-center mb-10 dark:text-gray-100">
        Shop Products
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8 px-4 sm:px-8 lg:px-0">
        {products.map((product) => (
          <div
            key={product.name}
            className="group bg-card rounded-lg shadow-md overflow-hidden transition-all duration-150 ease-in-out hover:shadow-xl dark:shadow-neutral-900 hover:border-y-primary dark:hover:border-y-primary hover:border-y-2"
          >
            <div className="relative aspect-square">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4 dark:text-gray-100">
              <h3 className="font-medium text-lg mb-2 truncate">
                {product.name}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-4 h-12 overflow-hidden">
                {product.description}
              </p>
              <div className="productDetails transition-all duration-400 ease-in-out group-hover:opacity-0 group-hover:hidden group-hover:translate-y-2">
                <p className="font-bold text-lg mb-2 dark:text-gray-100">
                  L.E. {product.price}
                </p>
                <hr className="border-gray-300 dark:border-gray-600" />
                <div className="flex items-center justify-between">
                  <p className="text-sm text-gray-500 dark:text-gray-300">
                    {product.brand}
                  </p>
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={cn(
                          "w-4 h-4",
                          i < Math.floor(product.rating)
                            ? "text-yellow-400 dark:text-yellow-500"
                            : "text-gray-300 dark:text-gray-500"
                        )}
                      />
                    ))}
                    <span className="text-xs text-gray-500 dark:text-gray-400 ml-2">
                      ({product.reviews})
                    </span>
                  </div>
                </div>
              </div>
              <div className="addToCart hidden opacity-0 transition-all duration-1000 ease-in-out transform -translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 group-hover:block">
                <button className="w-full border-[1px] border-gray-300 dark:border-gray-600 text-black dark:text-gray-100 font-semibold text-sm py-3 rounded-full hover:border-black dark:hover:border-primary hover:text-primary dark:hover:text-primary transition-colors duration-300 ease-in-out">
                  ADD TO BAG - L.E {product.price}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function NewsletterSubscription() {
  const placeholders = [
    "Enter Your Email",
    "You Want To Know Updates?",
    "Join To Our NewsLetter",
    "No Spam :)",
    "Just The good Stuff",
  ];
  const [email, setEmail] = useState("");

  const handleChange = (e) => {
    console.log(e.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    console.log("submitted");
    setEmail("");
  };

  return (
    <div className="dark:bg-background container mx-auto py-6 px-4 sm:px-6 lg:px-8 font-sans">
      <h2 className="text-3xl mb-2 font-serif">
        Re—<span className="italic font-cursive">ceive</span> 15% off your first
        order
      </h2>
      <p className="text-gray-600 mb-6">
        No spam, just the good stuff. Pinky promise.
      </p>
      <PlaceholdersAndVanishInput
        placeholders={placeholders}
        onChange={handleChange}
        onSubmit={onSubmit}
      />
      <div className="mt-8 border-t border-gray-200"></div>
    </div>
  );
}

function Footer() {
  return (
    <footer className="bg-black sticky text-white pt-12 pb-6">
      <div className="container mx-auto px-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="font-bold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-gray-300">
                  Body Oils
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">
                  Our Journey
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">
                  Returns & Exchanges
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Support</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-gray-300">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">
                  FAQs
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">
                  Shipping Information
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Connect</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-gray-300"></a>
              <a href="#" className="hover:text-gray-300"></a>
            </div>
            <button className="mt-4 bg-indigo-600 text-white px-4 py-2 rounded-full hover:bg-indigo-700 transition-colors">
              Follow on shop
            </button>
          </div>
        </div>
        <div className="border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-400 mb-4 md:mb-0">
            © 2024, SK Beauty. Powered by ME :)
          </p>
          <div className="flex space-x-2">
            <Coins />
            <span> Cash On Delivery</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function HomePage() {
  return (
    <div className="scroll-smooth">
      <div className="min-h-screen bg-[url('../src/assets/banner.svg')] w-full bg-no-repeat bg-cover -mt-20">
        <HeroSection />
      </div>
      <div>
        <Categories />
      </div>
      <div>
        <Product />
      </div>
      <div className="NewsletterSubscription">
        <NewsletterSubscription />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
