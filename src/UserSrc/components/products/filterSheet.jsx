/* eslint-disable react/prop-types */
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";

function FilterSheet({ isOpen, setIsOpen, handleFilter, children }) {
  return (
    <>
      <Sheet
        open={isOpen}
        onOpenChange={() => {
          setIsOpen(false);
        }}
      >
        <SheetContent className="w-11/12 max-w-96 px-0 flex flex-col gap-0">
          <SheetHeader className="border-b text-left px-4 sm:px-6 pb-2">
            <SheetTitle>FILTER</SheetTitle>
          </SheetHeader>
          <div className="px-4 sm:px-6 mr-2 flex-grow">
            <div className="flex flex-col gap-3 py-4">{children}</div>
          </div>
          <SheetFooter className={"px-4 sm:px-6"}>
            <SheetClose asChild>
              <Button className={"sm:w-full"} onClick={handleFilter}>
                Apply
              </Button>
            </SheetClose>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </>
  );
}

export default FilterSheet;
