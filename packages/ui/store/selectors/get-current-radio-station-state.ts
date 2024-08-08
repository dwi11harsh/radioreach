import { selector } from "recoil";
import { currentRadioStationState } from "@repo/ui/store";

export const getCurrentRadioStationState = selector({
  key: "getCurrentRadioStationState",
  get: ({ get }) => {
    const currRadioStation = get(currentRadioStationState);

    return currRadioStation;
  },
});
