// import TableOrderButton from "@/components/tableOrderButton";
import axios from "axios";
import { Trash2, PencilLine, Eye } from "lucide-react";
import { Link } from "react-router-dom";
import TableOrderButton from "@/components/ui/tableOrderButton";


// const getStatusClass = (status) => {
//   switch (status) {
//     case "UnPaid":
//       return "text-red-700";
//     case "Paid":
//       return "text-green-500";
//     case "Pending":
//       return "text-yellow-400";
//     default:
//       return "";
//   }
// };

const handleDeleteProduct = async (id) => {
	try {
		await axios.delete(`http://localhost:5000/products/${id}`);
	} catch (err) {
		console.log(err.message);
	}
};

const productsColumns = () => [
	{
		accessorKey: "id",
		header: ({ column }) => {
			return <TableOrderButton column={column} text={"Product ID"} />;
		},
	},
	{
		accessorKey: "title",
		header: ({ column }) => {
			return <TableOrderButton column={column} text={"Title"} />;
		},
	},

	{
		accessorKey: "basePrice",
		header: ({ column }) => {
			return <TableOrderButton column={column} text={"Price"} />;
		},
		cell: ({ row }) => {
			const amount = parseFloat(row.getValue("basePrice"));
			const formatted = new Intl.NumberFormat("en-GB", {
				style: "currency",
				currency: "GBP",
			}).format(amount);

			return <div className="font-medium">E{formatted}</div>;
		},
		enableGlobalFilter: false,
	},
	{
		accessorKey: "discountPercentage",
		header: ({ column }) => {
			return <TableOrderButton column={column} text={"Discount"} />;
		},
		cell: ({ row }) => {
			const amount = parseFloat(row.getValue("discountPercentage"));
			// const formatted = new Intl.NumberFormat("en-GB", {
			//   style: "currency",
			//   currency: "GBP",
			// }).format(amount);

			return <div className="font-medium">{amount}%</div>;
		},
		enableGlobalFilter: false,
	},
	{
		accessorKey: "rating",
		header: ({ column }) => {
			return <TableOrderButton column={column} text={"Rating"} />;
		},
		cell: ({ row }) => {
			const rating = parseFloat(row.getValue("rating"));
			// const formatted = new Intl.NumberFormat("en-GB", {
			//   style: "currency",
			//   currency: "GBP",
			// }).format(rating);

			return <div className="font-medium">{rating}</div>;
		},
		enableGlobalFilter: false,
	},
	{
		accessorKey: "quantity",
		header: ({ column }) => {
			return <TableOrderButton column={column} text={"Quantity"} />;
		},
		cell: ({ row }) => {
			const qty = row.getValue("quantity");
			return <div className="text-center">{qty}</div>;
		},
		enableGlobalFilter: false,
	},
	{
		accessorKey: "createdAt",
		header: ({ column }) => {
			return <TableOrderButton column={column} text={"Date"} />;
		},
		cell: ({ row }) => {
			const date = new Date(row.getValue("createdAt"));
			return <div className="font-medium">{date.toDateString()}</div>;
		},
		sortingFn: "datetime",
		enableGlobalFilter: false,
	},
	// {
	//   accessorKey: "status",
	//   header: ({ column }) => {
	//     return <TableOrderButton column={column} text={"Status"} />;
	//   },
	//   cell: ({ row }) => {
	//     return (
	//       <>
	//         <span className={getStatusClass(row.original.status)}>
	//           {row.original.status}
	//         </span>
	//       </>
	//     );
	//   },
	// },

	{
		accessorKey: "actions",
		header: "Actions",
		cell: ({ row }) => {
			const rowData = row.original;
			// console.log(rowData);
			return (
				<div className="flex gap-4">
					<Link to={`/products/${rowData.id}`} className="">
						<Eye
							className="inline-block text-muted-foreground hover:text-blue-500"
							size={20}
						/>
					</Link>
					<Link to={`/products/edi`}>
						<PencilLine
							className="inline-block text-muted-foreground"
							size={20}
						/>
					</Link>
					<button
						className="hover:text-red-500 text-muted-foreground"
						onClick={() => handleDeleteProduct(rowData.id)}
					>
						<Trash2 className="inline-block " size={20} />
					</button>
				</div>
			);
		},
		enableGlobalFilter: false,
	},
];

export default productsColumns;
