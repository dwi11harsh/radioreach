import { StaticBar, Topbar } from "@repo/ui";

const Home = () => {
  return (
    <main className="min-h-screen min-w-full ">
      <Topbar />
      <StaticBar />
      <div className="flex justify-between">
        <div>hello</div>
        <div>hi</div>
      </div>
    </main>
  );
};

export default Home;
