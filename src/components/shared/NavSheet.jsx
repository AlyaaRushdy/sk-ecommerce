import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetTitle,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { Link } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "../ui/navigation-menu";

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
  {
    title: "Account",
    url: "/account",
  },
];

function NavSheet() {
  return (
    <>
      <Sheet>
        <SheetTrigger asChild>
          <Button
            size="icon"
            variant="ghost"
            className="md:hidden bg-transparent"
          >
            <Menu />
            <span className="sr-only">Toggle Menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="max-w-xs sm:max-w-xs">
          <SheetTitle asChild>
            <span className="sr-only">Navigation Menu</span>
          </SheetTitle>
          <NavigationMenu orientation="vertical">
            <NavigationMenuList className="grid gap-6 text-lg font-medium pt-8">
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
          </NavigationMenu>
        </SheetContent>
      </Sheet>
    </>
  );
}

export default NavSheet;
