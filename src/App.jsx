import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./Components/Navbar";
import BottomNavbar from "./Components/BottomNavbar";
import HeroCarousel from "./Components/HeroCarousel";
import ContactUs from "./Components/ContactUs";
import ServicesSection from "./Components/ServicesSection";
import Footer from "./Components/Footer";
import AboutPage from "./Components/Aboutpage";
import ScrollToTop from "./Components/ScrollToTop";

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
    <ScrollToTop /> 
      <Navbar />
      <Routes>
        {/* Redirect "/" to "/home" */}
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/services" element={<ServicesSection />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
      <Footer />
      <BottomNavbar />
    </BrowserRouter>
  );
}

export default App;
