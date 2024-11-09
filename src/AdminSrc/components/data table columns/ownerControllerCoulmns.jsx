// import TableOrderButton from "@/components/tableOrderButton";
import TableOrderButton from "@/components/ui/tableOrderButton";
import { Eye, PencilLine, Trash2 } from "lucide-react";
import { Link } from "react-router-dom";

export const ownerControllCoulmns = [
  {
    accessorKey: "id",
    header: ({ column }) => {
      return <TableOrderButton column={column} text={"Product ID"} />;
    },
  },
  {
    accessorKey: "name",
    header: ({ column }) => {
      return <TableOrderButton column={column} text={"Name"} />;
    },
  },

  {
    accessorKey: "actions",
    header: "Actions",
    cell: ({ row }) => {
      const rowData = row.original;
      return (
        <div className="flex gap-4">
          <Link to={`/users/${rowData.id}`}>
            <Eye className="inline-block text-muted-foreground" size={20} />
          </Link>
          <Link to={`/users`}>
            <PencilLine
              className="inline-block text-muted-foreground"
              size={20}
            />
          </Link>
          <Link to={"/"}>
            <Trash2 className="inline-block text-muted-foreground" size={20} />
          </Link>
        </div>
      );
    },
    enableGlobalFilter: false,
  },
];
