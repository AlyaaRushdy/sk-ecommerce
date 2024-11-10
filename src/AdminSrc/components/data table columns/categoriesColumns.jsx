// import TableOrderButton from "@/components/tableOrderButton";
import TableOrderButton from "@/AdminSrc/components/shared/tableOrderButton";

import { Trash2, PencilLine } from "lucide-react";

const categoriesColumns = (handleEditCategory, handleDeleteCategory) => [
  {
    accessorKey: "_id",
    header: ({ column }) => (
      <TableOrderButton
        column={column}
        text={"Category ID"}
        className="text-center font-semibold text-gray-700"
      />
    ),
  },
  {
    accessorKey: "categoryTitle",
    header: ({ column }) => (
      <TableOrderButton
        column={column}
        text={"Name"}
        className="text-center font-semibold text-gray-700"
      />
    ),
  },
  {
    accessorKey: "description",
    header: ({ column }) => (
      <TableOrderButton
        column={column}
        text={"Description"}
        className="text-center font-semibold text-gray-700"
      />
    ),
  },
  {
    accessorKey: "stock",
    header: ({ column }) => (
      <TableOrderButton
        column={column}
        text={"Product Stock"}
        className="text-center font-semibold text-gray-700"
      />
    ),
    cell: ({ row }) => {
      const qty = row.getValue("stock");
      return (
        <div className="text-center text-sm font-medium text-gray-600">
          {qty}
        </div>
      );
    },
    enableGlobalFilter: false,
  },
  {
    accessorKey: "actions",
    header: "Actions",
    cell: ({ row }) => {
      const id = row.original._id;
      return (
        <div className="flex justify-center gap-4 text-gray-600">
          <button
            className="hover:text-green-500"
            onClick={() => handleEditCategory(id)}
          >
            <PencilLine className="inline-block" size={20} />
          </button>
          <button
            className="hover:text-red-500"
            onClick={() => handleDeleteCategory(id)}
          >
            <Trash2 className="inline-block" size={20} />
          </button>
        </div>
      );
    },
    enableGlobalFilter: false,
  },
];

export default categoriesColumns;
