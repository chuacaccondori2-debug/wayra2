import React from 'react';
import { Coffee, MapPin, Mail, Phone, Shield } from 'lucide-react';

interface FooterProps {
  onOpenPrivacy: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenPrivacy }) => {
  return (
    <footer className="bg-[#1C140E] text-[#D4C3B3] pt-16 pb-12 border-t border-[#2A1D15]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-[#2A1D15]">
          
          {/* Brand Col */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2">
              <span className="w-8 h-8 rounded-full bg-[#B45309] text-white flex items-center justify-center shrink-0">
                <Coffee className="w-4 h-4" />
              </span>
              <span className="font-display text-2xl font-bold text-[#FAF8F5]">
                Wayra Café
              </span>
            </div>
            
            <p className="text-sm text-[#A39180] leading-relaxed max-w-sm">
              Llevamos la excelencia del café de especialidad de La Convención a tus reuniones, capacitaciones y eventos corporativos en Cusco, con puntualidad garantizada y toda la logística resuelta.
            </p>

            <div className="text-xs text-[#8A7767] pt-2">
              Especialistas en grupos de 10 a 40 personas.
            </div>
          </div>

          {/* Quick links Col */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-semibold text-[#FAF8F5] uppercase tracking-wider">
              Navegación
            </h4>
            <ul className="space-y-2 text-sm text-[#C5B3A2]">
              <li>
                <a href="#propuesta" className="hover:text-amber-400 transition-colors">
                  Propuesta de valor
                </a>
              </li>
              <li>
                <a href="#beneficios" className="hover:text-amber-400 transition-colors">
                  Beneficios del servicio
                </a>
              </li>
              <li>
                <a href="#como-funciona" className="hover:text-amber-400 transition-colors">
                  Cómo funciona
                </a>
              </li>
              <li>
                <a href="#detalles-servicio" className="hover:text-amber-400 transition-colors">
                  Detalles y especificaciones
                </a>
              </li>
              <li>
                <a href="#formulario-cotizacion" className="hover:text-amber-400 transition-colors font-medium text-amber-200">
                  Solicitar cotización
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Col (Respecting [POR CONFIRMAR] rules strictly) */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-semibold text-[#FAF8F5] uppercase tracking-wider">
              Datos de Contacto
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-[#C5B3A2]">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#B45309] shrink-0 mt-0.5" />
                <span>
                  [POR CONFIRMAR] Dirección exacta del local (A pasos de la Plaza de Armas, Cusco, Perú)
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-[#B45309] shrink-0 mt-0.5" />
                <span>
                  [POR CONFIRMAR] Número de celular / WhatsApp empresarial
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-[#B45309] shrink-0 mt-0.5" />
                <span>
                  [POR CONFIRMAR] Correo electrónico para cotizaciones corporativas
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <Shield className="w-4 h-4 text-[#B45309] shrink-0 mt-0.5" />
                <span>
                  [POR CONFIRMAR] Horario de atención para coordinación de eventos
                </span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#8A7767]">
          <div>
            © {new Date().getFullYear()} Wayra Café. Todos los derechos reservados. Cusco, Perú.
          </div>

          <div className="flex items-center gap-6">
            <button
              type="button"
              onClick={onOpenPrivacy}
              className="hover:text-white transition-colors underline focus-visible:ring-1 focus-visible:ring-amber-500 rounded"
            >
              Aviso de Privacidad
            </button>
            <span className="text-[#4A3728]">·</span>
            <span>Servicio de café de especialidad y coffee break</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
