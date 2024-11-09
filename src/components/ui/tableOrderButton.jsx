/* eslint-disable react/prop-types */
import { Button } from "@/components/ui/button";
import { ChevronsUpDown } from "lucide-react";

function TableOrderButton({ column, text }) {
  return (
    <>
      <Button
        variant="ghost"
        className="font-bold p-0 hover:bg-transparent w-full "
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        {text}
        <ChevronsUpDown className="ml-2 h-4 w-4 ms-auto" />
      </Button>
    </>
  );
}

export default TableOrderButton;
