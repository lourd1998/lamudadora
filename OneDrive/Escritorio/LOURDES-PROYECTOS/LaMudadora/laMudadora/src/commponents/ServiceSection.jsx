function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

// Componente SVG local para el check (reemplaza CheckIcon de Heroicons)
function CheckSvg({ className }) {
  return (
    <svg 
      className={className} 
      viewBox="0 0 20 20" // La vista 20x20 corresponde a la versión 'solid' de Heroicons
      fill="currentColor" 
      aria-hidden="true"
    >
      <path 
        fillRule="evenodd" 
        d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" 
        clipRule="evenodd" 
      />
    </svg>
  );
}


// Definición de los planes de servicio (3 columnas)
const tiers = [
  {
    name: 'Salidas periodicas (viajes combinado)',
    id: 'tier-basico',
    href: '#',
    priceMonthly: 'Norte del Pais ',
    description: "Ideal para mudanzas pequeñas o grandes con fechas flexibles.",
    features: [
        'Transporte con camión cerrado', 
        'Embalaje de mobiliario', 
        'Personal especializado en carga y descarga', 
        'Desmontaje y montaje de muebles'
    ],
    featured: false,
    colorClasses: {
        text: 'text-orange-600',
        ring: 'ring-gray-900/10',
        buttonBg: 'bg-orange-500 hover:bg-orange-600',
        buttonText: 'text-white',
        linkText: 'text-orange-600',
        linkRing: 'inset-ring-orange-200 hover:inset-ring-orange-300 focus-visible:outline-orange-600',
    }
  },
  {
    name: 'Salidas Exclusivas',
    id: 'tier-pro',
    href: '#',
    priceMonthly: 'A Cualquier Punto Del Pais',
    description: 'Nuestra opción más popular. Elegi tus fechas de craga y descarga, nos aseguramos de cumplirlas. Ideal para mudanzas multidestino o en rutas poco frecuentas del pais',
    features: [
        'Transporte en camion cerrado', 
        'Personal especializado en carga y descarga', 
        'Asesor personal en logistica 24/7', 
        'Desmontaje y montaje de muebles',
        'Seguro incluido',
    ],
    featured: true, // Destacado
    colorClasses: {
        // Colores adaptados para fondo naranja completo
        text: 'text-white', // Texto blanco
        ring: 'ring-orange-800/50', // Anillo sutil en naranja oscuro
        buttonBg: 'bg-orange-800 hover:bg-orange-900', // Botón más oscuro para contraste
        buttonText: 'text-white',
        linkText: 'text-white',
        linkRing: 'focus-visible:outline-white',
    }
  },
  {
    name: 'Salidas Quincenales (viajes combinados)',
    id: 'tier-elite',
    href: '#',
    priceMonthly: 'Buenos Aires',
    description: 'Salidas desde cualquier punto del norte con destino a Bs. As. cada 15 dias.',
    features: [
        'Logística y planeación dedicada', 
        'Personal especializado en carga y descarga', 
        'Trasporte es camion cerrado', 
        'Desmontaje y montaje de muebles',
        'Embalaje de mobiliario'
    ],
    featured: false,
    colorClasses: {
        text: 'text-orange-600',
        ring: 'ring-gray-900/10',
        buttonBg: 'bg-orange-500 hover:bg-orange-600',
        buttonText: 'text-white',
        linkText: 'text-orange-600',
        linkRing: 'inset-ring-orange-200 hover:inset-ring-orange-300 focus-visible:outline-orange-600',
    }
  },
]

function ServiceSection() {
  return (
    <div className="relative isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
      
      {/* Fondo de resplandor (similar al original, adaptado a naranja) */}
      <div aria-hidden="true" className="absolute inset-x-0 top-1/2 -z-10 -translate-y-1/2 transform-gpu overflow-hidden opacity-30 blur-3xl">
        <div
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
          className="mx-auto aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-orange-300 to-orange-500" // Cambiado a degradado naranja
        />
      </div>
      
      <div className="mx-auto max-w-7xl text-center">
        <h2 className="text-base font-semibold leading-7 text-orange-600">Nuestros Servicios</h2>
        <p className="mt-2 text-5xl font-semibold tracking-tight text-balance text-gray-900 sm:text-6xl">
          Mudanzas Larga Distancia
        </p>
      </div>
      <p className="mx-auto mt-6 max-w-3xl text-center text-lg font-medium text-pretty text-gray-600">
        Estas planeando mudarte dentro del pais? Conoce nuestras rutas frecuentas para viajes compatidos o arma tu salida explusiva
      </p>
      
      {/* Contenedor de las 3 tarjetas */}
      <div className="mx-auto mt-16 grid max-w-lg grid-cols-1 items-start gap-y-6 sm:mt-20 lg:max-w-none lg:grid-cols-3">
        {tiers.map((tier, tierIdx) => (
          <div
            key={tier.id}
            className={classNames(
              // Clases condicionales para el plan destacado (central)
              tier.featured
                ? 'relative bg-orange-600 shadow-2xl ring-4 ring-orange-400/70' // Fondo naranja sólido con anillo
                : 'bg-white ring-1 ring-gray-900/10', // Tarjetas laterales estándar
              
              // Ajustes de esquinas para el diseño de 3 columnas
              tierIdx === 0 && 'lg:rounded-r-none',
              tierIdx === 1 && 'lg:rounded-t-3xl lg:rounded-b-3xl lg:rounded-none',
              tierIdx === 2 && 'lg:rounded-l-none',

              'rounded-3xl p-8 sm:p-10 transition duration-300 hover:shadow-xl hover:scale-[1.02] transform'
            )}
          >
            {/* Si es destacado, muestra un badge */}
            {tier.featured && (
              <p className="absolute top-0 -translate-y-1/2 rounded-full bg-orange-800 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-md">
                Más Popular
              </p>
            )}

            <h3
              id={tier.id}
              className={classNames(tier.colorClasses.text, 'text-base font-semibold leading-7')}
            >
              {tier.name}
            </h3>

            <p className="mt-4 flex items-baseline gap-x-2">
              <span
                className={classNames(
                  tier.featured ? 'text-white' : 'text-gray-900', // Blanco para el destacado
                  'text-5xl font-extrabold tracking-tight',
                )}
              >
                {tier.priceMonthly}
              </span>
              <span className={classNames(tier.featured ? 'text-orange-200' : 'text-gray-500', 'text-base')}>
              
              </span>
            </p>

            <p className={classNames(tier.featured ? 'text-orange-200' : 'text-gray-600', 'mt-6 text-base leading-7')}>
              {tier.description}
            </p>

            <ul
              role="list"
              className={classNames(
                tier.featured ? 'text-white' : 'text-gray-600', // Blanco para el destacado
                'mt-8 space-y-3 text-sm leading-6 sm:mt-10',
              )}
            >
              {tier.features.map((feature) => (
                <li key={feature} className="flex gap-x-3">
                  <CheckSvg // Usamos el componente SVG local
                    aria-hidden="true"
                    className={classNames(tier.featured ? 'text-orange-200' : tier.colorClasses.text, 'h-5 w-5 flex-none')} // Naranja claro para check en destacado
                  />
                  {feature}
                </li>
              ))}
            </ul>

            {/* Botón CTA */}
            <a
              href={tier.href}
              aria-describedby={tier.id}
              className={classNames(
                // Botón principal (naranja oscuro para contraste)
                tier.colorClasses.buttonBg,
                tier.colorClasses.buttonText,
                'mt-8 block rounded-md px-3.5 py-2.5 text-center text-sm font-semibold shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 sm:mt-10',
                tier.featured ? 'shadow-lg shadow-orange-900/50' : '' // Sombra más fuerte solo para el destacado
              )}
            >
              {tier.featured ? '¡Coordinar ya!' : 'Consultar Fechas'}
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ServiceSection;