import FlashSales from "./components/FlashSales";
import HeroBanner from "./components/HeroBanner";

const Home = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        <HeroBanner />
        <FlashSales />
      </main>
    </div>
  );
};

export default Home;
