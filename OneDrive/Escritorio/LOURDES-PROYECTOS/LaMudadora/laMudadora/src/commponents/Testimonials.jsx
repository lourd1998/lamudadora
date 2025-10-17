import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

// Componente para la Sección de Testimonios
export default function Testimonials() { // Nombre del componente cambiado a Testimonials
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

    // URL de la imagen de fondo, ahora en la carpeta 'assets'
    const backgroundImageUrl = "public\La mudadora banner.png.png";

    // Nota sobre el estilo del fondo:
    // La imagen ya tiene un efecto de color naranja/sepia y una baja iluminación,
    // por lo que ajustaremos la capa oscura para que el texto siga siendo legible.
    
    return (
        <section className="relative py-24 sm:py-32 overflow-hidden">
            
            {/* Imagen de Fondo de La Mudadora */}
            <div 
                className="absolute inset-0 bg-cover bg-center" 
                style={{ 
                    backgroundImage: `url(${backgroundImageUrl})`, 
                    backgroundAttachment: 'fixed', // Efecto parallax
                    opacity: '0.9', // Mantiene la imagen visible, pero la capa oscura superpuesta garantizará el contraste.
                }}
                aria-hidden="true"
            >
            </div>
            
            {/* Capa de Color para oscurecer la imagen y mejorar legibilidad (Black/Orange Overlay) */}
            {/* Usamos un degradado para mantener el toque naranja oscuro en la imagen */}
            <div className="absolute inset-0 bg-gray-950/70" aria-hidden="true"></div>

            <div className="relative mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8 z-10">
                
                {/* Encabezado */}
                <h2 className="text-center text-base/7 font-semibold text-orange-400">La Voz de Nuestros Clientes</h2>
                <p className="mx-auto mt-2 max-w-2xl text-center text-4xl font-semibold tracking-tight text-balance text-white sm:text-5xl">
                    Confianza Comprobada en Servicios de Guardado
                </p>

                {/* Carrusel de Testimonios */}
                <div className="mt-16 relative w-full max-w-4xl mx-auto">
                    
                    {/* Contenedor del Testimonio Activo */}
                    {/* Usamos bg-white/10 para que se vea ligeramente transparente sobre el fondo oscuro */}
                    <div className="bg-white/10 p-8 sm:p-12 rounded-2xl shadow-2xl backdrop-blur-sm border border-orange-400/30">
                        <div className="relative text-center">
                            {/* Icono de Cita */}
                            <Quote className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 text-orange-500 opacity-20" aria-hidden="true" />
                            
                            {/* Texto del Testimonio */}
                            <p className="mt-4 text-2xl sm:text-3xl font-light text-white italic transition-opacity duration-700 ease-in-out">
                                “{testimonials[activeIndex].quote}”
                            </p>
                            
                            {/* Autor */}
                            <div className="mt-10 flex flex-col items-center">
                                <img
                                    className="h-16 w-16 rounded-full object-cover border-4 border-orange-500/50 shadow-md"
                                    src={testimonials[activeIndex].image}
                                    alt={`Foto de ${testimonials[activeIndex].name}`}
                                />
                                <div className="mt-4">
                                    <p className="text-lg font-semibold text-white">{testimonials[activeIndex].name}</p>
                                    <p className="text-sm text-orange-400">{testimonials[activeIndex].role}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Controles de Navegación Manual (Flechas) */}
                    <div className="absolute inset-y-0 w-full flex items-center justify-between pointer-events-none">
                        <button
                            onClick={goToPrev}
                            className="p-3 rounded-full bg-orange-600 hover:bg-orange-700 transition duration-200 shadow-xl pointer-events-auto -ml-4"
                            aria-label="Testimonio anterior"
                        >
                            <ChevronLeft className="w-6 h-6 text-white" />
                        </button>
                        <button
                            onClick={goToNext}
                            className="p-3 rounded-full bg-orange-600 hover:bg-orange-700 transition duration-200 shadow-xl pointer-events-auto -mr-4"
                            aria-label="Testimonio siguiente"
                        >
                            <ChevronRight className="w-6 h-6 text-white" />
                        </button>
                    </div>
                </div>

                {/* Puntos de Navegación (Dots) */}
                <div className="mt-8 flex justify-center space-x-3">
                    {testimonials.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => goToSlide(index)}
                            className={`h-2 rounded-full transition-all duration-300 ${
                                index === activeIndex ? 'w-8 bg-orange-600' : 'w-2 bg-gray-400 hover:bg-orange-300'
                            }`}
                            aria-label={`Ir al testimonio ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}