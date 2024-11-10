// import TableOrderButton from "@/components/tableOrderButton";
import TableOrderButton from "@/AdminSrc/components/shared/tableOrderButton";

import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  TooltipProvider,
} from "@/components/ui/tooltip";
import { Ban } from "lucide-react";
import { Link } from "react-router-dom";

// const getStatusClass = (status) => {
//   switch (status) {
//     case "active":
//       // return "text-green-500";
//       return "text-white bg-green-500 rounded-full px-2 py-0.5 text-sm";
//     case "canceled":
//     case "banned":
//       // return "text-red-500";
//       return "text-white bg-red-500 rounded-full px-2 py-0.5 text-sm";

//     default:
//       return "";
//   }
// };

const getStatusClass = (status) => {
  switch (status) {
    case "active":
      return "text-green-600";
    case "deleted":
    case "banned":
      return "text-red-600";
    default:
      return "";
  }
};

export const customerColumns = (handleBanUser) => [
  {
    accessorKey: "fullName",
    // sortingFn: "infoSortingFunction",
    // filterFn: "infoFilteringFunction",
    header: ({ column }) => {
      return <TableOrderButton column={column} text={"Name"} />;
    },
    cell: ({ row }) => {
      const rowData = row.original;
      return <Link to={`${rowData.id}`}>{rowData.fullName}</Link>;
    },
  },
  {
    accessorKey: "email",
    header: ({ column }) => {
      return <TableOrderButton column={column} text={"Email"} />;
    },
    cell: ({ row }) => {
      const rowData = row.original;
      return <Link to={`${rowData.id}`}>{rowData.email}</Link>;
    },
  },
  {
    accessorKey: "phone",
    header: "Phone Number",
  },
  {
    accessorKey: "accountStatus",
    header: ({ column }) => {
      return <TableOrderButton column={column} text={"Status"} />;
    },
    cell: ({ row }) => {
      return (
        <>
          <div className="text-center">
            <span className={getStatusClass(row.original.accountStatus)}>
              {row.original.accountStatus}
            </span>
          </div>
        </>
      );
    },
  },
  {
    accessorKey: "createdAt",
    header: ({ column }) => {
      return <TableOrderButton column={column} text={"Registered in"} />;
    },
    cell: ({ row }) => {
      const date = row.getValue("createdAt");
      return <div className="font-medium">{new Date(date).toDateString()}</div>;
    },
    sortingFn: "datetime",
    enableGlobalFilter: false,
  },
  {
    accessorKey: "actions",
    header: "Actions",
    cell: ({ row }) => {
      const rowData = row.original;
      return (
        <>
          {rowData.accountStatus == "deleted" ? (
            <Button
              variant={"link"}
              className="text-muted-foreground hover:text-red-600 cursor-not-allowed"
              disabled
            >
              <Ban size={20} />
            </Button>
          ) : (
            <TooltipProvider>
              <Tooltip>
                <TooltipContent>
                  <span>Ban User</span>
                </TooltipContent>
                <TooltipTrigger asChild>
                  <Button
                    variant={"link"}
                    className="text-muted-foreground hover:text-red-600"
                    onClick={(e) => {
                      handleBanUser(e, rowData.id);
                    }}
                  >
                    <Ban size={20} />
                  </Button>
                </TooltipTrigger>
              </Tooltip>
            </TooltipProvider>
          )}
        </>
      );
    },
    enableGlobalFilter: false,
  },
];
