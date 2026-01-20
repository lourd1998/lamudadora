

'use client'

import { useState, Fragment } from 'react'
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
  Transition,
} from '@headlessui/react'
import {
  ArrowPathIcon,
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
  TruckIcon, // Nuevo ícono para Mudanzas
  BuildingOfficeIcon, // Nuevo ícono para Empresas
  HomeIcon, // Nuevo ícono para Locales
  ArchiveBoxIcon, // Nuevo ícono para Almacenamiento
  WrenchScrewdriverIcon, // Nuevo ícono para Especiales
} from '@heroicons/react/24/outline'
import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/react/20/solid'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

// 📌 URL del Logo
const COMPANY_LOGO_URL = 'https://raw.githubusercontent.com/lourd1998/lamudadora/refs/heads/main/src/assets/logo.png'; 

// 🎯 Definición de los servicios de La Mudadora
const services = [
  { 
    name: 'Mudanzas Nacionales', 
    description: 'Movilizamos tu hogar o empresa a cualquier punto del país.', 
    href: '#ServiceSection', 
    icon: TruckIcon 
  },
  { 
    name: 'Mudanzas Locales', 
    description: 'Mudanzas rápidas dentro de tu ciudad o provincia.', 
    href: '#ServiceMl', 
    icon: HomeIcon 
  },
  { 
    name: 'Mudanzas de Empresas', 
    description: 'Traslado de oficinas, equipamiento e infraestructura corporativa.', 
    href: '#ServiceCompanies', 
    icon: BuildingOfficeIcon 
  },
  { 
    name: 'Servicios de Almacenamiento', 
    description: 'Soluciones seguras de guardamuebles por corto o largo plazo.', 
    href: '#ServiceGuardado', 
    icon: ArchiveBoxIcon 
  },
  { 
    name: 'Servicios Especiales', 
    description: 'Movilización de objetos delicados o de gran tamaño (pianos, obras de arte).', 
    href: '#SpecialService', 
    icon: WrenchScrewdriverIcon 
  },
]

const callsToAction = [
  { name: 'Cotizar Ahora', href: '#cotizar', icon: PlayCircleIcon },
  { name: 'Llamar al Asesor', href: '#contacto', icon: PhoneIcon },
]

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-md"> {/* Fondo blanco y sombra en el header */}
      {/* Muevo las clases de ancho máximo y centrado a un div interno */}
      <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
        
        {/* Logo (Desktop) */}
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5 flex items-center space-x-3">
            <span className="sr-only">Your Company</span>
            <img
              alt="Company Logo"
              // Usa la URL de tu empresa
              src={COMPANY_LOGO_URL}
              // El logo debería ser visible ahora
              className="h-10 w-auto"
            />
          </a>
        </div>

        {/* Mobile menu button */}
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="w-6 h-6" />
          </button>
        </div>

        {/* Desktop menu */}
        <PopoverGroup className="hidden lg:flex lg:gap-x-12">
          {/* Dropdown para "Servicios" */}
          <Popover className="relative">
            <PopoverButton className="flex items-center gap-x-1 text-sm leading-6 font-semibold text-gray-900">
              Servicios
              <ChevronDownIcon aria-hidden="true" className="w-5 h-5 flex-none text-gray-400" />
            </PopoverButton>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <PopoverPanel className="absolute left-1/2 z-10 mt-3 w-screen max-w-md -translate-x-1/2 overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-black/5">
                <div className="p-4">
                  {services.map((item) => (
                    <div
                      key={item.name} 
                      className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                    >
                      <div className="flex w-11 h-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                        {/* Usamos el ícono definido para cada servicio */}
                        <item.icon aria-hidden="true" className="w-6 h-6 text-orange-600 group-hover:text-orange-500" /> 
                      </div>
                      <div className="flex-auto">
                        <a href={item.href} className="block font-semibold text-gray-900">
                          {item.name}
                          <span className="absolute inset-0" />
                        </a>
                        <p className="mt-1 text-gray-600">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
                  {callsToAction.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="flex items-center justify-center gap-x-2.5 p-3 text-sm leading-6 font-semibold text-gray-900 hover:bg-gray-100"
                    >
                      <item.icon aria-hidden="true" className="w-5 h-5 flex-none text-orange-500" /> {/* Íconos de CTA en naranja */}
                      {item.name}
                    </a>
                  ))}
                </div>
              </PopoverPanel>
            </Transition>
          </Popover>
          {/* Mantenemos los otros enlaces */}
          <a href="#testimonials" className="text-sm leading-6 font-semibold text-gray-900">
            Testimonios
          </a>
          <a href="#AboutUs" className="text-sm leading-6 font-semibold text-gray-900">
            Nosotros
          </a>
          <a href="#contactanos" className="text-sm leading-6 font-semibold text-gray-900">
            Contacto
          </a>
        </PopoverGroup>

        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <a href="https://form.bymovers.com/es/f/particulares_sencillo_v2?p=eyJmIjoicGFydGljdWxhcmVzX3NlbmNpbGxvX3YyIiwiZCI6ImxhbXVkYWRvcmEiLCIiOm51bGx9" className="text-sm leading-6 font-semibold text-gray-900">
            Cotizar <span aria-hidden="true">&rarr;</span>
          </a>
        </div>

      </nav>

      {/* Mobile menu dialog */}
      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
        <div className="fixed inset-0 z-50 bg-black/30" />
        <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white p-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            {/* Logo (Mobile) */}
            <a href="#" className="-m-1.5 p-1.5 flex items-center space-x-3">
              <span className="sr-only">Your Company</span>
              <img
                alt="Company Logo"
                // Usa la URL de tu empresa
                src={COMPANY_LOGO_URL}
                className="h-10 w-auto"
              />
              <span className="text-2xl font-extrabold uppercase tracking-widest text-gray-900"> 
                La Mudadora
              </span>
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="w-6 h-6" />
            </button>
          </div>

          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {/* Dropdown para "Servicios" en móvil */}
                <Disclosure as="div" className="-mx-3">
                  {({ open }) => (
                    <>
                      <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base leading-7 font-semibold text-gray-900 hover:bg-gray-50">
                        Servicios
                        <ChevronDownIcon
                          aria-hidden="true"
                          className={classNames(open ? 'rotate-180' : '', 'h-5 w-5 flex-none')}
                        />
                      </DisclosureButton>
                      <DisclosurePanel className="mt-2 space-y-2">
                        {/* ⚠️ Corrección: Se elimina el comentario que causaba el error sintáctico en el .map de móvil */}
                        {[...services, ...callsToAction].map((item) => (
                          <a
                            key={item.name}
                            href={item.href}
                            className="block rounded-lg py-2 pl-6 pr-3 text-sm leading-6 font-semibold text-gray-900 hover:bg-gray-50"
                          >
                            {item.name}
                          </a>
                        ))}
                      </DisclosurePanel>
                    </>
                  )}
                </Disclosure>
                {/* Mantenemos los otros enlaces en móvil */}
                <a
                  href="#testimonials"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base leading-7 font-semibold text-gray-900 hover:bg-gray-50"
                >
                  Testimonios
                </a>
                <a
                  href="#AboutUs"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base leading-7 font-semibold text-gray-900 hover:bg-gray-50"
                >
                  Nosotros
                </a>
                <a
                  href="#contactanos"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base leading-7 font-semibold text-gray-900 hover:bg-gray-50"
                >
                  Contacto
                </a>
              </div>

              <div className="py-6">
                <a
                  href="https://form.bymovers.com/es/f/particulares_sencillo_v2?p=eyJmIjoicGFydGljdWxhcmVzX3NlbmNpbGxvX3YyIiwiZCI6ImxhbXVkYWRvcmEiLCIiOm51bGx9"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base leading-7 font-semibold text-gray-900 hover:bg-gray-50"
                >
                  Cotizar
                </a>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  )
}
