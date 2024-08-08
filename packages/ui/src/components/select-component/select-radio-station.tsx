import { RadioStation } from "@repo/ui";

export const SelectedRadioStation = () => {
  return (
    <div className="mt-2 mx-3 relative group rounded-lg w-full bg-inherit overflow-hidden before:absolute before:w-12 before:h-12 before:content[''] before:right-0  before:rounded-full before:blur-lg">
      <svg
        y="0"
        xmlns="http://www.w3.org/2000/svg"
        x="0"
        width="100"
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid meet"
        height="100"
        className="hidden sm:block w-11 h-11 absolute right-0 -rotate-180 stroke-neutral-500 dark:stroke-neutral-400 group-hover:rotate-0 duration-700"
      >
        <path
          stroke-width="3"
          stroke-linejoin="round"
          stroke-linecap="round"
          fill="none"
          d="M60.7,53.6,50,64.3m0,0L39.3,53.6M50,64.3V35.7m0,46.4A32.1,32.1,0,1,1,82.1,50,32.1,32.1,0,0,1,50,82.1Z"
          className="svg-stroke-primary"
        ></path>
      </svg>
      <select className="bg-transparent outline-none border border-neutral-500 rounded-lg w-full p-2.5">
        <option>
          <RadioStation />
        </option>
      </select>
    </div>
  );
};
