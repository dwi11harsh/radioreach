import { selector } from "recoil";
import { ReceiverDataState } from "@repo/ui/store";

export const ReceiverDataSelector = selector({
  key: "ReceiverDataSelector",
  get: async ({ get }) => {
    const currData = get(ReceiverDataState);

    return currData;
  },
});
