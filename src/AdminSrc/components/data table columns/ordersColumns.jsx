import { Button } from "@/components/ui/button";
import TableOrderButton from "@/AdminSrc/components/shared/tableOrderButton";
import { ChevronsUpDown, PencilLine } from "lucide-react";
import { Link } from "react-router-dom";
const getStatusClass = (status) => {
  switch (status) {
    case "Under testing":
      return "text-yellow-600";
    case "Completed":
      return "text-green-600";
    case "Shipping":
      return "text-blue-600";
    default:
      return "";
  }
};

// Define  order columns
export const orderColumns = (handleStatusUpdate) => [
  {
    accessorKey: "id",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          className="font-bold p-0 hover:bg-transparent"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Order ID
          <ChevronsUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const id = row.getValue("id");
      return <Link to={`/orders/${id}`}>{id}</Link>;
    },
  },

  {
    accessorKey: "products",
    header: ({ column }) => {
      return <TableOrderButton column={column} text={"Products"} />;
    },
    cell: ({ row }) => {
      const productsArray = row.getValue("products");
      return (
        <div className="font-medium">{productsArray.length + " products"}</div>
      );
    },
  },

  {
    accessorKey: "quantity",
    header: "Quantity",

    cell: ({ row }) => {
      const productsArray = row.getValue("products");
      const totalQuantity = productsArray.reduce((prev, curr) => {
        prev += curr.quantity;
        return prev;
      }, 0);
      return <div className="font-medium">{totalQuantity + " Items"}</div>;
    },
  },

  {
    accessorKey: "createdAt",
    header: ({ column }) => {
      return <TableOrderButton column={column} text={"Date"} />;
    },
    cell: ({ row }) => {
      const date = row.getValue("createdAt");
      return <div className="font-medium">{new Date(date).toDateString()}</div>;
    },
    sortingFn: "datetime",
    enableGlobalFilter: false,
  },
  {
    accessorKey: "userName",
    header: ({ column }) => {
      return <TableOrderButton column={column} text={"Customer Name"} />;
    },
    cell: ({ row }) => {
      const customer = row.getValue("userName");
      return <Link to={`/customers/${row.original.userId}`}>{customer}</Link>;
    },
  },

  {
    accessorKey: "userEmail",
    header: ({ column }) => {
      return <TableOrderButton column={column} text={"Email"} />;
    },
  },

  {
    accessorKey: "status",
    header: ({ column }) => {
      return <TableOrderButton column={column} text={"Status"} />;
    },
    cell: ({ row }) => {
      const status = row.original.status;
      const id = row.original.id;
      return (
        <div className="flex items-center">
          <span className={getStatusClass(status)}>{status}</span>

          <PencilLine
            className="inline-block ml-2 text-muted-foreground cursor-pointer"
            size={20}
            onClick={() => handleStatusUpdate(id, status)}
          />
        </div>
      );
    },
  },

  {
    accessorKey: "totalPrice",
    header: ({ column }) => {
      return <TableOrderButton column={column} text={"Total"} />;
    },
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("totalPrice"));
      const formatted = new Intl.NumberFormat("en-GB", {
        style: "currency",
        currency: "GBP",
      }).format(amount);

      return <div className="font-medium">E{formatted}</div>;
    },
    enableGlobalFilter: false,
  },

  {
    accessorKey: "shippingCity",
    header: ({ column }) => {
      return <TableOrderButton column={column} text={"City"} />;
    },
  },
];
