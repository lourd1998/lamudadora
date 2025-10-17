import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// Componente para la Sección de Testimonios
export default function Testimonials() {
    // Datos de ejemplo para los testimonios
    const testimonials = [
        {
            quote: "Mi baulera es perfecta para mi stock de negocio. El acceso 24/7 y la seguridad me dan una tranquilidad inigualable para manejar mi inventario.",
            name: "Ana Gutiérrez",
            role: "Emprendedora de E-commerce",
            image: "https://placehold.co/100x100/FF7043/ffffff?text=AG"
        },
        {
            quote: "El servicio de traslado de obras de arte fue impecable. Cuidado extremo, manejo profesional y un seguro que me dio total confianza. Son los únicos en los que confío.",
            name: "Ricardo Molina",
            role: "Coleccionista Privado de Arte",
            image: "https://placehold.co/100x100/F57C00/ffffff?text=RM"
        },
        {
            quote: "Guardamos todos nuestros muebles por tres meses durante la reforma de nuestra casa. Todo volvió en perfecto estado. ¡El trato y el servicio son 100% recomendados!",
            name: "Sofía Pérez",
            role: "Familia en Mudanza",
            image: "https://placehold.co/100x100/FB8C00/ffffff?text=SP"
        },
    ];

    const [activeIndex, setActiveIndex] = useState(0);
    const totalSlides = testimonials.length;
    const slideInterval = 6000; // 6 segundos para el auto-slide

    // Lógica para el auto-deslizamiento
    useEffect(() => {
        const timer = setInterval(() => {
            setActiveIndex((current) => (current + 1) % totalSlides);
        }, slideInterval);

        // Limpieza al desmontar el componente
        return () => clearInterval(timer);
    }, [totalSlides]);

    // Manejadores para la navegación manual
    const goToPrev = () => {
        setActiveIndex((current) => (current - 1 + totalSlides) % totalSlides);
    };

    const goToNext = () => {
        setActiveIndex((current) => (current + 1) % totalSlides);
    };

    const goToSlide = (index) => {
        setActiveIndex(index);
    };

    // Usaremos la URL fiable para los archivos subidos (se mantiene)
    const backgroundImageUrl = "https://raw.githubusercontent.com/lourd1998/lamudadora/refs/heads/main/OneDrive/Escritorio/LOURDES-PROYECTOS/LaMudadora/laMudadora/public/Dise%C3%B1o%20sin%20t%C3%ADtulo%20(1).png";

    return (
        // Sección principal con fondo gris claro para que la tarjeta destaque
        <section className="bg-gray-50 py-16 sm:py-24 overflow-hidden"> 
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                
                {/* INICIO DE LA TARJETA PRINCIPAL CON LA IMAGEN DE FONDO */}
                <div 
                    // CAMBIO 1: Eliminamos min-h-[500px]. La altura la dará el padding del contenido interno.
                    className="relative w-full rounded-3xl shadow-2xl overflow-hidden bg-orange-700" // Añadimos color de fondo
                    style={{
                        backgroundImage: `url(${backgroundImageUrl})`, 
                        // CAMBIO CLAVE: Cambiamos 'cover' a 'contain' para ver la imagen completa
                        backgroundSize: 'contain', 
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat', // Evitamos que se repita
                        backgroundAttachment: 'scroll',
                        opacity: '1', 
                    }}
                >
                    {/* Capa semi-oscura para asegurar el contraste del texto blanco sobre la imagen */}
                    {/* Hacemos la capa más oscura y sin blur para integrar el contenido. */}
                    <div className="absolute inset-0 bg-gray-900/50" aria-hidden="true"></div>

                    {/* Contenido del Carrusel encima de la Imagen */}
                    <div 
                        // CAMBIO 2: Aumentamos el padding vertical (py-24) para dar más cuerpo a la tarjeta.
                        // Usamos h-full para que ocupe todo el espacio disponible dentro del div de la imagen.
                        className="relative mx-auto max-w-2xl h-full py-24 flex flex-col justify-center items-center px-6 lg:px-8 z-10"
                    >
                        
                        {/* Encabezado */}
                        <h2 className="text-center text-base/7 font-semibold text-white/90">La Voz de Nuestros Clientes</h2>
                        <p className="mx-auto mt-2 max-w-2xl text-center text-4xl font-semibold tracking-tight text-balance text-white sm:text-5xl drop-shadow-lg">
                            Confianza Comprobada
                        </p>

                        {/* Carrusel de Testimonios - Ahora solo un contenedor de texto simple */}
                        <div className="mt-8 relative w-full max-w-3xl mx-auto flex-grow flex items-center justify-center">
                            
                            {/* Contenedor del Testimonio Activo - Diseño minimalista para INTEGRARSE */}
                            <div className="relative text-center w-full p-4 sm:p-6">
                                
                                {/* Texto del Testimonio */}
                                <p className="mt-4 text-xl sm:text-3xl font-light text-white italic transition-opacity duration-700 ease-in-out drop-shadow-md">
                                    “{testimonials[activeIndex].quote}”
                                </p>
                                
                                {/* Autor */}
                                <div className="mt-8 flex flex-col items-center">
                                    {/* La imagen de perfil es la única parte que mantiene el estilo circular */}
                                    <img
                                        className="h-16 w-16 rounded-full object-cover border-4 border-white shadow-xl"
                                        src={testimonials[activeIndex].image}
                                        alt={`Foto de ${testimonials[activeIndex].name}`}
                                    />
                                    <div className="mt-4">
                                        <p className="text-lg font-semibold text-white drop-shadow">{testimonials[activeIndex].name}</p>
                                        <p className="text-sm text-orange-400 drop-shadow">{testimonials[activeIndex].role}</p>
                                    </div>
                                </div>
                            </div>

                            {/* Controles de Navegación Manual (Flechas) */}
                            {/* Los controles se mantienen flotantes a los lados */}
                            <div className="absolute inset-y-0 w-full flex items-center justify-between pointer-events-none">
                                <button
                                    onClick={goToPrev}
                                    className="p-3 rounded-full bg-white/20 hover:bg-white/30 transition duration-200 shadow-xl pointer-events-auto -ml-4"
                                    aria-label="Testimonio anterior"
                                >
                                    <ChevronLeft className="w-6 h-6 text-white" />
                                </button>
                                <button
                                    onClick={goToNext}
                                    className="p-3 rounded-full bg-white/20 hover:bg-white/30 transition duration-200 shadow-xl pointer-events-auto -mr-4"
                                    aria-label="Testimonio siguiente"
                                >
                                    <ChevronRight className="w-6 h-6 text-white" />
                                </button>
                            </div>
                        </div>

                        {/* Puntos de Navegación (Dots) */}
                        <div className="mt-4 flex justify-center space-x-3 pb-8">
                            {testimonials.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => goToSlide(index)}
                                    className={`h-2 rounded-full transition-all duration-300 ${
                                        index === activeIndex ? 'w-8 bg-orange-500' : 'w-2 bg-white/50 hover:bg-orange-300'
                                    }`}
                                    aria-label={`Ir al testimonio ${index + 1}`}
                                />
                            ))}
                        </div>
                    </div>
                </div>
                {/* FIN DE LA TARJETA PRINCIPAL */}

            </div>
        </section>
    );
}

