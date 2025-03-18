import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import HumanHair from "./components/HumanHair";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import NewArrivalBanner from "./components/NewArrivalBanner";
import Hairs from "./components/Hairs";
import FlashSale from "./components/FlashSale";
import Footer from "./components/Footer";
import InstallationPage from "./pages/InstallationPage";
import Home from "./pages/Home";
import BookingForm from "./components/Hair_installations page/BookingForm";
import ClassRegistrationForm from "./components/Hair_installations page/ClassRegistrationForm";
import Login from "./components/Login";
import Register from "./components/Register";
import Glueless from "./components/Glueless";
import HairBlend from "./components/HairBlend";
import BouncyHair from "./components/BouncyHair";
import ScrollToTop from "./components/ScrollToTop";
import WigCollection from "./components/wigCollection";
import Carts from "./components/Carts";
function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/installation" element={<InstallationPage />} />
          <Route path="/banner" element={<Banner />} />
          <Route path="/new-arrival-banner" element={<NewArrivalBanner />} />
          <Route path="/hairs" element={<Hairs />} />
          <Route path="/flash-sale" element={<FlashSale />} />
          <Route path="/booking-form" element={<BookingForm />} />
          <Route path="/class-form" element={<ClassRegistrationForm />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/human-hair" element={<HumanHair />} />
          <Route path="/glueless-hair" element={<Glueless />} />
          <Route path="/hair-blend" element={<HairBlend />} />
          <Route path="/bouncy-hair" element={<BouncyHair />} />
          <Route path="/wig-collection" element={<WigCollection />} />
          <Route path="/carts" element={<Carts />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
