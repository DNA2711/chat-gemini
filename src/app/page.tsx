import Sider from "@/components/Sider";
import Header from "@/components/Header";
import Promt from "@/components/Promt";

const Home = () => {
  return (
    <div className="flex transition-all dark:bg-white duration-300">
      <Sider />
      <div className="w-full">
        <Header />
        <Promt />
      </div>
    </div>
  );
};

export default Home;
