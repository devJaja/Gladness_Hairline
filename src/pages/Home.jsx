// import Banner from '../components/Banner';
import FlashSale from "../components/FlashSale";
import InstallationPage from "../pages/InstallationPage";
import CarouselBanner from "../components/CarouselBanner";
import InstallationClass from "../components/Hair_installations page/InstallationClass";
import ShopByTexture from "../components/ShopByTexture";
import WigCollection from "../components/wigCollection";

const Home = () => {
  return (
    <div className="overflow-hidden">
      <main className="w-full">
        <CarouselBanner />
        <WigCollection />
        <FlashSale />
        <InstallationPage />
        <InstallationClass />
        <ShopByTexture />
      </main>
    </div>
  );
};

export default Home;
