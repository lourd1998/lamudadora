import React from 'react';

function HeroSection() {
    // Placeholder para una imagen de camión de mudanza (usando el esquema de color azul/naranja)
    // Usaremos un placeholder azul claro, similar al del fondo en tu imagen de referencia.
    const HERO_IMAGE_URL = "https://raw.githubusercontent.com/lourd1998/lamudadora/refs/heads/main/public/camion2.png"; // bg-blue-300
    const phoneNumber = "+543814161901";


    return (
        <div className="relative py-16 sm:py-24 lg:py-32 bg-gray-50">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                
                {/* Contenedor principal con diseño de dos columnas (grid) */}
                <div className="lg:grid lg:grid-cols-2 lg:gap-x-12 xl:gap-x-16 items-center">
                    
                    {/* Columna Izquierda: Texto y CTA */}
                    <div className="py-12 lg:py-0">
                        {/* Titular Principal */}
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900 leading-tight mb-6">
                            Tu mudanza <span className="text-orange-600">simple,</span> segura y confiable
                        </h1>
                        
                        {/* Párrafo (opcional, para añadir contexto) */}
                        <p className="mt-4 text-xl text-gray-600 max-w-lg">
                            Somos expertos en logística de hogar y oficina, ofreciendo un servicio de puerta a puerta con garantia incluido y seguimiento en tiempo real.
                        </p>
                        
                        {/* Botones CTA */}
                        <div className="mt-10 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                            
                            {/* Botón Principal (Cotizar/Solicitar Presupuesto) - Naranja (CTA principal) */}
                            <a 
                                href="https://form.bymovers.com/es/f/particulares_sencillo_v2?p=eyJmIjoicGFydGljdWxhcmVzX3NlbmNpbGxvX3YyIiwiZCI6ImxhbXVkYWRvcmEiLCIiOm51bGx9" 
                                className="inline-flex items-center justify-center rounded-lg bg-orange-500 px-8 py-3 text-base font-semibold text-white shadow-lg hover:bg-orange-600 transition duration-150"
                            >
                                Solicitar Presupuesto
                            </a>
                            
                            {/* Botón Secundario (Llamar Ahora) - Blanco con borde */}
                            <a 
                                href={`tel:${phoneNumber}`} 
                                className="inline-flex items-center justify-center rounded-lg border border-gray-300 bg-white px-8 py-3 text-base font-semibold text-gray-700 shadow-sm hover:bg-gray-100 transition duration-150"
                            >
                                Llamar Ahora
                            </a>
                        </div>
                    </div>

                    {/* Columna Derecha: Imagen del Camión con Curva */}
                    <div className="mt-0 lg:-mt-10 relative flex justify-center lg:justify-end">
                        <div className="relative w-full max-w-md h-96 sm:h-[490px]">
                            {/* Contenedor que simula la curva. Usaremos un color de fondo azul claro (blue-300/100)
                                y la clase 'rounded-l-full' para crear la curva en el lado izquierdo del contenedor de la imagen,
                                similar al efecto de la imagen de referencia. */}
                            <div className="absolute inset-0 bg-blue-100 rounded-tl-3xl sm:rounded-tl-[5rem] overflow-hidden shadow-2xl">
                                <img
                                    src={HERO_IMAGE_URL}
                                    alt="Camión de mudanzas de La Mudadora"
                                    className="w-full h-full object-cover object-top" // Ajuste para mover la imagen a la derecha del contenedor con curva
                                    // El placeholder incluye un color azul oscuro (1E3A8A) para el texto.
                                />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default HeroSection;