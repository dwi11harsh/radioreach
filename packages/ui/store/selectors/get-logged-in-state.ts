import { selector } from "recoil";
import { loggedInState } from "@repo/ui/store";

export const getLoggedInState = selector({
  key: "getLoggedInState",
  get: ({ get }) => {
    const currentState = get(loggedInState);

    return currentState;
  },
});
