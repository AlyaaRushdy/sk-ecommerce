import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { User, Search, ShoppingBasket } from "lucide-react";
import { Link } from "react-router-dom";
import NavSheet from "./NavSheet";

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
  return (
    <>
      <NavigationMenu>
        <div className="w-screen py-4 px-4 sm:px-8 md:px-12 grid grid-cols-3 sm:flex sm:justify-start items-center [&>div]:contents">
          <NavSheet />
          <NavigationMenuLink className="justify-self-center" asChild>
            <Link to={"/"}>
              <img
                src="/src/assets/logo.png"
                alt="sk logo"
                className="w-16 mr-4"
              />
            </Link>
          </NavigationMenuLink>

          <NavigationMenuList className="ml-2 gap-4 flex-auto justify-start hidden sm:flex">
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
          <NavigationMenuList className="gap-2 sm:gap-4 flex-auto justify-end">
            <NavigationMenuItem>
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
                <Link className="hover:text-primary font-medium">
                  <ShoppingBasket />
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </div>
      </NavigationMenu>
    </>
  );
}

export default Navbar;
