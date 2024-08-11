import { selector } from "recoil";
import { SelectedDateState } from "@repo/ui/store";

export const SelectedDateStateSelector = selector({
  key: "SelectedDateStateSelector",
  get: ({ get }) => {
    const currDates = get(SelectedDateState);

    return currDates;
  },
});
