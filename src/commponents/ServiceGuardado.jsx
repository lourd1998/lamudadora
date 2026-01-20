import React from 'react';

// Componente principal de la sección de servicios de guardado
export default function ServiceGuardado() {
    // Definición de las dos modalidades
    const services = [
        {
            name: "Bauleras Privadas",
            imageAlt: "Imágenes de bauleras privadas",
            // Ahora usamos dos URLs de imagen por servicio
            imageSrc: [
                "https://raw.githubusercontent.com/lourd1998/lamudadora/refs/heads/main/public/bauleraexterior.jpg.JPG", // Imagen 1 (arriba)
                "https://raw.githubusercontent.com/lourd1998/lamudadora/refs/heads/main/public/bauleraexterior2.jpg.JPG"  // Imagen 2 (abajo)
            ],
            descriptionTitle: "Bauleras: Tu Espacio Personalizado",
            descriptionText: "Solución de almacenamiento totalmente privada con tamaños que se ajustan a tus necesidades. Cierra con tu propio candado y accede libremente.",
            details: [
                "Espacios 100% privados y exclusivos.",
                "Diferentes tamaños disponibles (15, 20, 30 m3).",
                "Acceso controlado con tu propia llave/candado.",
                "Ideal para mantener resguardados tus bienes mas preciados.",
            ],
            pointerDirection: 'left', // El puntero de la descripción irá hacia la izquierda, apuntando a la imagen de Bauleras
        },
        {
            name: "Guardamuebles Sectorizado",
            imageAlt: "Imágenes de guardamuebles sectorizado",
            // Ahora usamos dos URLs de imagen por servicio
            imageSrc: [
                "https://raw.githubusercontent.com/lourd1998/lamudadora/refs/heads/main/public/Gemini_Generated_Image_z5qe66z5qe66z5qe.png", // Imagen 1 (arriba)
                "https://raw.githubusercontent.com/lourd1998/lamudadora/refs/heads/main/public/Gemini_Generated_Image_kzetznkzetznkzet.png"     // Imagen 2 (abajo)
            ],
            descriptionTitle: "Guardamuebles: Almacenamiento Compartido",
            descriptionText: "Ideal para guardar mobiliario y objetos voluminosos en sectores delimitados de nuestro depósito común, optimizando costos.",
            details: [
                "Sectorización dentro de un depósito común.",
                "Opción más económica y flexible.",
                "Medición por volumen real ocupado.",
                "Seguridad y garatia en todos los articulos.",
            ],
            pointerDirection: 'right', // El puntero de la descripción irá hacia la derecha, apuntando a la imagen de Guardamuebles
        }
    ];

    // Componente auxiliar para renderizar el vértice (puntero) del cuadro de diálogo
    const Pointer = ({ direction }) => {
        // La punta está siempre a la izquierda o derecha del contenedor de la descripción
        const baseClasses = "absolute size-4 rotate-45 z-20";
        let pointerClasses = "";

        // Usamos una clase fija para el color del fondo de la descripción
        const bgColor = 'bg-orange-50';

        if (direction === 'left') {
            // Apunta a la izquierda (Columna 1: Bauleras)
            pointerClasses = `top-1/2 -left-2 -translate-y-1/2 ${bgColor}`;
        } else if (direction === 'right') {
            // Apunta a la derecha (Columna 3: Guardamuebles)
            pointerClasses = `top-1/2 -right-2 -translate-y-1/2 ${bgColor}`;
        }

        return <div className={`${baseClasses} ${pointerClasses}`} />;
    };


    return (
        <div id="ServiceGuardado" className="bg-gray-50 py-24 sm:py-32">
            <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
                {/* Encabezado de la Sección */}
                <h2 className="text-center text-base/7 font-semibold text-orange-600">Nuestros Servicios de Almacenamiento</h2>
                <p className="mx-auto mt-2 max-w-lg text-center text-4xl font-semibold tracking-tight text-balance text-gray-950 sm:text-5xl">
                    Bauleras y Guardamuebles
                </p>
                 <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto text-center"> 
            Necesitabas una solucion a tus espacios, esos articulos que amas pero no entran en tu hogar ahora podes dejarlos bajo nuestro cuidado en nuestras diferentes opciones de guardado.
                </p>
                {/* Contenedor principal del Bento Box (Grid de 3 columnas, 2 filas) */}
                <div className="mt-10 grid gap-4 sm:mt-16 lg:grid-cols-3 lg:grid-rows-2">
                    
                    {/* Tarjeta Columna 1: IMAGEN DE BAULERAS (Caja Grande, Columna 1, Filas 1-2) */}
                    <div className="relative lg:row-span-2">
                        {/* Borde exterior suave naranja ELIMINADO */}
                        <div className="absolute inset-px rounded-lg bg-white lg:rounded-l-4xl" />
                        
                        <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] lg:rounded-l-[calc(2rem+1px)]">
                            <div className="px-8 pt-8 pb-3 sm:px-10 sm:pt-10 sm:pb-0">
                                <p className="text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">
                                    {services[0].name}
                                </p>
                            </div>
                            {/* Visual Bauleras: Contenedor para 2 imágenes apiladas */}
                            <div className="relative w-full grow flex flex-col p-4 space-y-4">
                                <img
                                    alt={`${services[0].imageAlt} - Vista 1`}
                                    src={services[0].imageSrc[0]}
                                    className="w-full h-1/2 object-cover rounded-lg shadow-md transition duration-300 hover:shadow-xl hover:scale-[1.02] cursor-pointer"
                                />
                                <img
                                    alt={`${services[0].imageAlt} - Vista 2`}
                                    src={services[0].imageSrc[1]}
                                    className="w-full h-1/2 object-cover rounded-lg shadow-md transition duration-300 hover:shadow-xl hover:scale-[1.02] cursor-pointer"
                                />
                            </div>
                        </div>
                        <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm outline outline-black/5 lg:rounded-l-4xl" />
                    </div>

                    {/* Columna 2: DESCRIPCIONES (Cajas Medianas) */}
                    
                    {/* Tarjeta 2.1: DESCRIPCIÓN DE BAULERAS (Columna 2, Fila 1) */}
                    <div className="relative max-lg:row-start-1">
                        {/* Fondo de color claro para la descripción (orange-50) */}
                        <div className="absolute inset-px rounded-lg bg-orange-50 max-lg:rounded-t-4xl" /> 
                        
                        <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-t-[calc(2rem+1px)] bg-orange-50 p-8 sm:p-10 z-10 border-l-4 border-orange-400">
                            {/* PUNTERO: Apunta a la izquierda (Columna 1: Bauleras) */}
                            <Pointer direction="left" /> 
                            
                            <p className="mt-2 text-xl font-bold tracking-tight text-orange-700 max-lg:text-center">
                                {services[0].descriptionTitle}
                            </p>
                            <p className="mt-2 max-w-lg text-base/6 text-gray-700">
                                {services[0].descriptionText}
                            </p>
                            <ul className="mt-4 space-y-2 text-sm text-gray-800 list-disc pl-5">
                                {services[0].details.map((detail, index) => (
                                    <li key={index}>{detail}</li>
                                ))}
                            </ul>
                        </div>
                        <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm outline outline-black/5 max-lg:rounded-t-4xl" />
                    </div>

                    {/* Tarjeta 2.2: DESCRIPCIÓN DE GUARDAMUEBLES (Columna 2, Fila 2) */}
                    <div className="relative max-lg:row-start-3 lg:col-start-2 lg:row-start-2">
                         {/* Fondo de color claro para la descripción (orange-50) */}
                        <div className="absolute inset-px rounded-lg bg-orange-50" />
                        
                        <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] bg-orange-50 p-8 sm:p-10 z-10 border-r-4 border-orange-400">
                             {/* PUNTERO: Apunta a la derecha (Columna 3: Guardamuebles) */}
                             <Pointer direction="right" /> 

                            <p className="mt-2 text-xl font-bold tracking-tight text-orange-700 max-lg:text-center">
                                {services[1].descriptionTitle}
                            </p>
                            <p className="mt-2 max-w-lg text-base/6 text-gray-700">
                                {services[1].descriptionText}
                            </p>
                             <ul className="mt-4 space-y-2 text-sm text-gray-800 list-disc pl-5">
                                {services[1].details.map((detail, index) => (
                                    <li key={index}>{detail}</li>
                                ))}
                            </ul>
                        </div>
                        <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm outline outline-black/5" />
                    </div>
                
                    {/* Tarjeta Columna 3: IMAGEN DE GUARDAMUEBLES (Caja Grande, Columna 3, Filas 1-2) */}
                    <div className="relative lg:row-span-2">
                        {/* Borde exterior suave naranja ELIMINADO */}
                        <div className="absolute inset-px rounded-lg bg-white max-lg:rounded-b-4xl lg:rounded-r-4xl" />
                        
                        <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-b-[calc(2rem+1px)] lg:rounded-r-[calc(2rem+1px)]">
                            <div className="px-8 pt-8 pb-3 sm:px-10 sm:pt-10 sm:pb-0">
                                <p className="text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">
                                    {services[1].name}
                                </p>
                            </div>
                            {/* Visual Guardamuebles: Contenedor para 2 imágenes apiladas */}
                            <div className="relative w-full grow flex flex-col p-4 space-y-4">
                                <img
                                    alt={`${services[1].imageAlt} - Vista 1`}
                                    src={services[1].imageSrc[0]}
                                    className="w-full h-1/2 object-cover rounded-lg shadow-md transition duration-300 hover:shadow-xl hover:scale-[1.02] cursor-pointer"
                                />
                                <img
                                    alt={`${services[1].imageAlt} - Vista 2`}
                                    src={services[1].imageSrc[1]}
                                    className="w-full h-1/2 object-cover rounded-lg shadow-md transition duration-300 hover:shadow-xl hover:scale-[1.02] cursor-pointer"
                                />
                            </div>
                        </div>
                        <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm outline outline-black/5 max-lg:rounded-b-4xl lg:rounded-r-4xl" />
                    </div>

                </div>
            </div>
        </div>
    )
}
