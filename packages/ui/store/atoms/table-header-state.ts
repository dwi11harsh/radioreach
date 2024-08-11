import { atom } from "recoil";

export const TableHeaderState = atom<string[] | null>({
  key: "TableHeaderState",
  default: null,
});
