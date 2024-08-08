import { selector } from "recoil";
import { currentTableState } from "@repo/ui/store";

export const CurrentTableSelector = selector({
  key: "CurrentTableSelector",
  get: ({ get }) => {
    const currTable = get(currentTableState);

    return currTable;
  },
  set: ({ set }, newValue) => {
    set(currentTableState, newValue);
  },
});
