"use client";

import { useRecoilValue } from "recoil";
import { CurrentTableSelector, TableHeaderSelector } from "@repo/ui/store";
import { cn } from "@repo/ui";

export const TableHeader = () => {
  const headers = useRecoilValue(TableHeaderSelector);
  const currTable = useRecoilValue(CurrentTableSelector);

  // different tables have different number number of cols required
  let cols_num: 5 | 6;

  if (currTable === "Play Log") {
    cols_num = 5;
  } else cols_num = 6;

  if (headers) {
    return (
      <div
        className={cn(
          `grid grid-cols-${cols_num} gap-4 mb-2 py-2 border rounded-2xl border-neutral-500 text-center min-w-[1080px]`
        )}
      >
        {headers.map((header, index) => (
          <div key={index}>{header}</div>
        ))}
      </div>
    );
  }
};
