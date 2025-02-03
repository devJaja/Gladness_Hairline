import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


import Navbar from './components/Navbar';
import Banner from './components/Banner';
import NewArrivalBanner from './components/NewArrivalBanner';
import Hairs from './components/Hairs';
import FlashSale from './components/FlashSale';
import Footer from './components/Footer';
import InstallationPage from './pages/InstallationPage';
import Home from './pages/Home';
import BookingForm from './components/Hair_installations page/BookingForm';
import ClassRegistrationForm from './components/Hair_installations page/ClassRegistrationForm';

function App() {

  return (
    <Router>
      <div className='flex flex-col min-h-screen'>
        <Navbar/>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/installation" element={<InstallationPage />} />
          <Route path="/banner" element={<Banner/>} />
          <Route path="/new-arrival-banner" element={<NewArrivalBanner/>} />
          <Route path="/hairs" element={<Hairs/>} />
          <Route path="/flash-sale" element={<FlashSale/>} />
          <Route path="/booking-form" element={<BookingForm/>} />
          <Route path="/class-form" element={<ClassRegistrationForm/>} />
        </Routes>
        <Footer/>
      </div>      
    </Router>
  )
}

export default App
