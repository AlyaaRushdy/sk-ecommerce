/* eslint-disable react/prop-types */
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Switch } from "@/components/ui/switch";
import { DualRangeSlider } from "@/components/ui/dual-range-slider";

function FilterAccordion({
  priceRange,
  setPriceRange,
  initPriceRange,
  inStockChecked,
  setInStockChecked,
}) {
  return (
    <>
      <Accordion type="multiple" collapsible="true" className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger>Availability</AccordionTrigger>
          <AccordionContent className="flex gap-2 items-center">
            <Switch
              checked={inStockChecked}
              onCheckedChange={setInStockChecked}
            />
            <p>In-stock</p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Price</AccordionTrigger>
          <AccordionContent className="mx-4">
            <DualRangeSlider
              label={(value) => value}
              value={priceRange}
              onValueChange={setPriceRange}
              min={initPriceRange.current.min}
              max={initPriceRange.current.max}
              step={1}
              className="pt-8"
            />
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </>
  );
}

export default FilterAccordion;
