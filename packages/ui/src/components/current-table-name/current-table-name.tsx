"use client";

import { useRecoilValue } from "recoil";
import { CurrentTableSelector } from "@repo/ui/store";

export const CurrentTableName = () => {
  const currTable = useRecoilValue(CurrentTableSelector);
  return currTable;
};
