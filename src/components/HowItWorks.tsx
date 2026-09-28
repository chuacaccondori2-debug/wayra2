import React from 'react';
import { ArrowRight, ClipboardList, CalendarCheck, Coffee } from 'lucide-react';

interface HowItWorksProps {
  onCtaClick?: () => void;
}

export const HowItWorks: React.FC<HowItWorksProps> = ({ onCtaClick }) => {
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

  const steps = [
    {
      number: '01',
      title: 'Envía los datos de tu evento',
      description:
        'Completa el formulario en menos de 1 minuto con la fecha tentativa, tu empresa y el número de asistentes (10 a 40 personas).',
      icon: ClipboardList,
    },
    {
      number: '02',
      title: 'Ajustamos la propuesta a tu agenda',
      description:
        'Te enviamos la cotización detallada coordinando el horario exacto del coffee break, requerimientos de menaje y opciones de acompañamiento.',
      icon: CalendarCheck,
    },
    {
      number: '03',
      title: 'Servicio puntual en tu sala',
      description:
        'Llegamos con anticipación, dejamos todo montado con menaje impecable y el café de La Convención recién preparado para el descanso de tu equipo.',
      icon: Coffee,
    },
  ];

  return (
    <section id="como-funciona" className="py-16 md:py-24 bg-white border-y border-[#E7DFD5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-16 text-left">
          <div className="text-xs sm:text-sm font-semibold tracking-wider text-[#B45309] uppercase mb-2">
            Paso a paso
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#221B16] tracking-tight leading-tight [text-wrap:balance]">
            Cómo funciona el servicio de coffee break
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#583E2E]">
            Tres pasos directos para resolver la logística de café de tu próxima reunión sin complicaciones.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.number}
                className="bg-[#FAF8F5] rounded-2xl p-8 border border-[#E7DFD5] flex flex-col justify-between relative group hover:border-[#D97706]/40 transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-display text-3xl font-bold text-[#B45309]">
                      {step.number}
                    </span>
                    <div className="w-10 h-10 rounded-lg bg-white border border-[#EADDCE] flex items-center justify-center text-[#78350F]">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="font-display text-xl font-bold text-[#2A1D15] mb-3">
                    {step.title}
                  </h3>

                  <p className="text-sm text-[#583E2E] leading-relaxed">
                    {step.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#EAE3D9] flex items-center text-xs font-semibold text-[#78350F]">
                  <span>Paso {step.number} de 03</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA push */}
        <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-[#F5EDE6] border border-[#E2D8CC] flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="font-display text-lg sm:text-xl font-bold text-[#2A1D15]">
              ¿Tienes un evento en los próximos días en Cusco?
            </h4>
            <p className="text-sm text-[#583E2E] mt-1">
              Coordinamos con anticipación para asegurar la disponibilidad de menaje y café recién tostado.
            </p>
          </div>

          <button
            type="button"
            onClick={scrollToForm}
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-white bg-[#B45309] hover:bg-[#92400E] active:scale-[0.98] transition-all shadow-sm shrink-0 whitespace-nowrap focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#B45309]"
          >
            <span>Solicitar cotización para mi evento</span>
            <ArrowRight className="w-4 h-4 shrink-0" />
          </button>
        </div>

      </div>
    </section>
  );
};
