import React from 'react';
import { ArrowRight, Sparkles, Clock, MapPin } from 'lucide-react';
import originImg from '../assets/images/coffee_origin_convencion_1790552903921.jpg';

interface BenefitsProps {
  onCtaClick?: () => void;
}

export const Benefits: React.FC<BenefitsProps> = ({ onCtaClick }) => {
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
    <section id="beneficios" className="py-16 md:py-24 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-14 text-left">
          <div className="text-xs sm:text-sm font-semibold tracking-wider text-[#B45309] uppercase mb-2">
            Beneficios para tu evento
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#221B16] tracking-tight leading-tight [text-wrap:balance]">
            Lo que gana tu empresa al confiar en Wayra Café
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#583E2E]">
            Transformamos el intervalo de tu reunión en un momento de recarga genuina y distinción corporativa.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-14">
          
          {/* Beneficio 1 */}
          <div className="bg-white rounded-2xl p-7 border border-[#E7DFD5] shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#FAF6F2] text-[#B45309] flex items-center justify-center mb-6 border border-[#EADDCE]">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="font-display text-xl font-bold text-[#2A1D15] mb-3">
                Café de origen con historia
              </h3>
              <p className="text-sm sm:text-base text-[#583E2E] leading-relaxed">
                Servimos café de especialidad de productores de La Convención, con trazabilidad garantizada en cada taza.
              </p>
            </div>
            
            <div className="mt-6 pt-5 border-t border-[#F0EAE1] text-xs text-[#7B5840]">
              <span className="font-semibold text-[#2A1D15]">Tu ganancia:</span> Tus asistentes experimentan un café cusqueño auténtico y memorable, respaldando el comercio justo local.
            </div>
          </div>

          {/* Beneficio 2 */}
          <div className="bg-white rounded-2xl p-7 border border-[#E7DFD5] shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#FAF6F2] text-[#B45309] flex items-center justify-center mb-6 border border-[#EADDCE]">
                <Clock className="w-6 h-6" />
              </div>
              <h3 className="font-display text-xl font-bold text-[#2A1D15] mb-3">
                Logística impecable
              </h3>
              <p className="text-sm sm:text-base text-[#583E2E] leading-relaxed">
                Olvídate de los imprevistos; entregamos todo el menaje necesario y cumplimos estrictamente con el horario de tu agenda.
              </p>
            </div>

            <div className="mt-6 pt-5 border-t border-[#F0EAE1] text-xs text-[#7B5840]">
              <span className="font-semibold text-[#2A1D15]">Tu ganancia:</span> Cero estrés operativo para los organizadores y total sincronía con el programa de tu reunión.
            </div>
          </div>

          {/* Beneficio 3 */}
          <div className="bg-white rounded-2xl p-7 border border-[#E7DFD5] shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#FAF6F2] text-[#B45309] flex items-center justify-center mb-6 border border-[#EADDCE]">
                <MapPin className="w-6 h-6" />
              </div>
              <h3 className="font-display text-xl font-bold text-[#2A1D15] mb-3">
                A pasos de la Plaza de Armas
              </h3>
              <p className="text-sm sm:text-base text-[#583E2E] leading-relaxed">
                Ubicación estratégica en el corazón de Cusco, facilitando la coordinación y entrega rápida para tu equipo o invitados.
              </p>
            </div>

            <div className="mt-6 pt-5 border-t border-[#F0EAE1] text-xs text-[#7B5840]">
              <span className="font-semibold text-[#2A1D15]">Tu ganancia:</span> Tiempos de respuesta ágiles y proximidad a los principales hoteles y salas de conferencias del centro histórico.
            </div>
          </div>

        </div>

        {/* Origin Spotlight: La Convención, Cusco */}
        <div className="rounded-2xl bg-[#2A1D15] text-[#FAF8F5] p-6 sm:p-10 border border-[#3C2A1E] shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7">
              <span className="text-xs font-semibold uppercase tracking-wider text-amber-400">
                La Trazabilidad en Cada Grano
              </span>
              <h3 className="font-display text-2xl sm:text-3xl font-bold text-white mt-2 mb-4 leading-snug">
                El carácter inconfundible de los valles de La Convención
              </h3>
              <p className="text-sm sm:text-base text-[#D4C3B3] leading-relaxed mb-6">
                Seleccionamos micro-lotes cultivados bajo sombra en las altas pendientes de La Convención. El resultado es un perfil de taza dulce, con acidez brillante y notas a chocolate y frutos rojos, preparado en el punto óptimo de molienda y temperatura.
              </p>

              {/* Repetition of the exact CTA */}
              <button
                type="button"
                onClick={scrollToForm}
                className="inline-flex items-center gap-3 px-6 py-3 rounded-xl text-sm font-semibold text-white bg-[#B45309] hover:bg-[#92400E] active:scale-[0.98] transition-all shadow focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#B45309]"
              >
                <span>Solicitar cotización para mi evento</span>
                <ArrowRight className="w-4 h-4 shrink-0" />
              </button>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-xl overflow-hidden border border-[#583E2E]/60 shadow-lg">
                <img
                  src={originImg}
                  alt="Granos de café de especialidad de La Convención Cusco y cerezas maduras seleccionadas para cata artesanal"
                  className="w-full h-64 sm:h-72 object-cover object-center"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
