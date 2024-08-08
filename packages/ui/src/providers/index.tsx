"use client";

import { ThemeProvider } from "next-themes";
import { RecoilRoot } from "recoil";

export const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <RecoilRoot>{children}</RecoilRoot>
      </ThemeProvider>
    </>
  );
};
