import BestSelling from "./components/BestSelling";
import Categories from "./components/Categories";
import ExploreProducts from "./components/ExploreProducts";
import FlashSales from "./components/FlashSales";
import HeroBanner from "./components/HeroBanner";
import MusicBanner from "./components/MusicBanner";
import NewArrival from "./components/NewArrival";
import ServiceFeatures from "./components/ServiceFeatures";

const Home = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        <HeroBanner />
        <FlashSales />
        <Categories />
        <BestSelling />
        <MusicBanner />
        <ExploreProducts />
        <NewArrival />
        <ServiceFeatures />
      </main>
    </div>
  );
};

export default Home;
