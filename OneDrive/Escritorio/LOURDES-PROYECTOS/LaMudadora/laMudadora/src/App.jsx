import { useState } from 'react'
import './App.css'
import Navbar from "./commponents/Navbar";
import Hero from "./commponents/Hero";
import ServiceSection from "./commponents/ServiceSection";
import ServiceMl from './commponents/ServiceMl';
import ServiceGuardado from './commponents/ServiceGuardado';
import SpecialService from './commponents/SpecialService';
import Testimonials from './commponents/Testimonials';

function App() {
  return (
  
    <div className="min-h-screen bg-gray-50">
      <Navbar/>
      <main>
        <Hero/>
        <ServiceSection/>
        <ServiceMl/>
        <SpecialService/>
        <ServiceGuardado/>
        <Testimonials/>
      </main>
    </div>
  
  );
}

export default App;


