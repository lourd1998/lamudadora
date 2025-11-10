import { useState } from 'react'
import './App.css'
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


function App() {
  return (
  
    <div >
      <Navbar/>
      <main>
        <Hero/>
        <ServiceSection/>
        <ServiceMl/>
        <ServiceCompanies/>
        <SpecialService/>
        <ServiceGuardado/>
        <Testimonials/>
        <AboutUs/>
      </main>
      <Footer/>
    </div>
  
  );
}

export default App;


