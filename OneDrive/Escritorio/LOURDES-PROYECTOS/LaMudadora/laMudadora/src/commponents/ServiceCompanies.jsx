import React from 'react';


// Componente para la sección de Servicios y Confianza Empresarial
const ServiceCompanies = () => {
    // Definición de las empresas que confían en nosotros (Usando placeholders de Tailwind)
    // En una aplicación real, usarías tus propios URLs o SVGs.
    const trustedCompanies = [
        { name: "TechCorp Global", src: "https://tailwindcss.com/plus-assets/img/logos/158x48/transistor-logo-white.svg" },
        { name: "Design Reform", src: "https://tailwindcss.com/plus-assets/img/logos/158x48/reform-logo-white.svg" },
        { name: "Tuple Analytics", src: "https://tailwindcss.com/plus-assets/img/logos/158x48/tuple-logo-white.svg" },
        { name: "SavvyCal Solutions", src: "https://tailwindcss.com/plus-assets/img/logos/158x48/savvycal-logo-white.svg" },
        { name: "Statamic Agency", src: "https://tailwindcss.com/plus-assets/img/logos/158x48/statamic-logo-white.svg" },
        { name: "Vandelay Industries", src: "https://tailwindcss.com/plus-assets/img/logos/158x48/transistor-logo-white.svg" }, // Ejemplo extra
    ];

    return (
        // Contenedor principal del componente
        <div id="ServiceCompanies" className="bg-gray-50 py-16 sm:py-24">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                
                {/* Encabezado y Botón de Venta */}
                <div className="text-center mb-16">
                    
                    {/* Icono y Título del Servicio */}
                    <div className="flex justify-center items-center mb-4">
                         <h2 className="mt-2 text-5xl font-semibold tracking-tight text-balance text-gray-900 sm:text-6xl">
                            Mudanzas Especiales para Empresas
                        </h2>
                    </div>

                    <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
                        Ofrecemos soluciones logísticas rápidas, seguras y eficientes para el traslado de oficinas, equipos y archivos. Confía en la experiencia que nos respalda.
                    </p>
                    
                    {/* Botón de Venta (Call to Action) */}
                    <div className="mt-8">
                        <a 
                            href="#cotizar-empresas"
                            className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-full shadow-lg text-white bg-orange-500 hover:bg-orange-600 transition-all duration-300 transform hover:scale-105"
                        >
                            Cotizar Servicios Corporativos Ahora
                        </a>
                    </div>
                </div>

                {/* Sección de Logos de Confianza */}
                <div className="bg-white p-8 rounded-xl shadow-2xl border border-gray-100">
                    <h3 className="text-center text-lg font-semibold text-gray-700 uppercase tracking-wider mb-10">
                        Empresas que confían en nuestro servicio de mudanzas
                    </h3>
                    
                    {/* Contenedor de Logos */}
                    <div className="mx-auto grid max-w-lg grid-cols-3 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-6">
                        {trustedCompanies.map((company, index) => (
                             <img
                                key={index}
                                alt={company.name}
                                src={company.src}
                                // Usamos clases de Tailwind para asegurar que el logo se vea bien en cualquier columna
                                className="col-span-1 max-h-10 w-full object-contain filter grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition duration-300"
                                width={158}
                                height={40}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ServiceCompanies;