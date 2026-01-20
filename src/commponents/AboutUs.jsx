import React from 'react';
import { Instagram } from 'lucide-react'; // Icono para el botón

// 📌 ¡SOLUCIÓN! Se ha usado la URL de incrustación (embed) correcta de YouTube:
// ID del Short: aoffDssCwRU
const YOUTUBE_EMBED_URL = "https://www.youtube.com/embed/aoffDssCwRU"; 

// URL de tu perfil de Instagram para el botón (se mantiene el enlace del botón)
const INSTAGRAM_PROFILE_URL = "https://www.instagram.com/tu_usuario_de_instagram"; 


export default function AboutUs() {
  return (
    <div id="AboutUs" className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Tarjeta principal con colores adaptados */}
        <div className="relative isolate overflow-hidden bg-orange-600 px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-16 lg:px-24 lg:pt-0">
          
          {/* Fondo de gradiente usando el color de la marca */}
          <svg
            viewBox="0 0 1024 1024"
            aria-hidden="true"
            className="absolute top-1/2 left-1/2 -z-10 size-[64rem] -translate-y-1/2 transform-gpu [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
          >
            <circle r={512} cx={512} cy={512} fill="url(#759c1415-0410-454c-8f7c-9a820de03641)" fillOpacity="0.7" />
            <defs>
              <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
                {/* Parada de color 1: Naranja brillante */}
                <stop stopColor="#fca311" /> 
                {/* Parada de color 2: Naranja más oscuro */}
                <stop offset={1} stopColor="#ffb700" />
              </radialGradient>
            </defs>
          </svg>
          
          {/* Columna de Texto y Botones (Abarca la mitad del ancho en lg) */}
          <div className="mx-auto max-w-md text-center lg:mx-0 lg:w-1/2 lg:flex-auto lg:py-32 lg:text-left">
            <h2 className="text-3xl font-bold tracking-tight text-balance text-white sm:text-4xl">
              Más que una mudanza, es tu próxima etapa.
            </h2>
            <p className="mt-6 text-lg/8 text-pretty text-orange-100">
              Somos expertos en traslados y guardamuebles, dedicados a hacer que la transición de tus bienes sea lo más cómoda y segura posible. La confianza de nuestros clientes es nuestro mayor aval.
            </p>
            
            <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
              <a
                href={INSTAGRAM_PROFILE_URL}
                target="_blank" // Abrir en nueva pestaña
                rel="noopener noreferrer"
                className="rounded-full bg-white px-5 py-3 text-base font-semibold text-gray-900 shadow-lg hover:bg-gray-100 transition duration-150 flex items-center gap-x-2"
              >
                <Instagram className="w-5 h-5" />
                Seguinos para conocer más
              </a>
             
            </div>
          </div>
          
          {/* Columna del Video de YouTube (Abarca la otra mitad del ancho en lg) */}
          {/* 🎯 CAMBIO 1: Aumentamos la altura en pantallas grandes (lg:h-[500px]) */}
          <div className="relative mt-16 h-80 lg:mt-8 flex justify-center items-center z-10 w-full lg:w-1/2 lg:h-[500px]"> 
            
            {/* Contenedor del Iframe con estilos para adaptabilidad */}
            {/* 🎯 CAMBIO 2: Eliminamos el ancho fijo (lg:w-[300px]) y permitimos que el ancho se ajuste a la proporción 9:16 dentro de la nueva altura de 500px */}
            <div className="h-full sm:w-[350px] aspect-[9/16] rounded-lg bg-gray-900 shadow-2xl ring-4 ring-white/20 overflow-hidden">
                <iframe
                    title="Video de YouTube sobre Nosotros"
                    className="w-full h-full"
                    // Fuente actualizada con el formato de incrustación de YouTube
                    src={YOUTUBE_EMBED_URL}
                    width="100%"
                    height="100%"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen={true}
                ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
