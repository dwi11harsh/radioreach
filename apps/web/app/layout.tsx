import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn, Navbar, Providers } from "@repo/ui";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Radioreach",
  description: "Dashboard UI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          inter.className,
          "bg-neutral-100 dark:bg-neutral-950 dark:text-neutral-400 text-lg font-normal text-neutral-700"
        )}
      >
        <Providers>
          <Navbar />
          {children}
        </Providers>
      </body>
    </html>
  );
}
