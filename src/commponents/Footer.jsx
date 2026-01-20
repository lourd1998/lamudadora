import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram } from 'lucide-react';

const COMPANY_LOGO_URL = 'https://raw.githubusercontent.com/lourd1998/lamudadora/refs/heads/main/OneDrive/Escritorio/LOURDES-PROYECTOS/LaMudadora/laMudadora/src/assets/logo.png'; 
const businessEmail = "rrhh@lamudadora.com"; 
    const emailSubject = encodeURIComponent("Postulacion");
    const emailBody = encodeURIComponent("Hola, me gustaría formar parte de su empresa, adjunto mi cv");

// Estilo de los enlaces para el footer
const FooterLink = ({ children, href = "#" }) => (
    <a 
        href={href} 
        className="text-gray-300 hover:text-orange-400 transition-colors duration-200 text-sm md:text-base"
    >
        {children}
    </a>
);

// Componente Footer principal
const Footer = () => {
    // Definimos el ID de la aplicación para las reglas de Firebase si fuera necesario, aunque el footer no lo usa directamente.
    const appId = typeof __app_id !== 'undefined' ? __app_id : 'default-app-id';

    return (
        // CAMBIO CLAVE 1: Eliminamos 'fixed bottom-0 z-50' para que el footer aparezca al final de la página.
        // CAMBIO CLAVE 2: Aseguramos que no haya margen externo con 'm-0' o 'mx-0' si fuera necesario, 
        // aunque 'w-full' y el contenedor interno centrado es la práctica estándar.
        // Mantengo 'w-full' para asegurar el 100% de ancho.
        <footer className="w-full bg-gray-800 text-white pt-12 pb-6 shadow-2xl"> 
            
            {/* El contenido sigue centrado y con padding lateral (px-4, etc.) para que no se pegue. */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* GRID PRINCIPAL para desktop/tablet: 4 columnas */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-b border-gray-700 pb-10">
                    
                    {/* Columna 1: Información de la Empresa / Logo */}
                    <div>
                       <img
                           alt="Company Logo"
                          // Usa la URL de tu empresa
                           src={COMPANY_LOGO_URL}
                          // El logo debería ser visible ahora
                          className="h-10 w-auto"
                       />
                        <p className="text-gray-400 text-sm mb-4">
                            Expertos en mudanzas nacionales e internacionales. Tu tranquilidad, nuestra prioridad.
                        </p>
                        <div className="flex space-x-4">
                            <a href="https://www.facebook.com/lamudadora/?locale=es_LA" aria-label="Facebook" className="text-gray-400 hover:text-blue-500 transition-colors">
                                <Facebook size={20} />
                            </a>
                            <a href="https://www.instagram.com/lamudadora/" aria-label="Instagram" className="text-gray-400 hover:text-pink-500 transition-colors">
                                <Instagram size={20} />
                            </a>
                        </div>
                    </div>

                    {/* Columna 2: Servicios (similar a lo que vi en tu navbar) */}
                    <div>
                        <h4 className="text-lg font-semibold mb-5 uppercase tracking-wider">
                            Servicios
                        </h4>
                        <div className="flex flex-col space-y-3">
                            <FooterLink href="#ServiceSection">Mudanzas Nacionales</FooterLink>
                            <FooterLink href="#ServiceML">Mudanzas Locales</FooterLink>
                            <FooterLink href="#ServiceCompanies">Mudanzas de Empresas</FooterLink>
                            <FooterLink href="#ServiceGuardado">Almacenamiento</FooterLink>
                            <FooterLink href="#SpecialService">Servicios Especiales</FooterLink>
                        </div>
                    </div>

                    {/* Columna 3: Enlaces Rápidos / Información */}
                    <div>
                        <h4 className="text-lg font-semibold mb-5 uppercase tracking-wider">
                            Información
                        </h4>
                        <div className="flex flex-col space-y-3">
                            <FooterLink href="#cotizar">Cotizar</FooterLink>
                            <FooterLink href="#AboutUs">Nosotros</FooterLink>
                            <FooterLink href="#privacidad">Política de Privacidad</FooterLink>
                            <Link to="/postulaciones">Trabajá con nosotros</Link>
                        </div>
                    </div>

                    {/* Columna 4: Contacto */}
                    <div>
                        <h4 id='contactanos' className="text-lg font-semibold mb-5 uppercase tracking-wider">
                            Contáctanos
                        </h4>
                        <div className="flex flex-col space-y-4 text-gray-400">
                            <div className="flex items-center">
                                <Phone size={18} className="mr-3 text-orange-500" />
                                <span className="text-sm md:text-base">+54 381 416 1901</span>
                            </div>
                            <div className="flex items-center">
                                <Mail size={18} className="mr-3 text-orange-500" />
                                <span className="text-sm md:text-base">Logistica@lamudadora.com</span>
                            </div>
                            <div className="flex items-start">
                                <MapPin size={18} className="mt-1 mr-3 text-orange-500 flex-shrink-0" />
                                <span className="text-sm md:text-base">
                                    Venezuela 2990, San Miguel de Tucuman, Tucuman
                                </span>
                            </div>
                        </div>
                    </div>

                </div>

                {/* Sección de Copyright */}
                <div className="mt-6 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
                    <p>
                        &copy; {new Date().getFullYear()} La Mudadora. Todos los derechos reservados.
                    </p>
                    <p className="mt-2 md:mt-0">
                        Desarrollado por <span className="text-orange-500">LMV</span> web solutions
                    </p>
                </div>

            </div>
        </footer>
    );
};

export default Footer;
