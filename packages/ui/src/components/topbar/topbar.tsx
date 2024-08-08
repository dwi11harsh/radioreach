import { TableOptions } from "@repo/ui/types";
import { TopbarButton } from "./topbar-button";
import { TopbarSelect } from "./topbar-select";

export const Topbar = () => {
  const receiver_data: TableOptions = "Receiver Data";
  const play_log: TableOptions = "Play Log";
  const audience_data: TableOptions = "Audience Data";
  const programming_assist: TableOptions = "Programming Assist";

  return (
    <>
      <div className="sticky mt-3 mx-3">
        <div className="sm:hidden ml-6 mr-9">
          <TopbarSelect
            receiver_data={receiver_data}
            play_log={play_log}
            audience_data={audience_data}
            programming_assist={programming_assist}
          />
        </div>
        <div className="hidden sm:block rounded-full w-full mt-5" role="group">
          <div className="flex justify-between">
            <TopbarButton tableName={receiver_data} />
            <TopbarButton tableName={play_log} />
            <TopbarButton tableName={audience_data} />
            <TopbarButton tableName={programming_assist} />
          </div>
        </div>
      </div>
    </>
  );
};
