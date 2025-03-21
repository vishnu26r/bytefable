import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import BottomNavbar from "./Components/BottomNavbar";
import HeroCarousel from "./Components/HeroCarousel";
import ContactUs from "./Components/ContactUs";
import ServicesSection from "./Components/ServicesSection";
import Footer from "./Components/Footer";
import AboutPage from "./Components/Aboutpage";

function Home() {
  return (
    <>
      <HeroCarousel />
      <ServicesSection />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="home" element={<Home />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/services" element={<ServicesSection />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
      <Footer/>
      <BottomNavbar />
    </BrowserRouter>
  );
}

export default App;