"use client";

import { useRecoilValue } from "recoil";
import { ReceiverDataSelector } from "@repo/ui/store";

export const TableBody = () => {
  const receiverData = useRecoilValue(ReceiverDataSelector);
  console.log("receiverData: ", receiverData);
  return <>{receiverData}</>;
};
