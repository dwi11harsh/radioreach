import {
  SearchBar,
  StaticBar,
  TableHeader,
  Topbar,
  BASE_URL,
  TableBody,
} from "@repo/ui";
import { Songs } from "@repo/ui/types";

const Home = async () => {
  const todays_date = new Date().toISOString().split("T")[0] as string;

  const receiver_table_response: Response = await fetch(
    `${BASE_URL}/user/songs?f_date=2023-12-01&t_date=${todays_date}`,
    {
      method: "GET",
    }
  );
  const temp = await receiver_table_response.json();
  const receiver_data: Songs[] = temp.data;

  return (
    <main className="min-h-screen min-w-full ">
      <Topbar />
      <StaticBar />
      <div className="flex justify-between">
        <div></div>
        <div>
          <SearchBar />
        </div>
      </div>
      <div className="mt-2 mx-3 max-h-[2160px]">
        <div className="flex flex-col">
          <TableHeader />
          <TableBody receiver_data={receiver_data} />
        </div>
      </div>
    </main>
  );
};

export default Home;
