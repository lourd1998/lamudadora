
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function Testimonials() {
    const testimonials = [
        {
            quote: "Excelente servicio. Fueron muy flexibles con las fechas. Los chicos muy amables y con una muy buena predisposición. Las cosas llegaron intactas. La verdad impecable el servicio!",
            name: "Mercedes Lopez Jerez",
            role: "reseña de google maps",
            image: "https://placehold.co/100x100/FF7043/ffffff?text=ML"
        },
        {
            quote: "En 2022 hicimos la mudanza a la ciudad a Rada Tilly, Chubut y dos años después nos volvimos. Ambas con La Mudadora. Un servicio excelente. Joaquin viajó para hacer la mudanza de vuelta. Impecable.",
            name: "Hugo Edgardo Damina",
            role: "reseña de google maps",
            image: "https://placehold.co/100x100/F57C00/ffffff?text=HD"
        },
        {
            quote: "Llevo dos mudanzas con ellos, y ambas fueron excelentes. 100% dispuestos y cumplidores. Flexibles con las fechas y transparentes con los precios. Realmente, excelente servicio",
            name: "Brian Robertson",
            role: "reseña de google maps",
            image: "https://placehold.co/100x100/FB8C00/ffffff?text=BR"
        },
        {
            quote: "Mi experiencia con la mudadora fue excelente, trato cordial puntuales y sobre todo te cuidan las cosas",
            name: "Yamiles Manzur",
            role: "reseña de google maps",
            image: "https://placehold.co/100x100/FB8C00/ffffff?text=YM"
        },
    ];

    const [activeIndex, setActiveIndex] = useState(0);
    const [isMobile, setIsMobile] = useState(false); // Empezamos en false para evitar errores de SSR

    const totalSlides = testimonials.length;
    const slideInterval = 6000;

    // Control de redimensionamiento
    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 640);
        handleResize(); // Ejecutar al montar
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Auto-slide
    useEffect(() => {
        const timer = setInterval(() => {
            setActiveIndex((current) => (current + 1) % totalSlides);
        }, slideInterval);
        return () => clearInterval(timer);
    }, [totalSlides]);

    const goToPrev = () => setActiveIndex((current) => (current - 1 + totalSlides) % totalSlides);
    const goToNext = () => setActiveIndex((current) => (current + 1) % totalSlides);

    const mobileBackgroundImageUrl = "https://raw.githubusercontent.com/lourd1998/lamudadora/main/public/La%20mudadora%20banner.png.png";
    const desktopBackgroundImageUrl = "https://raw.githubusercontent.com/lourd1998/lamudadora/main/public/bannerhorizontal.png";
    const currentBackgroundImageUrl = isMobile ? mobileBackgroundImageUrl : desktopBackgroundImageUrl;

    // Verificación de seguridad
    if (testimonials.length === 0) return null;

    return (
        <section id='Testimonials' className="bg-gray-100 py-16 sm:py-24">
            <div className="mx-auto max-w-7xl px-4">
                <div 
                    className="relative w-full rounded-3xl shadow-2xl overflow-hidden min-h-[650px] flex items-center justify-center bg-gray-800"
                    style={{
                        backgroundImage: `url('${currentBackgroundImageUrl}')`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                >
                    {/* Overlay más fuerte para asegurar que el texto se lea */}
                    <div className="absolute inset-0 bg-black/60" aria-hidden="true"></div>

                    <div className="relative z-10 w-full max-w-4xl px-6 py-12 text-center text-white">
                        <h2 className="text-orange-500 font-bold uppercase tracking-wider">La Voz de Nuestros Clientes</h2>
                        <h3 className="mt-2 text-3xl sm:text-5xl font-bold">Confianza Comprobada</h3>

                        <div className="mt-10 min-h-[200px] flex flex-col items-center justify-center">
                            {/* Animación simple de opacidad */}
                            <p key={activeIndex} className="text-lg sm:text-2xl italic font-light animate-fadeIn">
                                "{testimonials[activeIndex].quote}"
                            </p>
                            
                            <div className="mt-8 flex flex-col items-center">
                                <img
                                    className="h-20 w-20 rounded-full border-4 border-orange-500 object-cover"
                                    src={testimonials[activeIndex].image}
                                    alt={testimonials[activeIndex].name}
                                />
                                <div className="mt-3">
                                    <p className="text-xl font-bold">{testimonials[activeIndex].name}</p>
                                    <p className="text-orange-400 text-sm uppercase">{testimonials[activeIndex].role}</p>
                                </div>
                            </div>
                        </div>

                        {/* Flechas */}
                        <div className="absolute top-1/2 -translate-y-1/2 left-4 right-4 flex justify-between pointer-events-none">
                            <button onClick={goToPrev} className="pointer-events-auto p-2 bg-white/10 hover:bg-white/20 rounded-full transition">
                                <ChevronLeft size={32} />
                            </button>
                            <button onClick={goToNext} className="pointer-events-auto p-2 bg-white/10 hover:bg-white/20 rounded-full transition">
                                <ChevronRight size={32} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}