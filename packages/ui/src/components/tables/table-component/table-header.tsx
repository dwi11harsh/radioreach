"use client";

import { useRecoilValue } from "recoil";
import { CurrentTableSelector, TableHeaderSelector } from "@repo/ui/store";
import { cn } from "@repo/ui";

export const TableHeader = () => {
  const currTable = useRecoilValue(CurrentTableSelector);

  if (currTable === "Play Log") {
    return (
      <div
        className={cn(
          `grid grid-cols-5 gap-4 mb-2 py-2 border rounded-2xl border-neutral-500 text-center min-w-[1080px]`
        )}
      >
        <ReturnHeaders />
      </div>
    );
  } else if (currTable === "Receiver Data") {
    return (
      <div
        className={cn(
          `grid grid-cols-6 gap-4 mb-2 py-2 border rounded-2xl border-neutral-500 text-center min-w-[1080px]`
        )}
      >
        <ReturnHeaders />
      </div>
    );
  }
};

const ReturnHeaders = () => {
  const headers = useRecoilValue(TableHeaderSelector);
  if (headers) {
    return (
      <>
        {headers.map((header, index) => (
          <div key={index}>{header}</div>
        ))}
      </>
    );
  }
};
