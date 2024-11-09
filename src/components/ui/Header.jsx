/* eslint-disable react/prop-types */
import { Button } from "@/components/ui/button";
ModeToggle;
import { CircleUser } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import NavSheet from "../../UserSrc/components/shared/NavSheet";

import HeaderBreadcrumb from "@/components/ui/HeaderBreadcrumb";
import { useDispatch } from "react-redux";
import { useToast } from "@/hooks/use-toast";
import { setToken } from "@/Redux/userSlice";
import { Link } from "react-router-dom";
import ModeToggle from "@/components/ui/modeToggle";

function Header({ currentPage, prevPage, prevPageLink }) {
  const dispatch = useDispatch();
  const { toast } = useToast();

  const handleLogout = (e) => {
    e.preventDefault();
    dispatch(setToken(""));
    toast({
      variant: "success",
      title: "logged out successfully",
    });
  };

  return (
    <header className="flex justify-between items-center pb-1 gap-2">
      <NavSheet />
      <HeaderBreadcrumb
        currentPage={currentPage}
        prevPage={prevPage}
        prevPageLink={prevPageLink}
      />

      <div className="flex items-center justify-end gap-2 md:ml-auto md:gap-3 lg:gap-4">
        {/* <DateRangePicker /> */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="secondary"
              size="icon"
              className="rounded-full bg-background dark:bg-neutral-900 border"
            >
              <CircleUser className="h-5 w-5" />
              <span className="sr-only">Toggle user menu</span>
            </Button>
          </DropdownMenuTrigger>

          <DropdownMenuContent align="end">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />

            <DropdownMenuItem>
              <Link to={"/settings"}> Settings</Link>
            </DropdownMenuItem>

            <DropdownMenuItem>
              <Link to={"/contact"}> Contact</Link>
            </DropdownMenuItem>

            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <button
                className={"w-full text-left"}
                onClick={(e) => {
                  handleLogout(e);
                }}
              >
                Logout
              </button>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <ModeToggle />
      </div>
    </header>
  );
}

export default Header;
