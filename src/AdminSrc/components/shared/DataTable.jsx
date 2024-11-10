/* eslint-disable react/prop-types */
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import {
  flexRender,
  getCoreRowModel,
  useReactTable,
  getPaginationRowModel,
  getSortedRowModel,
  //   ColumnFiltersState,
  getFilteredRowModel,
} from "@tanstack/react-table";
import TablePagination from "@/AdminSrc/components/tablePagination";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { Link } from "react-router-dom";

function DataTable({ data, columns, tableTitle, ButtonLink, ButtonText }) {
  const [sorting, setSorting] = useState([]);
  //   const [columnFilters, setColumnFilters] = useState([]);
  const [globalFilter, setGlobalFilter] = useState([]);

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    // onColumnFiltersChange: setColumnFilters,
    getFilteredRowModel: getFilteredRowModel(),
    onGlobalFilterChange: setGlobalFilter,
    enableGlobalFilter: true,
    sortingFns: {
      infoSortingFunction: (rowA, rowB, columnId) => {
        return rowA.original[columnId] > rowB.original[columnId]
          ? 1
          : rowA.original[columnId] < rowB.original[columnId]
          ? -1
          : 0;
      },
    },
    // filterFns: {
    //   infoFilteringFunction: (row, columnId, filterValue) => {
    //     return row.original[columnId].name.toLowerCase().includes(filterValue);
    //   },
    // },

    globalFilterFn: "includesString",
    state: {
      sorting,
      //   columnFilters,
      globalFilter,
    },
  });
  return (
    <>
      <Card>
        <CardHeader className="px-7 pb-0">
          <CardTitle className="text-lg">{tableTitle}</CardTitle>

          <div className="flex items-center justify-between py-6">
            <Input
              placeholder="Search..."
              //   value={table.getColumn("info")?.getFilterValue() ?? ""}
              onChange={(e) => table.setGlobalFilter(String(e.target.value))}
              className="max-w-sm"
            />
            {ButtonText && (
              <Link
                to={ButtonLink} // Replace with your actual create route
                className="bg-primary text-white px-4 py-2 rounded-md shadow-md hover:bg-orange-600 transition"
              >
                {ButtonText}
              </Link>
            )}
          </div>
        </CardHeader>
        <CardContent>
          <Table className="overflow-hidden rounded-t-md">
            <TableHeader>
              {table.getHeaderGroups().map((headerGroup) => (
                <TableRow
                  className="bg-gray-50 dark:bg-neutral-900"
                  key={headerGroup.id}
                >
                  {headerGroup.headers.map((header) => {
                    return (
                      <TableHead className="font-bold" key={header.id}>
                        {header.isPlaceholder
                          ? null
                          : flexRender(
                              header.column.columnDef.header,
                              header.getContext()
                            )}
                      </TableHead>
                    );
                  })}
                </TableRow>
              ))}
            </TableHeader>
            <TableBody>
              {table.getRowModel().rows?.length ? (
                table.getRowModel().rows.map((row) => (
                  <TableRow key={row.id}>
                    {row.getVisibleCells().map((cell) => (
                      <TableCell key={cell.id}>
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext()
                        )}
                      </TableCell>
                    ))}
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell
                    colSpan={columns.length}
                    className="h-24 text-center"
                  >
                    No results.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
          <TablePagination table={table} />
        </CardContent>
      </Card>
    </>
  );
}

export default DataTable;
