"use client";

import { useEffect } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { CurrentTableSelector, ReceiverDataState } from "@repo/ui/store";
import { Songs } from "@repo/ui/types";

export const TableBody = ({ receiver_data }: { receiver_data: Songs[] }) => {
  const [receiverData, setReceiverData] = useRecoilState(ReceiverDataState);
  const currTable = useRecoilValue(CurrentTableSelector);

  useEffect(() => {
    if (Array.isArray(receiver_data)) {
      setReceiverData(receiver_data);
    }
  }, [receiver_data, setReceiverData]);

  if (
    Array.isArray(receiverData) &&
    receiverData.length > 0 &&
    currTable === "Play Log"
  ) {
    return (
      <div className="overflow-y-auto max-h-[2160px] min-w-[1080px] no-scrollbar">
        {receiverData.map((song, index) => (
          <div
            key={index}
            className="grid grid-cols-5 gap-4 py-1 font-light mt-1 border rounded-xl text-center min-w-[1080px] text-neutral-700 dark:text-neutral-400 border-neutral-400 dark:border-neutral-600"
          >
            <div className="ml-2">{song.title}</div>
            <div>{song.artists_name}</div>
            <div>{song.last_play}</div>
            <div>{song.first_play}</div>
            <div className="mr-2">{song.total_plays}</div>
          </div>
        ))}
        <p>Table Bottom</p>
      </div>
    );
  }

  return <p>No data available</p>;
};
