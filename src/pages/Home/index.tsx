import BestSelling from "./components/BestSelling";
import Categories from "./components/Categories";
import FlashSales from "./components/FlashSales";
import HeroBanner from "./components/HeroBanner";

const Home = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        <HeroBanner />
        <FlashSales />
        <Categories />
        <BestSelling />
      </main>
    </div>
  );
};

export default Home;
