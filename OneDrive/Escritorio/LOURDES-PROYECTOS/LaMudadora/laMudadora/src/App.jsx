import { useState } from 'react'
import './App.css'
import Navbar from "./commponents/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <main className="pt-20"> {/* este padding evita que el contenido quede debajo del navbar */}
        <h1 className="text-3xl text-center">Bienvenido a La Mudadora</h1>
      </main>
    </>
  );
}

export default App;


