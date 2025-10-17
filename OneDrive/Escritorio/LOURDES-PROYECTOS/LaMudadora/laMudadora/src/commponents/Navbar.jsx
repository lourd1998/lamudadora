
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
} from '@heroicons/react/24/outline'
import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/react/20/solid'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

// 📌 RUTA CORREGIDA CON LA CARPETA 'src'
//
// Esta URL asume que renombraste tu archivo a 'logo.png' y que se encuentra en 'src/assets/logo.png'
const COMPANY_LOGO_URL = 'https://raw.githubusercontent.com/lourd1998/lamudadora/refs/heads/main/OneDrive/Escritorio/LOURDES-PROYECTOS/LaMudadora/laMudadora/src/assets/logo.png'; // <-- ¡URL con /src/ incluida!

const products = [
  { name: 'Analytics', description: 'Get a better understanding of your traffic', href: '#', icon: ChartPieIcon },
  { name: 'Engagement', description: 'Speak directly to your customers', href: '#', icon: CursorArrowRaysIcon },
  { name: 'Security', description: 'Your customers’ data will be safe and secure', href: '#', icon: FingerPrintIcon },
  { name: 'Integrations', description: 'Connect with third-party tools', href: '#', icon: SquaresPlusIcon },
  { name: 'Automations', description: 'Build strategic funnels that will convert', href: '#', icon: ArrowPathIcon },
]
const callsToAction = [
  { name: 'Watch demo', href: '#', icon: PlayCircleIcon },
  { name: 'Contact sales', href: '#', icon: PhoneIcon },
]

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="bg-white">
      <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
        {/* Logo and Company Name (Desktop) */}
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5 flex items-center space-x-3"> {/* Aumento el espacio entre logo y texto */}
            <span className="sr-only">Your Company</span>
            {/* Logo */}
            <img
              alt="Logo de La Mudadora"
              src={COMPANY_LOGO_URL}
              className="h-16 w-auto" // CAMBIO AQUÍ: de h-14 a h-16 (más grande)
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
                  {products.map((item) => (
                    <div
                      key={item.name}
                      className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                    >
                      <div className="flex w-11 h-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                        <item.icon aria-hidden="true" className="w-6 h-6 text-gray-600 group-hover:text-indigo-600" />
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
                      <item.icon aria-hidden="true" className="w-5 h-5 flex-none text-gray-400" />
                      {item.name}
                    </a>
                  ))}
                </div>
              </PopoverPanel>
            </Transition>
          </Popover>

          <a href="#" className="text-sm leading-6 font-semibold text-gray-900">
            Nosotros
          </a>
          <a href="#" className="text-sm leading-6 font-semibold text-gray-900">
            Clientes
          </a>
          <a href="#" className="text-sm leading-6 font-semibold text-gray-900">
            Contacto Empresas
          </a>
        </PopoverGroup>

        {/* Botón CTA (Call to Action) en Desktop */}
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <a 
            href="#" 
            className="rounded-md bg-orange-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-orange-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500"
          >
            Cotiza tu mudanza {/* CAMBIO: Texto y estilo de botón */}
          </a>
        </div>
      </nav>

      {/* Mobile menu dialog */}
      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
        <div className="fixed inset-0 z-50 bg-black/30" />
        <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white p-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            {/* Logo and Company Name (Mobile) */}
            <a href="#" className="-m-1.5 p-1.5 flex items-center space-x-3">
              <span className="sr-only">Your Company</span>
              <img
                alt="Logo de La Mudadora"
                src={COMPANY_LOGO_URL}
                className="h-16 w-auto" // CAMBIO AQUÍ: de h-14 a h-16 (más grande)
              />
              <span className="text-3xl font-extrabold uppercase tracking-widest text-gray-900"> {/* CAMBIO AQUÍ: text-3xl y tracking-widest */}
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
                <Disclosure as="div" className="-mx-3">
                  {({ open }) => (
                    <>
                      <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base leading-7 font-semibold text-gray-900 hover:bg-gray-50">
                        Product
                        <ChevronDownIcon
                          aria-hidden="true"
                          className={classNames(open ? 'rotate-180' : '', 'h-5 w-5 flex-none')}
                        />
                      </DisclosureButton>
                      <DisclosurePanel className="mt-2 space-y-2">
                        {[...products, ...callsToAction].map((item) => (
                          <DisclosureButton
                            key={item.name}
                            as="a"
                            href={item.href}
                            className="block rounded-lg py-2 pl-6 pr-3 text-sm leading-6 font-semibold text-gray-900 hover:bg-gray-50"
                          >
                            {item.name}
                          </DisclosureButton>
                        ))}
                      </DisclosurePanel>
                    </>
                  )}
                </Disclosure>

                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base leading-7 font-semibold text-gray-900 hover:bg-gray-50"
                >
                  Features
                </a>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base leading-7 font-semibold text-gray-900 hover:bg-gray-50"
                >
                  Marketplace
                </a>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base leading-7 font-semibold text-gray-900 hover:bg-gray-50"
                >
                  Company
                </a>
              </div>

              <div className="py-6">
                {/* Botón CTA (Call to Action) en Mobile */}
                <a 
                  href="#" 
                  className="rounded-md bg-orange-500 px-3.5 py-2.5 text-base font-semibold text-white shadow-sm hover:bg-orange-400 block text-center"
                >
                  Cotiza tu mudanza
                </a>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  )
}