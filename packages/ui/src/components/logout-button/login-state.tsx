"use client";

import { useRecoilValue } from "recoil";
import { getLoggedInState } from "../../../store";

export const LoginLogoutState = () => {
  const loginState = useRecoilValue(getLoggedInState);

  if (loginState) {
    return <>Logout</>;
  } else return <>Login</>;
};
