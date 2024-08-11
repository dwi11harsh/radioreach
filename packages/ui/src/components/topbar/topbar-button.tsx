"use client";

import { currentTableState } from "@repo/ui/store";
import { TableOptions } from "@repo/ui/types";
import { useRecoilState } from "recoil";
import { cn } from "@repo/ui";

export const TopbarButton = ({ tableName }: { tableName: TableOptions }) => {
  const [currTable, setCurrTable] = useRecoilState(currentTableState);

  const handleSelect = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setCurrTable(tableName);
  };
  return (
    <button
      type="button"
      onClick={handleSelect}
      className={cn(
        "mr-3 flex-auto w-1/5 px-3 py-2 rounded-full dark:hover:text-white bg-inherit",
        tableName === currTable
          ? "dark:text-white hover:bg-gray-100  z-10 ring-4 ring-pink-800 dark:ring-pink-800 dark:bg-pink-800 dark:hover:bg-pink-800 dark:ring-4"
          : "border border-neutral-500 hover:bg-gray-100  focus:z-10 focus:ring-2 dark:bg-inherit  dark:hover:bg-slate-800 dark:focus:ring-4  dark:focus:ring-pink-950 dark:focus:text-white"
      )}
    >
      {tableName}
    </button>
  );
};
