import React from 'react';

// SVG de Tilde (Check Mark) en línea
const CheckMarkSvg = (props) => (
    <svg viewBox="0 0 20 20" fill="currentColor" {...props}>
        <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.052-.143z" clipRule="evenodd" />
    </svg>
);

// Datos para la sección de Mudanzas Locales (3 servicios)
const localServices = [
    {
        name: 'Mudanza Estándar',
        tagline: 'Solución económica y eficiente.',
        description:
            'Ideal para quienes desean una mudanza sencilla. Nos encargamos del transporte, la carga y la descarga de tus muebles y cajas ya empacadas. Máxima seguridad garantizada.',
        whatsappMessage: 'Hola, quiero cotizar una mudanza local estándar.',
        features: [
            { name: 'Camión de tamaño optimizado' },
            { name: 'Carga y descarga con personal especializado' },
            { name: 'Garantía y embalaje del mobiliario' },
        ],
        imageUrl: 'https://raw.githubusercontent.com/lourd1998/lamudadora/refs/heads/main/public/mudanza.jpg.JPG',
        imageSide: 'left',
    },
    {
        name: 'Mudanza Estándar+',
        tagline: 'Incluye embalaje profesional para objetos frágiles.',
        description:
            'Una mejora del servicio Estándar. Adicionalmente, nuestro equipo se encarga de embalar cuidadosamente todos tus objetos frágiles (vajilla, arte, cristalería) utilizando materiales de alta calidad.',
        whatsappMessage: 'Hola, quiero cotizar una mudanza local estándar +.',
        features: [
            { name: 'Todos los beneficios del servicio Estándar' },
            { name: 'Embalaje de artículos frágiles, ropa, libros y +' },
            { name: 'Garantía en todo lo embalado' },
        ],
        imageUrl: 'https://raw.githubusercontent.com/lourd1998/lamudadora/refs/heads/main/public/embalaje.jpg.jpg', 
        imageSide: 'left',
    },
    {
        name: 'Mudanza Premium',
        tagline: 'Servicio "Llave en Mano" sin preocupaciones.',
        description:
            'La experiencia de mudanza más completa. Nos encargamos absolutamente de todo: embalaje total, transporte seguro, y el desembalaje y acomodo inicial en tu nuevo hogar.',
        whatsappMessage: 'Hola, quiero cotizar una mudanza premium.',
        features: [
            { name: 'Embalaje y Desembalaje completo' },
            { name: 'Desmontaje y montaje de muebles en pared' },
            { name: 'Acomodo inicial de pertenencias' },
            { name: 'Garantía en todo el servicio' },
        ],
        imageUrl: 'https://raw.githubusercontent.com/lourd1998/lamudadora/refs/heads/main/public/colgado.jpg.JPG',
        imageSide: 'left',
    },
];

export default function ServiceMl() {
  const phoneNumber = "3814161901"; // Reemplaza con el número real de la empresa

  return (
    <div id="ServiceMl" className="relative overflow-hidden bg-white py-24 sm:py-32">
      {/* Destello naranja de fondo */}
      <div 
        aria-hidden="true" 
        className="absolute inset-x-0 top-0 -z-10 transform-gpu overflow-hidden opacity-30 blur-3xl"
      >
        <div
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
          className="relative left-1/2 aspect-[1155/678] w-[72.125rem] -translate-x-1/2 bg-gradient-to-tr from-orange-200 to-orange-400"
        />
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Encabezado Centrado */}
        <div className="mx-auto max-w-2xl lg:text-center text-center"> 
          <p className="mt-2 text-5xl font-semibold tracking-tight text-balance text-gray-900 sm:text-6xl">
            Mudanzas Locales
          </p>
          <h2 className="text-base font-semibold leading-7 text-orange-600">Soluciones adaptadas para tu ciudad</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Compara nuestros tres niveles de servicio y encuentra el plan de mudanza local que necesitas.
          </p>
        </div>

        {/* Bucle para mostrar los 3 servicios */}
        <div className="mt-16 space-y-20 lg:mt-20">
          {localServices.map((service, index) => (
            <div
              key={service.name}
              className={`mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-center`}
            >
              
              {/* Columna de Texto/Características */}
              <div 
                className={`lg:pt-4 ${service.imageSide === 'right' ? 'lg:order-1' : 'lg:order-none'}`}
              >
                <div className="lg:max-w-lg">
                  <h3 className={`text-base font-semibold leading-7 ${service.name === 'Mudanza Premium' ? 'text-orange-700' : 'text-orange-600'}`}>{service.tagline}</h3>
                  <p className="mt-2 text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">
                    {service.name}
                  </p>
                  <p className="mt-6 text-lg leading-8 text-gray-600">
                    {service.description}
                  </p>
                  
                  {/* Lista de Características */}
                  <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                    {service.features.map((feature) => (
                      <div key={feature.name} className="relative pl-9">
                        <dt className="inline font-semibold text-gray-900">
                          <CheckMarkSvg 
                            aria-hidden="true" 
                            className={`absolute top-1 left-1 h-5 w-5 ${service.name === 'Mudanza Premium' ? 'text-orange-700' : 'text-orange-600'}`}
                          />
                          {feature.name}
                        </dt>
                      </div>
                    ))}
                  </dl>

                  {/* Botón CTA - WhatsApp con mensaje predeterminado */}
                  <div className="mt-10">
                    <a
                      href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(service.whatsappMessage)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex rounded-lg bg-orange-600 px-4 py-2 text-base font-semibold text-white shadow-md hover:bg-orange-500 transition duration-150"
                    >
                      Cotizar este servicio
                    </a>
                  </div>
                </div>
              </div>

              {/* Columna de Imagen */}
              <div className={service.imageSide === 'right' ? 'lg:order-none' : 'lg:order-1'}>
                <img
                  src={service.imageUrl}
                  alt={`Imagen de ${service.name}`}
                  width={2432}
                  height={1442}
                  className="w-full max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0 object-cover"
                  onError={(e) => {
                    e.target.onerror = null; 
                    e.target.src = "https://placehold.co/1024x600/CCCCCC/333333?text=Imagen+Mudanza+Local";
                  }}
                />
              </div>

            </div>
          ))}
        </div>
      </div>
    </div>
  )
}