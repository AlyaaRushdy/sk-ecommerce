import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { User, Search, ShoppingBasket } from "lucide-react";
import NavSheet from "./NavSheet";
import ModeToggle from "./modeToggle";
import { openCart } from "@/slices/cartSlice";

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

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
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
                src="/src/assets/logo.png"
                alt="sk logo"
                className="w-full"
              />
            </Link>
          </NavigationMenuLink>
          <NavigationMenuList className="gap-2 sm:gap-4 flex-auto justify-end">
            <NavigationMenuItem className="hidden md:block">
              <NavigationMenuLink asChild>
                <Link
                  to={"/account"}
                  className="hover:text-primary font-medium"
                >
                  <User />
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link className="hover:text-primary font-medium">
                  <Search />
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link
                  className="hover:text-primary font-medium"
                  onClick={() => {
                    dispatch(openCart());
                  }}
                >
                  <ShoppingBasket />
                </Link>
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
