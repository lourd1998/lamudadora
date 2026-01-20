
import React from 'react';

const ServiceCompanies = () => {

    // --- CONFIGURACIÓN DE CONTACTO ---
    const businessEmail = "logistica@lamudadora.com"; 
    const emailSubject = encodeURIComponent("Consulta Mudanza Corporativa");
    const emailBody = encodeURIComponent("Hola, me gustaría solicitar un presupuesto para una mudanza de empresa. Adjunto los detalles a continuación:");

    // Imagen que contiene todos los logos juntos
    const LOGOS_IMAGE_URL ="https://raw.githubusercontent.com/lourd1998/lamudadora/refs/heads/main/public/Captura%20de%20pantalla%202025-12-08%20181856.png";

    return (
        <div id="ServiceCompanies" className="bg-gray-50 py-16 sm:py-24">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                
                {/* Título y CTA */}
                <div className="text-center mb-16">
                    
                    <div className="flex justify-center items-center mb-4">
                        <h2 className="mt-2 text-5xl font-semibold tracking-tight text-gray-900 sm:text-6xl">
                            Mudanzas Especiales para Empresas
                        </h2>
                    </div>

                    <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
                        Ofrecemos soluciones logísticas rápidas, seguras y eficientes para el traslado de oficinas, equipos y archivos. Confía en la experiencia que nos respalda.
                    </p>
                    
                    <div className="mt-8">
                        {/* Botón actualizado con redirección a Mail */}
                        <a 
                            href={`mailto:${businessEmail}?subject=${emailSubject}&body=${emailBody}`}
                            className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-full shadow-lg text-white bg-orange-500 hover:bg-orange-600 transition-all duration-300 transform hover:scale-105"
                        >
                            Cotizar Servicios Corporativos Ahora
                        </a>
                    </div>
                </div>

                {/* Imagen con logos */}
                <div className="bg-white p-8 rounded-xl shadow-2xl border border-gray-100 flex justify-center">
                    <div className="w-full max-w-5xl">
                        <h3 className="text-center text-lg font-semibold text-gray-700 uppercase tracking-wider mb-10">
                            Empresas que confían en nuestro servicio
                        </h3>

                        <img 
                            src={LOGOS_IMAGE_URL}
                            alt="Empresas que confían en nosotros"
                            className="w-full rounded-xl"
                        />
                    </div>
                </div>

            </div>
        </div>
    );
}

export default ServiceCompanies;