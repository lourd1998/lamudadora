'use client'
import { Link } from 'react-router-dom'
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
  Bars3Icon,
  XMarkIcon,
  TruckIcon,
  BuildingOfficeIcon,
  HomeIcon,
  ArchiveBoxIcon,
  WrenchScrewdriverIcon,
} from '@heroicons/react/24/outline'
import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/react/20/solid'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const COMPANY_LOGO_URL =
  'https://raw.githubusercontent.com/lourd1998/lamudadora/refs/heads/main/src/assets/logo.png'

const services = [
  {
    name: 'Mudanzas Nacionales',
    description: 'Movilizamos tu hogar o empresa a cualquier punto del país.',
    id: 'ServiceSection',
    icon: TruckIcon,
  },
  {
    name: 'Mudanzas Locales',
    description: 'Mudanzas rápidas dentro de tu ciudad o provincia.',
    id: 'ServiceMl',
    icon: HomeIcon,
  },
  {
    name: 'Mudanzas de Empresas',
    description: 'Traslado de oficinas y equipamiento corporativo.',
    id: 'ServiceCompanies',
    icon: BuildingOfficeIcon,
  },
  {
    name: 'Servicios de Almacenamiento',
    description: 'Guardamuebles seguro por corto o largo plazo.',
    id: 'ServiceGuardado',
    icon: ArchiveBoxIcon,
  },
  {
    name: 'Servicios Especiales',
    description: 'Objetos delicados o de gran tamaño.',
    id: 'SpecialService',
    icon: WrenchScrewdriverIcon,
  },
]

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const scrollToSection = (id) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <header className="bg-white shadow-md">
      <nav className="relative mx-auto flex max-w-7xl items-center p-6 lg:px-8">
        {/* Logo */}
        <div className="flex lg:flex-1">
        <Link to="/" className="-m-1.5 p-1.5">
        <img
        src={COMPANY_LOGO_URL}
        alt="Logo"
        className="h-10 w-auto cursor-pointer"
        />
        </Link>
        </div>

        {/* Mobile button */}
        <div className="flex lg:hidden">
          <button
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 rounded-md p-2.5 text-gray-700"
          >
            <Bars3Icon className="h-6 w-6" />
          </button>
        </div>

        {/* Desktop menu */}
        <PopoverGroup className="hidden lg:flex lg:gap-x-12">
          <Popover className="relative">
            <PopoverButton className="flex items-center gap-x-1 text-sm font-semibold text-gray-900">
              Servicios
              <ChevronDownIcon className="h-5 w-5 text-gray-400" />
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
              <PopoverPanel className="absolute left-1/2 z-10 mt-3 w-screen max-w-md -translate-x-1/2 rounded-3xl bg-white shadow-lg ring-1 ring-black/5">
                <div className="p-4">
                  {services.map((item) => (
                    <button
                      key={item.name}
                      onClick={() => scrollToSection(item.id)}
                      className="group flex w-full items-center gap-x-6 rounded-lg p-4 text-left hover:bg-gray-50"
                    >
                      <item.icon className="h-6 w-6 text-orange-600" />
                      <div>
                        <p className="font-semibold text-gray-900">{item.name}</p>
                        <p className="text-gray-600 text-sm">{item.description}</p>
                      </div>
                    </button>
                  ))}
                </div>
              </PopoverPanel>
            </Transition>
          </Popover>

          <button
            onClick={() => scrollToSection('Testimonials')}
            className="text-sm font-semibold text-gray-900"
          >
            Testimonios
          </button>

          <button
            onClick={() => scrollToSection('AboutUs')}
            className="text-sm font-semibold text-gray-900"
          >
            Nosotros
          </button>

          <button
            onClick={() => scrollToSection('contactanos')}
            className="text-sm font-semibold text-gray-900"
          >
            Contacto
          </button>
        </PopoverGroup>
      </nav>

      {/* Mobile menu */}
      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
        <div className="fixed inset-0 bg-black/30" />
        <DialogPanel className="fixed right-0 top-0 h-full w-full bg-white p-6 sm:max-w-sm">
          <div className="flex items-center justify-between">
            <img src={COMPANY_LOGO_URL} className="h-10" />
            <button onClick={() => setMobileMenuOpen(false)}>
              <XMarkIcon className="h-6 w-6" />
            </button>
          </div>

          <div className="mt-6 space-y-4">
            {services.map((item) => (
              <button
                key={item.name}
                onClick={() => {
                  scrollToSection(item.id)
                  setMobileMenuOpen(false)
                }}
                className="block w-full text-left font-semibold text-gray-900"
              >
                {item.name}
              </button>
            ))}
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  )
}

