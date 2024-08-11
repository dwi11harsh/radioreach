import { TableBody } from "./table-body";
import { TableHeader } from "./table-header";

export const TableComponent = () => {
  return (
    <div className="mt-3 mx-3 max-h-[2160px]">
      <div className="flex flex-col">
        {/* Table Head */}
        <TableHeader />
        {/* context: map table rows into multiple divs */}
        <TableBody />
      </div>
    </div>
  );
};
