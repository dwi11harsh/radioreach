import { selector } from "recoil";
import { currentTableState } from "@repo/ui/store";

export const TableHeaderSelector = selector({
  key: "TableHeaderSelector",
  get: ({ get }) => {
    const currTable = get(currentTableState);

    if (currTable === "Receiver Data") {
      return [
        "Unit No.",
        "Postcode",
        "Status",
        "Last Broadcast",
        "Transmission Streangth",
        "Listening Time",
      ];
    } else if (currTable === "Play Log") {
      return ["Song", "Artist", "Time of Play", "First Play", "No. of Plays"];
    } else return null;
  },
});
