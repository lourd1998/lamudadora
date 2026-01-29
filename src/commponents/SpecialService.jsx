import React from 'react';
import { ArrowUpFromLine, Gem, Palette } from 'lucide-react'; 


export default function SpecialService() {
    
   
    const phoneNumber = "3814161901"; 
    const specialServices = [
        {
            title: "Piolados en Altura",
            description: "Subida o bajada segura de muebles y objetos grandes (como pianos o sillones) a través de balcones o ventanas, utilizando sogas y equipos especializados.",
            icon: ArrowUpFromLine,
            color: "orange-600",
            details: ["Personal altamente capacitado.", "Seguro y maniobras controladas.", "Ideal para espacios reducidos o complejos."],
            whatsappMessage: "Hola! Me interesa consultar por el servicio de Piolados en Altura."
        },
        {
            title: "Traslado de Pianos",
            description: "Servicio dedicado al movimiento y transporte de pianos (verticales o de cola), garantizando su integridad y afinación durante todo el proceso.",
            icon: Gem,
            color: "orange-600",
            details: ["Embalaje con materiales específicos.", "Vehículos acondicionados.", "Equipo con experiencia en pianos."],
            whatsappMessage: "Hola! Me interesa solicitar presupuesto para el Traslado de un Piano."
        },
        {
            title: "Traslado de Obras de Arte",
            description: "Transporte cuidadoso de piezas de arte, esculturas y colecciones, con manejo delicado y las condiciones ambientales necesarias para su preservación.",
            icon: Palette,
            color: "orange-600",
            details: ["Control de temperatura y vibración.", "Logística de alto cuidado.", "Póliza de seguro completa."],
            whatsappMessage: "Hola! Quisiera información sobre el Traslado de Obras de Arte."
        },
    ];

  
    const ServiceCard = ({ service }) => {
        const Icon = service.icon;
        
        const waLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(service.whatsappMessage)}`;

        return (
            <div className="flex flex-col h-full bg-white rounded-xl shadow-lg hover:shadow-2xl transition duration-300 overflow-hidden border border-gray-100">
                
                
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
                    
                    
                    <div className="mt-8">
                         <a 
                            href={waLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center w-full rounded-lg bg-orange-500 px-4 py-3 text-sm font-medium text-white shadow-md transition duration-300 hover:bg-orange-600 focus:outline-none focus:ring-4 focus:ring-orange-300"
                        >
                            Cotizar ahora
                        </a>
                    </div>
                </div>
            </div>
        );
    };


    return (
        <div id="SpecialService" className="bg-gray-50 py-24 sm:py-32">
            <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
                
                <h2 className="text-center text-base/7 font-semibold text-orange-600">Servicios Adicionales de Alto Valor</h2>
                <p className="mx-auto mt-2 max-w-lg text-center text-4xl font-semibold tracking-tight text-balance text-gray-950 sm:text-5xl">
                    Logística Especializada para Objetos Delicados
                </p>

                <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {specialServices.map((service, index) => (
                        <ServiceCard key={index} service={service} />
                    ))}
                </div>
            </div>
        </div>
    );
}