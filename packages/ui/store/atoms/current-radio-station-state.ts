import { atom } from "recoil";

export type RadioStationOptions =
  | "THE TOON - NEWCASTLE AND GATESHEAD MULTIPLEX"
  | null;

export const currentRadioStationState = atom<RadioStationOptions>({
  key: "currentRadioStationState",
  default: "THE TOON - NEWCASTLE AND GATESHEAD MULTIPLEX",
});
