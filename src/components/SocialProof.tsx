import React from 'react';
import { Quote } from 'lucide-react';

export const SocialProof: React.FC = () => {
  return (
    <section className="py-16 md:py-20 bg-white border-b border-[#E7DFD5]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        <div className="text-xs sm:text-sm font-semibold tracking-wider text-[#B45309] uppercase mb-3">
          Prueba social y referencias
        </div>
        
        <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#221B16] tracking-tight mb-8">
          La confianza de quienes organizan eventos en Cusco
        </h2>

        {/* Testimonial space clearly marked as [POR CONFIRMAR] without fabricated quotes */}
        <div className="relative rounded-2xl bg-[#FAF8F5] p-8 sm:p-12 border-2 border-dashed border-[#D5C9BD] text-left">
          <Quote className="w-10 h-10 text-[#D97706]/40 mb-4" />
          
          <div className="space-y-4">
            <span className="inline-block text-xs font-bold text-[#92400E] bg-[#FEF3C7] px-3 py-1 rounded-md">
              [POR CONFIRMAR] Espacio reservado para testimonio de cliente corporativo o agencia de turismo
            </span>

            <p className="text-base sm:text-lg text-[#583E2E] italic leading-relaxed">
              «[POR CONFIRMAR: Cita real sobre la puntualidad del servicio, el impacto del café de especialidad de La Convención y la comodidad de la logística resuelta en su evento corporativo en Cusco]»
            </p>

            <div className="pt-4 border-t border-[#E7DFD5] flex items-center justify-between flex-wrap gap-2 text-xs sm:text-sm text-[#78350F]">
              <div>
                <strong className="block text-[#2A1D15]">[POR CONFIRMAR] Nombre y Cargo del Organizador</strong>
                <span>[POR CONFIRMAR] Empresa / Agencia de Turismo receptivo en Cusco</span>
              </div>
              <span className="text-xs text-[#A37654]">
                Grupo de 25 personas · Evento corporativo
              </span>
            </div>
          </div>
        </div>

        <p className="text-xs text-[#7B5840] mt-4">
          * Los testimonios y casos de éxito se incorporan tras la validación directa con nuestros clientes corporativos.
        </p>

      </div>
    </section>
  );
};
