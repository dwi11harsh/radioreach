import { ReceiverTableDataType, Songs } from "@repo/ui/types";
import { atom } from "recoil";

export const ReceiverDataState = atom<Songs[] | null>({
  key: "ReceiverDataState",
  default: null,
});
