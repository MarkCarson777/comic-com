import { forwardRef, HTMLAttributes } from "react";
import clsx from "clsx";

const TableContainer = forwardRef<
  HTMLTableElement,
  HTMLAttributes<HTMLTableElement>
>(({ className, ...props }, ref) => {
  return (
    <div className="relative w-full overflow-auto">
      <table
        ref={ref}
        {...props}
        className={clsx("w-full caption-bottom text-sm", className)}
      />
    </div>
  );
});

TableContainer.displayName = "TableContainer";

type TableComponent = typeof TableContainer & {};

const Table = Object.assign(TableContainer as TableComponent, {
  displayName: "Table",
});

export default Table;

// Table
// TableRow
// TableHeader
// TableBody
// TableFooter
// TableHead
// TableCell
// TableCaption
