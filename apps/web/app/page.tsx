import { SearchBar, StaticBar, TableHeader, Topbar, BASE_URL } from "@repo/ui";

const Home = async () => {
  const todays_date = new Date().toISOString().split("T")[0] as string;

  const receiver_table_response = await fetch(
    `${BASE_URL}/user/songs?f_date=2023-12-01&t_date=${todays_date}`,
    {
      method: "GET",
    }
  );

  const receiver_data = await receiver_table_response.json();

  console.log(
    "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa                :           ",
    receiver_data
  );

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
      <div className="mt-3 mx-3 max-h-[2160px]">
        <div className="flex flex-col">
          <TableHeader />
          {/* Assuming receiver_data.data is an array */}
          <div>
            {receiver_data.data && receiver_data.data.length > 0 ? (
              receiver_data.data.map((song: any, index: any) => (
                <div key={index}>
                  {/* Replace with the actual properties you want to display */}
                  <p>{song.title}</p>
                  <p>{song.artist}</p>
                </div>
              ))
            ) : (
              <p>No data available</p>
            )}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
