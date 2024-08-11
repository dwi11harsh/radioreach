import Image from "next/image";
import { LogoutButton, ThemeSwitch, SelectedRadioStation } from "@repo/ui";

export const Navbar = () => {
  return (
    <nav className="flex items-center justify-between min-w-full bg-inherit dark:bg-inherit">
      <div className="flex items-center justify-center m-3">
        {/* <Image
          src="/radioreach.svg"
          alt="Radioreach"
          width={300}
          height={100}
          className="flex-shrink-0"
        /> */}
      </div>
      <div className="mx-auto">
        <SelectedRadioStation />
      </div>
      <div className="flex items-center justify-between m-3">
        <div className="ml-1 mr-2">{/* <LogoutButton /> */}</div>
        <div className="mx-1">
          <ThemeSwitch />
        </div>
      </div>
    </nav>
  );
};
