import { atom } from "recoil";

export const SearchStringState = atom<string | null>({
  key: "SearchStringState",
  default: null,
});
