"use client";

import { currentTableState } from "@repo/ui/store";
import { TableOptions } from "@repo/ui/types";
import { useRecoilState } from "recoil";

export const TopbarSelect = ({
  receiver_data,
  play_log,
  audience_data,
  programming_assist,
}: {
  receiver_data: TableOptions;
  play_log: TableOptions;
  audience_data: TableOptions;
  programming_assist: TableOptions;
}) => {
  const [currTable, setCurrTable] = useRecoilState(currentTableState);

  const HandleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCurrTable(e.target.value as TableOptions);
  };

  return (
    <>
      <label className="sr-only">Select from List</label>
      <select
        id="tabs"
        className="bg-transparent outline-none border border-neutral-500 rounded-lg w-full p-2.5"
        onChange={HandleSelect}
      >
        <option value={receiver_data}>{receiver_data}</option>
        <option value={play_log}>{play_log}</option>
        <option value={audience_data}>{audience_data}</option>
        <option value={programming_assist}>{programming_assist}</option>
      </select>
    </>
  );
};
