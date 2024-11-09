// import TableOrderButton from "@/components/tableOrderButton";
import TableOrderButton from "@/components/ui/tableOrderButton";

import { PencilLine, Trash2 } from "lucide-react";

const promotionsCoulmns = (handleDeleteCoupon, handleEditCoupon) => [
  {
    accessorKey: "_id",
    header: ({ column }) => {
      return <TableOrderButton column={column} text={"Coupon ID"} />;
    },
  },
  {
    accessorKey: "name",
    header: ({ column }) => {
      return <TableOrderButton column={column} text={"Title"} />;
    },
    enableGlobalFilter: false,
  },
  {
    accessorKey: "discountStatus",
    header: ({ column }) => {
      return <TableOrderButton column={column} text={"Status"} />;
    },
  },
  {
    accessorKey: "startDate",
    header: ({ column }) => {
      return <TableOrderButton column={column} text={"Start Date"} />;
    },
  },
  {
    accessorKey: "endDate",
    header: ({ column }) => {
      return <TableOrderButton column={column} text={"End Date"} />;
    },
  },
  {
    accessorKey: "type",
    header: ({ column }) => {
      return <TableOrderButton column={column} text={"Coupon Type"} />;
    },
  },
  {
    accessorKey: "discount",
    header: ({ column }) => {
      return <TableOrderButton column={column} text={"Discount Value"} />;
    },
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
            onClick={() => handleEditCoupon(id)}
          >
            <PencilLine className="inline-block" size={20} />
          </button>
          <button
            className="hover:text-red-500"
            onClick={() => handleDeleteCoupon(id)}
          >
            <Trash2 className="inline-block" size={20} />
          </button>
        </div>
      );
    },
    enableGlobalFilter: false,
  },
];

export default promotionsCoulmns;