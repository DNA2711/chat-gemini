import Alpha from "@/components/alpha";
import Header from "@/components/Header";

const Home = () => {
  return (
    <div className="flex transition-all dark:bg-white duration-300">
      <Alpha />
      <div className="">
        <Header />
      </div>
    </div>
  );
};

export default Home;
