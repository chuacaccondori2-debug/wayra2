import React from 'react';
import { ArrowRight, MapPin, Users, CheckCircle2, Clock } from 'lucide-react';
import heroImg from '../assets/images/hero_coffee_break_1790552893392.jpg';

interface HeroProps {
  onCtaClick?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onCtaClick }) => {
  const scrollToForm = () => {
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
    <section className="relative overflow-hidden pt-8 pb-16 md:pt-16 md:pb-24 lg:pt-20 lg:pb-32 bg-[#FAF8F5]">
      {/* Subtle organic background gradient */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-[#EADDCE] blur-3xl" />
        <div className="absolute top-1/2 -right-32 w-96 h-96 rounded-full bg-[#F3D5B5] blur-3xl opacity-50" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Copy & Primary CTA */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left">
            
            {/* Context tag (unboxed clean text with typographic separator, zero-pill rule) */}
            <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold tracking-wide text-[#78350F] uppercase mb-4">
              <span>Cusco, Perú</span>
              <span aria-hidden="true">·</span>
              <span>Coffee Break de Especialidad</span>
              <span aria-hidden="true">·</span>
              <span>Grupos de 10 a 40 personas</span>
            </div>

            {/* The ONLY H1 of the entire page */}
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#221B16] leading-[1.12] mb-6 [text-wrap:balance]">
              Haz que tus reuniones en Cusco destaquen con café de especialidad.
            </h1>

            {/* Exact Subtitle from brief */}
            <p className="text-lg sm:text-xl text-[#583E2E] leading-relaxed mb-8 max-w-2xl font-normal">
              Elevamos el estándar de tus eventos corporativos con café trazable, desayunos frescos y un servicio puntual que cuida cada detalle.
            </p>

            {/* Primary CTA + Reassurance */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-10">
              <button
                type="button"
                onClick={scrollToForm}
                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl text-base font-semibold text-white bg-[#B45309] hover:bg-[#92400E] active:scale-[0.98] transition-all shadow-md hover:shadow-lg focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#B45309]"
              >
                <span>Solicitar cotización para mi evento</span>
                <ArrowRight className="w-5 h-5 shrink-0" />
              </button>
            </div>

            {/* Editorial trust markers (clean unboxed inline list) */}
            <div className="pt-6 border-t border-[#E7DFD5] grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs sm:text-sm text-[#4A3525]">
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#B45309] shrink-0" />
                <span>Puntualidad en sala garantizada</span>
              </div>
              <div className="flex items-center gap-2.5">
                <MapPin className="w-4 h-4 text-[#B45309] shrink-0" />
                <span>A pasos de Plaza de Armas</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Users className="w-4 h-4 text-[#B45309] shrink-0" />
                <span>Diseñado para 10 a 40 pax</span>
              </div>
            </div>

          </div>

          {/* Right Column: Hero High-Impact Visual Asset */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Image Frame with soft shadow and hairline border */}
              <div className="relative overflow-hidden rounded-2xl bg-[#EFE9DF] border border-[#E7DFD5] shadow-xl">
                <img
                  src={heroImg}
                  alt="Preparación de café de especialidad de La Convención servido en mesa de reunión corporativa en Cusco"
                  className="w-full h-[380px] sm:h-[460px] lg:h-[500px] object-cover object-center transition-transform duration-700 hover:scale-105"
                  loading="eager"
                  referrerPolicy="no-referrer"
                />
                
                {/* Measured Scrim for contrast */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent pointer-events-none" />

                {/* Over-image caption */}
                <div className="absolute bottom-0 inset-x-0 p-5 text-white">
                  <div className="flex items-center gap-2 text-xs font-medium text-amber-200 uppercase tracking-wider mb-1">
                    <Clock className="w-3.5 h-3.5" />
                    <span>Logística resuelta en tu horario</span>
                  </div>
                  <p className="text-sm font-medium text-neutral-100">
                    Café recién extraído de origen La Convención para tu equipo y clientes.
                  </p>
                </div>
              </div>

              {/* Offset decorative element */}
              <div className="hidden sm:block absolute -bottom-5 -left-5 bg-[#2A1D15] text-[#FAF8F5] p-4 rounded-xl shadow-lg border border-[#3C2A1E] max-w-xs">
                <p className="text-xs text-amber-400 font-semibold tracking-wide uppercase mb-0.5">
                  100% Especialidad
                </p>
                <p className="text-xs text-[#E7DFD5]">
                  Trazabilidad directa desde los valles de La Convención, Cusco.
                </p>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
