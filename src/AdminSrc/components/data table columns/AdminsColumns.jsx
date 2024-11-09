// import TableOrderButton from "@/components/tableOrderButton";
import TableOrderButton from "@/components/ui/tableOrderButton";

import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  TooltipProvider,
} from "@/components/ui/tooltip";
import { Ban } from "lucide-react";

const getStatusClass = (status) => {
  switch (status) {
    case "active":
      return "text-green-600";
    case "deleted":
      return "text-red-600";
    default:
      return "";
  }
};

export const adminsColumns = (handleDeleteAdmin) => [
  {
    accessorKey: "name",
    header: ({ column }) => {
      return <TableOrderButton column={column} text={"Name"} />;
    },
  },
  {
    accessorKey: "email",
    header: ({ column }) => {
      return <TableOrderButton column={column} text={"Email"} />;
    },
  },
  {
    accessorKey: "role",
    header: ({ column }) => {
      return <TableOrderButton column={column} text={"Role"} />;
    },
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
  // {
  //   accessorKey: "createdAt",
  //   header: ({ column }) => {
  //     return <TableOrderButton column={column} text={"Registered in"} />;
  //   },
  //   cell: ({ row }) => {
  //     const date = row.getValue("createdAt");
  //     return <div className="font-medium">{new Date(date).toDateString()}</div>;
  //   },
  //   sortingFn: "datetime",
  //   enableGlobalFilter: false,
  // },
  {
    accessorKey: "lastLoginDate",
    header: ({ column }) => {
      return <TableOrderButton column={column} text={"Last Login"} />;
    },
    cell: ({ row }) => {
      const date = row.getValue("lastLoginDate");
      return (
        <div className="font-medium">
          {date ? new Date(date).toDateString() : "-"}
        </div>
      );
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
          {rowData.role == "owner" ? (
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
                  <span>Delete Admin</span>
                </TooltipContent>
                <TooltipTrigger asChild>
                  <Button
                    variant={"link"}
                    className="text-muted-foreground hover:text-red-600"
                    onClick={(e) => {
                      handleDeleteAdmin(e, rowData._id);
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
