import React from 'react';
import { Briefcase, Users, Truck, ClipboardCheck } from 'lucide-react'; 
export default function Postulaciones() {
    
    const hrEmail = "rrhh@lamudadora.com"; 

   
    const openPositions = [
        {
            title: "Chofer de Larga Distancia",
            type: "Full-time",
            description: "Buscamos conductores con experiencia en rutas nacionales y carnet profesional vigente.",
            icon: Truck,
            requirements: ["Licencia de conducir clase E1 o superior.", "Experiencia comprobable de 3 años.", "Disponibilidad para viajar."]
        },
        {
            title: "Operario de Mudanzas",
            type: "Part-time / Full-time",
            description: "Personal para carga, descarga y embalaje de mobiliario. Valoramos el compromiso y la puntualidad.",
            icon: Users,
            requirements: ["Buen estado físico.", "Residir en zona aledaña.", "Experiencia en manejo de herramientas básicas."]
        },
        {
            title: "Asesor Comercial",
            type: "Full-time",
            description: "Buscamos perfiles dinámicos para la atención al cliente, presupuestación y cierre de ventas corporativas.",
            icon: Briefcase,
            requirements: ["Experiencia en ventas de servicios.", "Manejo de herramientas digitales.", "Excelente dicción."]
        }
    ];

    const JobCard = ({ job }) => {
        const Icon = job.icon;
        
     
        const emailSubject = encodeURIComponent(`Postulación para el puesto: ${job.title}`);
        const emailBody = encodeURIComponent(`Hola equipo de RRHH,\n\nMe pongo en contacto para postularme al puesto de ${job.title}. Adjunto mi CV para su revisión.\n\nSaludos.`);
        const mailtoLink = `mailto:${hrEmail}?subject=${emailSubject}&body=${emailBody}`;

        return (
            <div id='postulaciones' className="flex flex-col h-full bg-white rounded-xl shadow-lg hover:shadow-2xl transition duration-300 overflow-hidden border border-gray-100">
                
                <div className="p-6 sm:p-8 bg-orange-50 border-b border-orange-200">
                    <div className="flex items-center justify-between mb-4">
                        <div className="p-3 rounded-full bg-orange-600 shadow-md">
                            <Icon className="w-6 h-6 text-white" />
                        </div>
                        <span className="inline-flex items-center rounded-md bg-orange-100 px-2 py-1 text-xs font-medium text-orange-700 ring-1 ring-inset ring-orange-700/10">
                            {job.type}
                        </span>
                    </div>
                    <h3 className="text-xl font-semibold tracking-tight text-gray-900">
                        {job.title}
                    </h3>
                </div>

                <div className="p-6 sm:p-8 flex flex-col justify-between h-full">
                    <div>
                        <p className="text-base text-gray-600 mb-5">
                            {job.description}
                        </p>
                        <div className="flex items-center text-sm font-semibold text-gray-900 mb-3">
                            <ClipboardCheck className="w-4 h-4 mr-2 text-orange-600" />
                            Requisitos:
                        </div>
                        <ul className="space-y-2 text-sm text-gray-700 list-inside mb-6">
                             {job.requirements.map((req, index) => (
                                <li key={index} className="flex items-start">
                                    <span className="text-orange-500 mr-2 flex-shrink-0">•</span> 
                                    <span>{req}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                    
                  
                    <div className="mt-auto">
                         <a 
                            href={mailtoLink}
                            className="inline-flex items-center justify-center w-full rounded-lg bg-orange-500 px-4 py-3 text-sm font-medium text-white shadow-md transition duration-300 hover:bg-orange-600 focus:outline-none focus:ring-4 focus:ring-orange-300"
                        >
                            Enviar CV por Email
                        </a>
                    </div>
                </div>
            </div>
        );
    };

    return (
        <section id="Postulaciones" className="bg-gray-50 py-24 sm:py-32 scroll-mt-20">
            <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
            
                <div className="text-center mb-12">
                    <h2 className="text-base font-semibold text-orange-600">Trabajá con nosotros</h2>
                    <p className="mt-2 text-4xl font-semibold tracking-tight text-gray-950 sm:text-5xl">
                        Unite al equipo de La Mudadora
                    </p>
                    <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                        Buscamos personas comprometidas que quieran sumarse a una empresa líder en logística y mudanzas.
                    </p>
                </div>

           
                <div className="flex justify-center mb-8">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-orange-200 shadow-sm">
                        <span className="relative flex h-3 w-3">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-3 w-3 bg-orange-600"></span>
                        </span>
                        <span className="text-sm font-bold text-gray-700">
                            {openPositions.length} BÚSQUEDAS ACTIVAS HOY
                        </span>
                    </div>
                </div>

                {/* Grid de Puestos */}
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {openPositions.map((job, index) => (
                        <JobCard key={index} job={job} />
                    ))}
                </div>

                
            </div>
        </section>
    );
}