import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { User, Search, ShoppingBasket } from "lucide-react";
import NavSheet from "./NavSheet";
import ModeToggle from "@/components/shared/modeToggle";
import { openCart } from "@/Redux/cartSlice";
import { Badge } from "@/components/ui/badge";

const links = [
  {
    title: "Home",
    url: "/",
  },
  {
    title: "Body Oils",
    url: "/user/bodyOils",
  },
  {
    title: "Masks",
    url: "/user/masks",
  },
  {
    title: "Contact",
    url: "/user/contact",
  },
];

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const dispatch = useDispatch();
  const { productsIds } = useSelector((state) => state.cart);
  const { token } = useSelector((state) => state.user);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const [showSearch, setShowSearch] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const searchRef = useRef(null);

  const handleSearchClick = () => {
    setShowSearch(!showSearch);
  };
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setShowSearch(false);
      }
    };

    // Add event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Clean up the event listener
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <>
      <NavigationMenu
        className={cn(
          "sticky top-0 left-0 right-0 transition-all duration-200 ease-in-out",
          scrolled ? "bg-background border-b" : "bg-transparent"
        )}
      >
        <div className="w-screen py-4 px-4 sm:px-8 lg:px-12 grid grid-cols-navbar items-center [&>div]:contents">
          <NavSheet />
          <NavigationMenuList className="ml-2 gap-4 flex-auto justify-start hidden md:flex">
            {links.map((link, index) => (
              <NavigationMenuItem key={index}>
                <NavigationMenuLink asChild>
                  <Link
                    to={link.url}
                    className="hover:text-primary font-medium"
                  >
                    {link.title}
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
          <NavigationMenuLink className="justify-self-center" asChild>
            <Link to={"/"}>
              <img
                // src="/src/assets/logo.png"
                src="../src/UserSrc/assets/logo.png"
                alt="sk logo"
                className="w-full"
              />
            </Link>
          </NavigationMenuLink>
          <NavigationMenuList className="gap-2 sm:gap-4 flex-auto justify-end">
            <NavigationMenuItem className="hidden md:block">
              <NavigationMenuLink asChild>
                <Link
                  to={token ? "/user/account" : "/user/login"}
                  className="hover:text-primary font-medium"
                >
                  <User />
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link
                  className="font-medium hover:text-primary"
                  onClick={handleSearchClick}
                >
                  <Search />
                </Link>
              </NavigationMenuLink>
              {showSearch && (
                <div
                  className={`absolute top-16 right-10  transition-all duration-300 ease-in-out transform ${
                    showSearch
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 -translate-y-4"
                  }`}
                >
                  <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Search..."
                    className="w-full px-4 py-2 border border-gray-300 rounded outline-none active:border-yellow-500"
                  />
                </div>
              )}
            </NavigationMenuItem>
            <NavigationMenuItem className="relative">
              <NavigationMenuLink asChild>
                <>
                  {productsIds.length > 0 && (
                    <Badge
                      className={
                        "absolute -top-2 -right-4 p-0 size-6 flex justify-center items-center text-foreground"
                      }
                    >
                      {productsIds.length}
                    </Badge>
                  )}
                  <Link
                    className="hover:text-primary font-medium"
                    onClick={() => {
                      dispatch(openCart());
                    }}
                  >
                    <ShoppingBasket />
                  </Link>
                </>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <ModeToggle />
            </NavigationMenuItem>
          </NavigationMenuList>
        </div>
      </NavigationMenu>
    </>
  );
}

export default Navbar;
