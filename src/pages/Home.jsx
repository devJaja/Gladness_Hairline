// import Banner from '../components/Banner';
import Hairs from '../components/Hairs';
import FlashSale from '../components/FlashSale';
import InstallationPage from '../pages/InstallationPage';
import CarouselBanner from '../components/CarouselBanner';
import InstallationClass from '../components/Hair_installations page/InstallationClass';

const Home = () => {
  return (
    <main>
      <CarouselBanner/>
      <Hairs/>
      <FlashSale/>
      <InstallationPage/>
      <InstallationClass/>
    </main>
  )
}

export default Home
