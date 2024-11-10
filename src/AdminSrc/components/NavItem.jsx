import {
  NavigationMenuItem,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { NavLink } from "react-router-dom";

// eslint-disable-next-line react/prop-types
function NavItem({ link, tooltipText, children }) {
  const navLinkClassList =
    "hidden sm:inline-flex h-10 w-10 md:h-11 md:w-11 items-center justify-center rounded-md text-white bg-orange-300 p-3 transition-colors hover:bg-orange-400 hover:text-white focus:outline-none";
  return (
    <>
      <NavigationMenuItem>
        <TooltipProvider>
          <Tooltip delayDuration={1500}>
            <TooltipTrigger asChild>
              <NavigationMenuLink asChild>
                <NavLink to={link} className={navLinkClassList}>
                  {children}
                </NavLink>
              </NavigationMenuLink>
            </TooltipTrigger>
            <TooltipContent>{tooltipText}</TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </NavigationMenuItem>
    </>
  );
}

export default NavItem;
