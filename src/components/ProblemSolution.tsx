import React from 'react';
import { XCircle, CheckCircle2, ShieldCheck, Flame } from 'lucide-react';
import corporateImg from '../assets/images/corporate_event_cusco_1790552914117.jpg';

export const ProblemSolution: React.FC = () => {
  return (
    <section id="propuesta" className="py-16 md:py-24 bg-white border-y border-[#E7DFD5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14 text-left">
          <div className="text-xs sm:text-sm font-semibold tracking-wider text-[#B45309] uppercase mb-2">
            El reto y nuestra propuesta de valor
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#221B16] tracking-tight leading-tight">
            Diseñado para empresas y agencias de turismo en Cusco que valoran la excelencia
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#583E2E] leading-relaxed">
            Sabemos lo que está en juego en una capacitación o reunión corporativa: tu reputación ante clientes y colaboradores no puede depender de un café frío o entregas a destiempo.
          </p>
        </div>

        {/* Grid comparing the problem vs Wayra Café's solution */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Problem Card (What companies endure with generic suppliers) */}
          <div className="lg:col-span-5 bg-[#FAF6F2] rounded-2xl p-6 sm:p-8 border border-[#E7DFD5] flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-rose-700 font-semibold text-sm uppercase tracking-wide mb-4">
                <XCircle className="w-5 h-5 shrink-0" />
                <span>El problema con proveedores genéricos</span>
              </div>
              
              <h3 className="font-display text-xl font-bold text-[#2A1D15] mb-4">
                Complicaciones logísticas y café convencional
              </h3>

              <ul className="space-y-4 text-sm text-[#583E2E]">
                <li className="flex items-start gap-3">
                  <span className="text-rose-500 font-bold shrink-0 mt-0.5">•</span>
                  <span><strong>Entregas impuntuales:</strong> Retrasos en el inicio del descanso que desorganizan la agenda de expositores y participantes.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-rose-500 font-bold shrink-0 mt-0.5">•</span>
                  <span><strong>Café genérico o quemado:</strong> Bebidas estándar de termo que desmerecen el estándar del evento y dejan una mala impresión.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-rose-500 font-bold shrink-0 mt-0.5">•</span>
                  <span><strong>Falta de menaje y soporte:</strong> Menaje descartable endeble o falta de elementos necesarios que obligan a tu equipo a resolver emergencias de último minuto.</span>
                </li>
              </ul>
            </div>

            <div className="mt-6 pt-5 border-t border-[#E2D8CC] text-xs text-[#7B5840]">
              Resultado: Estrés para el coordinador y una experiencia poco memorable para el grupo.
            </div>
          </div>

          {/* Solution Card (Wayra Café's Value Proposition) */}
          <div className="lg:col-span-7 bg-[#2A1D15] text-[#FAF8F5] rounded-2xl p-6 sm:p-8 flex flex-col justify-between shadow-lg relative overflow-hidden">
            <div className="relative z-10">
              <div className="flex items-center gap-2 text-[#FBBF24] font-semibold text-sm uppercase tracking-wide mb-4">
                <ShieldCheck className="w-5 h-5 shrink-0" />
                <span>Nuestra Propuesta de Valor</span>
              </div>

              <h3 className="font-display text-2xl sm:text-3xl font-bold text-white mb-4 leading-snug">
                Llevamos la excelencia del café de especialidad de La Convención directamente a tu evento, con puntualidad garantizada y toda la logística resuelta.
              </h3>

              <p className="text-sm sm:text-base text-[#D4C3B3] leading-relaxed mb-6">
                Nos encargamos de principio a fin: selección de granos con perfil de taza sobresaliente, preparación en sitio o termos térmicos de alta gama, montaje pulcro con vajilla adecuada y sincronización estricta con tu cronograma.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-[#3C2A1E]">
                <div className="flex items-start gap-3">
                  <Flame className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-semibold text-white">Café recién preparado</h4>
                    <p className="text-xs text-[#C5B3A2]">Notas de cata balanceadas y aromáticas propias de La Convención.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-semibold text-white">Cero estrés de coordinación</h4>
                    <p className="text-xs text-[#C5B3A2]">Tu equipo se concentra en el contenido; nosotros en la experiencia.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Subtle decorative background glow */}
            <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-[#B45309]/20 rounded-full blur-3xl pointer-events-none" />
          </div>

        </div>

        {/* Photographic Evidence & Atmosphere */}
        <div className="mt-8 rounded-2xl overflow-hidden border border-[#E7DFD5] relative bg-[#FAF8F5]">
          <div className="grid grid-cols-1 md:grid-cols-12 items-center">
            <div className="md:col-span-5 p-6 sm:p-8">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#B45309]">
                Para grupos de 10 a 40 personas
              </span>
              <h4 className="font-display text-2xl font-bold text-[#2A1D15] mt-2 mb-3">
                El tamaño justo para una atención impecable
              </h4>
              <p className="text-sm text-[#583E2E] leading-relaxed">
                Nos especializamos en formatos medianos: reuniones de directorio, talleres de agencias receptivas, capacitaciones de guías y encuentros corporativos que exigen calidez y precisión.
              </p>
            </div>
            <div className="md:col-span-7 h-56 sm:h-72">
              <img
                src={corporateImg}
                alt="Ejecutivos y equipo de agencia de turismo disfrutando del coffee break corporativo en Cusco"
                className="w-full h-full object-cover object-center"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
