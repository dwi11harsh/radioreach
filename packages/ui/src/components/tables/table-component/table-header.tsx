"use client";

import { useRecoilValue } from "recoil";
import { TableHeaderSelector } from "@repo/ui/store";

export const TableHeader = () => {
  const headers = useRecoilValue(TableHeaderSelector);
  if (headers) {
    return (
      <div className="grid grid-cols-6 gap-4 py-1 border rounded-xl border-neutral-500 text-center min-w-[1080px]">
        {headers.map((header, index) => (
          <div key={index}>{header}</div>
        ))}
      </div>
    );
  }
};
