/* eslint-disable no-unused-vars */
"use client";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Search, User, ShoppingBag } from "lucide-react";
import { Star } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import NavSheet from "@/components/shared/NavSheet";
import { Coins } from "lucide-react";
import { PlaceholdersAndVanishInput } from "@/components/ui/placeholders-and-vanish-input";


const links = [
  {
    title: "Home",
    url: "/",
  },
  {
    title: "Body Oils",
    url: "/bodyOils",
  },
  {
    title: "Masks",
    url: "/masks",
  },
  {
    title: "Contact",
    url: "/contact",
  },
];

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



function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out
        ${
          isScrolled || isHovered
            ? "bg-background bg-opacity-90 backdrop-blur-md"
            : "bg-transparent"
        }
      `}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Navigation Links */}
          <NavigationMenu>
            <NavSheet />
            <NavigationMenuList className="hidden lg:flex lg:space-x-8 md:flex md:space-x-5 sm:flex sm:space-x-3">
              {links.map((link) => (
                <NavigationMenuItem key={link.title}>
                  <NavigationMenuLink asChild>
                    <Link
                      to={link.url}
                      className="text-sm font-medium text-gray-800 hover:text-gray-600 transition-colors"
                    >
                      {link.title}
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>

          {/* Logo */}
          <div className="text-xl font-semibold text-gray-800">
            <Link to="/">
              <img
                src="/src/assets/logo.png"
                alt="sk logo"
                className="w-16 mr-4"
              />
            </Link>
          </div>

          {/* Icons Section */}
          <div className="flex items-center space-x-4">
            <button
              aria-label="Search"
              className="text-gray-800 hover:text-gray-600 transition-colors"
            >
              <Search size={20} />
            </button>
            <button
              aria-label="User account"
              className="text-gray-800 hover:text-gray-600 transition-colors"
            >
              <User size={20} />
            </button>
            <button
              aria-label="Shopping cart"
              className="text-gray-800 hover:text-gray-600 transition-colors"
            >
              <ShoppingBag size={20} />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

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
              A non-sticky, micro-fine setting spray that seals-in makeup<br /> for up
              to 16 hours.
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
    <div className="container mx-auto px-16 py-8">
      <div className="grid md:grid-cols-2 gap-8">
        {/* New Product Section */}
        <div className="relative rounded-lg overflow-hidden">
          <img
            src="../src/assets/vanilla musk.jpg"
            alt="New Product"
            width={600}
            height={400}
            className="object-cover w-full h-full"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-end p-6">
            <p className="text-white text-sm mb-2">WELCOME</p>
            <h2 className="text-white text-3xl font-bold mb-2">New Product</h2>
            <p className="text-white text-sm mb-4">
              Meticulously tested by people who know your struggle
            </p>
            <Button
              variant="outline"
              className="self-start text-slate-900 border-gray-700 hover:bg-black hover:text-slate-400 transition-colors"
            >
              SHOP NOW
            </Button>
          </div>
        </div>

        {/* Best Sellers Section */}
        <div className="relative rounded-lg overflow-hidden">
          <img
            src="../src/assets/hydration oils.jpg"
            alt="Skincare product tubes"
            className="object-cover w-full h-full"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-end p-6">
            <p className="text-white text-sm mb-2">INTRODUCING</p>
            <h2 className="text-white text-3xl font-bold mb-2">Best Sellers</h2>
            <p className="text-white text-sm mb-4">
              You won&apos;t re—great these
            </p>
            <Button
              variant="outline"
              className="self-start text-slate-900 border-gray-700 hover:bg-black hover:text-slate-400 transition-colors"
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
    <div className="container mx-auto py-12">
      <h2 className="text-3xl font-serif text-center mb-10">Shop Products</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 px-16 gap-8">
        {products.map((product) => (
          <div
            key={product.name}
            className="group bg-white rounded-lg shadow-md overflow-hidden transition-all duration-150 ease-in-out hover:shadow-xl hover:border-y-primary hover:border-y-2"
          >
            <div className="relative aspect-square">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4">
              <h3 className="font-medium text-lg mb-2 truncate">
                {product.name}
              </h3>
              <p className="text-sm text-gray-600 mb-4 h-12 overflow-hidden">
                {product.description}
              </p>
              <div className="productDetails transition-all duration-400 ease-in-out group-hover:opacity-0 group-hover:hidden group-hover:translate-y-2">
                <p className="font-bold text-lg mb-2">L.E. {product.price}</p>
                <hr />
                <div className="flex items-center justify-between">
                  <p className="text-sm text-gray-500">{product.brand}</p>
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={cn(
                          "w-4 h-4",
                          i < Math.floor(product.rating)
                            ? "text-yellow-400 fill-current"
                            : "text-gray-300"
                        )}
                      />
                    ))}
                    <span className="text-xs text-gray-500 ml-2">
                      ({product.reviews})
                    </span>
                  </div>
                </div>
              </div>
              <div className="addToCart hidden opacity-0 transition-all duration-1000 ease-in-out transform -translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 group-hover:block">
                <button className="w-full border-[1px] border-gray-300 text-black font-semibold text-sm py-3 rounded-full hover:border-black hover:text-primary transition-colors duration-300 ease-in-out">
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
  const [email, setEmail] = useState('');

  const handleChange = (e) => {
    console.log(e.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    console.log("submitted");
    setEmail("");
  };


  return (
    <div className="bg-white w-full mx-auto px-16 py-12 font-sans">
      <h2 className="text-3xl mb-2 font-serif">
        Re—<span className="italic font-cursive">ceive</span> 15% off your first order
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
      <div className="min-h-screen bg-[url('../src/assets/banner.svg')] w-full bg-no-repeat bg-cover">
        <Header />
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
