import { atom } from "recoil";

let d = new Date();
const t_date = d.toISOString().split("T")[0] as string;

type SelectedDateStateType = {
  from_date: string;
  to_date: string;
};

export const SelectedDateState = atom<SelectedDateStateType>({
  key: "SelectedDateState",
  default: {
    from_date: "2023-12-01",
    to_date: t_date ? t_date : "2024-08-01",
  },
});
