import { atom } from "recoil";
import { TableOptions } from "@repo/ui/types";

export const currentTableState = atom<TableOptions>({
  key: "currentTableState",
  default: "Receiver Data",
});
