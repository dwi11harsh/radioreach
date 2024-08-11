import { ReceiverTableDataType } from "@repo/ui/types";
import { atom } from "recoil";

// TODO: temporary
type Songs = {
  rank: number;
  title: string;
  mm_song_id: string;
  artists_name: string;
  total_plays: string;
  first_play: string;
  last_play: string;
  total_play_duration_mins: string;
};

export const ReceiverDataState = atom<Songs[] | null | ReceiverTableDataType[]>(
  {
    key: "ReceiverDataState",
    default: null,
  }
);
