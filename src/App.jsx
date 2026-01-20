import './App.css'
import { Routes, Route } from 'react-router-dom'

import Navbar from "./commponents/Navbar";
import Hero from "./commponents/Hero";
import ServiceSection from "./commponents/ServiceSection";
import ServiceMl from './commponents/ServiceMl';
import ServiceGuardado from './commponents/ServiceGuardado';
import SpecialService from './commponents/SpecialService';
import Testimonials from './commponents/Testimonials';
import AboutUs from './commponents/AboutUs';
import Footer from './commponents/Footer'
import ServiceCompanies from './commponents/ServiceCompanies';
import Postulaciones from './commponents/Postulaciones';

function App() {
  return (
    <div>
      <Navbar />

      <Routes>
        {/* HOME */}
        <Route
          path="/"
          element={
            <main>
              <Hero />
              <ServiceSection />
              <ServiceMl />
              <ServiceCompanies />
              <SpecialService />
              <ServiceGuardado />
              <Testimonials />
              <AboutUs />
            </main>
          }
        />

        {/* OTRA "PÁGINA" */}
        <Route path="/postulaciones" element={<Postulaciones />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
