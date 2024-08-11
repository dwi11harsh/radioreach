export type ReceiverTableDataType = {
  unit_no: string;
  postcode: string;
  status: boolean;
  last_broadcast: string;
  transmission_streangth: 0 | 1 | 2 | 3 | 4 | 5;
  listening_time: string;
};

// TODO: temporary
export type Songs = {
  rank: number;
  title: string;
  mm_song_id: string;
  artists_name: string;
  total_plays: string;
  first_play: string;
  last_play: string;
  total_play_duration_mins: string;
};
