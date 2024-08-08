"use client";

import { useRecoilState } from "recoil";
import { currentRadioStationState } from "@repo/ui/store";

export const RadioStation = () => {
  const [radioStation, setRadioStation] = useRecoilState(
    currentRadioStationState
  );

  return <>{radioStation}</>;
};
