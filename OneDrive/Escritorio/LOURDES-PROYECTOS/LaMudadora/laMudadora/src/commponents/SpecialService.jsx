import React from 'react';
import { Truck, Scale, Hammer, ArrowUpFromLine, Gem, Palette } from 'lucide-react'; // Iconos de Lucide React

// Componente para los Servicios Especiales
export default function SpecialService() {
    
    // Definición de los 3 servicios especiales
    const specialServices = [
        {
            title: "Pianolados en Altura",
            description: "Subida o bajada segura de muebles y objetos grandes (como pianos o sillones) a través de balcones o ventanas, utilizando sogas y equipos especializados.",
            icon: ArrowUpFromLine, // Símbolo de subida/bajada
            color: "orange-600",
            details: ["Personal altamente capacitado.", "Seguro y maniobras controladas.", "Ideal para espacios reducidos o complejos."]
        },
        {
            title: "Traslado de Pianos",
            description: "Servicio dedicado al movimiento y transporte de pianos (verticales o de cola), garantizando su integridad y afinación durante todo el proceso.",
            icon: Gem, // Símbolo de objeto de valor (precioso y delicado)
            color: "orange-600",
            details: ["Embalaje con materiales específicos.", "Vehículos acondicionados.", "Equipo con experiencia en pianos."]
        },
        {
            title: "Traslado de Obras de Arte",
            description: "Transporte cuidadoso de piezas de arte, esculturas y colecciones, con manejo delicado y las condiciones ambientales necesarias para su preservación.",
            icon: Palette, // Símbolo de arte
            color: "orange-600",
            details: ["Control de temperatura y vibración.", "Logística de alto cuidado.", "Póliza de seguro completa."]
        },
    ];

    // Componente para la Tarjeta de Servicio Individual
    const ServiceCard = ({ service }) => {
        const Icon = service.icon;

        return (
            <div className="flex flex-col h-full bg-white rounded-xl shadow-lg hover:shadow-2xl transition duration-300 overflow-hidden border border-gray-100">
                
                {/* Cabecera con Icono y Título */}
                <div className="p-6 sm:p-8 bg-orange-50 border-b border-orange-200">
                    <div className={`flex items-center space-x-4`}>
                        <div className={`p-3 rounded-full bg-orange-600 shadow-md`}>
                            <Icon className="w-6 h-6 text-white" />
                        </div>
                        <h3 className="text-xl font-semibold tracking-tight text-gray-900">
                            {service.title}
                        </h3>
                    </div>
                </div>

                {/* Contenido y Detalles */}
                <div className="p-6 sm:p-8 flex flex-col justify-between h-full">
                    <div>
                        <p className="text-base text-gray-600 mb-5">
                            {service.description}
                        </p>
                        <ul className="space-y-2 text-sm text-gray-700 list-inside">
                             {service.details.map((detail, index) => (
                                <li key={index} className="flex items-start">
                                    <span className="text-orange-500 mr-2 flex-shrink-0">•</span> 
                                    <span>{detail}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                    
                    {/* Botón de Llamada a la Acción (Ejemplo) */}
                    <div className="mt-8">
                         <a href="#" className="inline-flex items-center justify-center w-full rounded-lg bg-orange-500 px-4 py-3 text-sm font-medium text-white shadow-md transition duration-300 hover:bg-orange-600 focus:outline-none focus:ring-4 focus:ring-orange-300">
                            Cotizar Ahora
                        </a>
                    </div>
                </div>
            </div>
        );
    };


    return (
        <div className="bg-gray-50 py-24 sm:py-32">
            <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
                {/* Encabezado de la Sección */}
                <h2 className="text-center text-base/7 font-semibold text-orange-600">Servicios Adicionales de Alto Valor</h2>
                <p className="mx-auto mt-2 max-w-lg text-center text-4xl font-semibold tracking-tight text-balance text-gray-950 sm:text-5xl">
                    Logística Especializada para Objetos Delicados
                </p>

                {/* Contenedor principal (Grid de 3 columnas) */}
                <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                    
                    {specialServices.map((service, index) => (
                        <ServiceCard key={index} service={service} />
                    ))}

                </div>
            </div>
        </div>
    )
}
