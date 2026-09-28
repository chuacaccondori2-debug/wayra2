import React from 'react';
import { Coffee, ArrowRight } from 'lucide-react';

interface HeaderProps {
  onCtaClick?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onCtaClick }) => {
  const scrollToForm = (e?: React.MouseEvent) => {
    if (e) e.preventDefault();
    if (onCtaClick) {
      onCtaClick();
    } else {
      const el = document.getElementById('formulario-cotizacion');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-[#FAF8F5]/95 backdrop-blur-md border-b border-[#E7DFD5] transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
        {/* Zone 1: Single text element wordmark */}
        <a
          href="/"
          className="flex items-center gap-2 group focus-visible:ring-2 focus-visible:ring-[#B45309] rounded-md py-1"
          aria-label="Wayra Café - Inicio"
        >
          <span className="w-8 h-8 rounded-full bg-[#2A1D15] text-[#F3EFEA] flex items-center justify-center transition-transform group-hover:scale-105 shrink-0">
            <Coffee className="w-4 h-4 text-[#D97706]" />
          </span>
          <span className="font-display text-2xl font-bold tracking-tight text-[#2A1D15]">
            Wayra Café
          </span>
        </a>

        {/* Zone 2: Clean text navigation links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-[#583E2E]" aria-label="Navegación principal">
          <a
            href="#propuesta"
            className="hover:text-[#B45309] transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#B45309] hover:after:w-full after:transition-all"
          >
            Propuesta
          </a>
          <a
            href="#beneficios"
            className="hover:text-[#B45309] transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#B45309] hover:after:w-full after:transition-all"
          >
            Beneficios
          </a>
          <a
            href="#como-funciona"
            className="hover:text-[#B45309] transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#B45309] hover:after:w-full after:transition-all"
          >
            Cómo funciona
          </a>
          <a
            href="#detalles-servicio"
            className="hover:text-[#B45309] transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#B45309] hover:after:w-full after:transition-all"
          >
            Detalles
          </a>
        </nav>

        {/* Zone 3: Primary Action */}
        <div className="flex items-center">
          <button
            type="button"
            onClick={scrollToForm}
            className="inline-flex items-center justify-center gap-2 px-4 sm:px-5 py-2.5 rounded-lg text-xs sm:text-sm font-semibold text-white bg-[#B45309] hover:bg-[#92400E] active:scale-[0.98] transition-all shadow-sm hover:shadow whitespace-nowrap focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#B45309]"
          >
            <span className="hidden sm:inline">Solicitar cotización para mi evento</span>
            <span className="sm:hidden">Cotizar evento</span>
            <ArrowRight className="w-3.5 h-3.5 shrink-0" />
          </button>
        </div>
      </div>
    </header>
  );
};
