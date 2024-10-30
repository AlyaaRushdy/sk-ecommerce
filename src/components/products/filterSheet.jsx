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
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Switch } from "@/components/ui/switch";
import { DualRangeSlider } from "../ui/dual-range-slider";
import { useState } from "react";

function FilterSheet({ isOpen, setIsOpen }) {
  const [values, setValues] = useState([0, 100]);
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
            <div className="flex flex-col gap-3 py-4 ">
              <Accordion type="multiple" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>Availability</AccordionTrigger>
                  <AccordionContent className="flex gap-2 items-center">
                    <Switch id="availability" />
                    <p>In-stock</p>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>Price</AccordionTrigger>
                  <AccordionContent className="pr-1">
                    <DualRangeSlider
                      label={(value) => value}
                      value={values}
                      onValueChange={setValues}
                      min={0}
                      max={100}
                      step={1}
                      className="pt-8"
                    />
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
          <SheetFooter className={"px-4 sm:px-6"}>
            <SheetClose asChild>
              <Button className={"sm:w-full"} onClick={() => {}}>
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
