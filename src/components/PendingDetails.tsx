import React from 'react';
import { AlertCircle, MapPin, Coffee, Compass, Share2 } from 'lucide-react';
import breakfastImg from '../assets/images/breakfast_catering_spread_1790552923521.jpg';

export const PendingDetails: React.FC = () => {
  return (
    <section id="detalles-servicio" className="py-16 md:py-20 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header with clear note */}
        <div className="max-w-3xl mb-12 text-left">
          <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold tracking-wider text-[#B45309] uppercase mb-2">
            <AlertCircle className="w-4 h-4 text-[#B45309]" />
            <span>Ficha de especificaciones y alcance</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#221B16] tracking-tight leading-tight">
            Detalles operativos del servicio de café y desayunos
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#583E2E]">
            Diseñamos cada propuesta a la medida de tu grupo. Los siguientes aspectos específicos se ajustan y confirman con cada cliente corporativo antes de la contratación:
          </p>
        </div>

        {/* 2-column layout: Photographic reference + Specific details */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Visual card */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl overflow-hidden border border-[#E7DFD5] bg-white shadow-md">
              <img
                src={breakfastImg}
                alt="Montaje de desayunos frescos y repostería artesanal para eventos corporativos en Cusco"
                className="w-full h-64 sm:h-72 object-cover object-center"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
              <div className="p-5">
                <span className="text-xs font-semibold text-[#B45309] uppercase tracking-wide">
                  Desayunos frescos & Acompañamientos
                </span>
                <p className="text-sm text-[#4A3525] mt-1">
                  Complementamos las notas del café de La Convención con panes artesanales, fruta fresca de temporada y opciones calientes.
                </p>
              </div>
            </div>
          </div>

          {/* Items to confirm list */}
          <div className="lg:col-span-7 space-y-4">
            
            {/* Item 1: Dirección */}
            <div className="bg-white rounded-xl p-5 border border-[#E7DFD5] shadow-xs">
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-lg bg-[#FAF6F2] text-[#B45309] flex items-center justify-center shrink-0 border border-[#EADDCE]">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <div className="flex items-center gap-2 flex-wrap">
                    <h3 className="text-base font-bold text-[#2A1D15]">
                      Ubicación y base de operaciones
                    </h3>
                    <span className="text-xs font-medium text-amber-900 bg-amber-100/80 px-2 py-0.5 rounded">
                      [POR CONFIRMAR] Dirección exacta del local
                    </span>
                  </div>
                  <p className="text-sm text-[#583E2E] mt-1.5 leading-relaxed">
                    Operamos a pasos de la Plaza de Armas en el centro histórico de Cusco, lo que nos permite una coordinación ágil con hoteles, casonas de eventos y oficinas corporativas de la zona.
                  </p>
                </div>
              </div>
            </div>

            {/* Item 2: Opciones de desayunos */}
            <div className="bg-white rounded-xl p-5 border border-[#E7DFD5] shadow-xs">
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-lg bg-[#FAF6F2] text-[#B45309] flex items-center justify-center shrink-0 border border-[#EADDCE]">
                  <Coffee className="w-4 h-4" />
                </div>
                <div>
                  <div className="flex items-center gap-2 flex-wrap">
                    <h3 className="text-base font-bold text-[#2A1D15]">
                      Paquetes y alternativas de desayuno
                    </h3>
                    <span className="text-xs font-medium text-amber-900 bg-amber-100/80 px-2 py-0.5 rounded">
                      [POR CONFIRMAR] Opciones específicas de los paquetes de desayunos
                    </span>
                  </div>
                  <p className="text-sm text-[#583E2E] mt-1.5 leading-relaxed">
                    Personalizamos el menú para reuniones ejecutivas (repostería fina, sándwiches con insumos locales, opciones vegetarianas y bebidas frías de frutos andinos) adaptadas al número de asistentes.
                  </p>
                </div>
              </div>
            </div>

            {/* Item 3: Área de cobertura */}
            <div className="bg-white rounded-xl p-5 border border-[#E7DFD5] shadow-xs">
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-lg bg-[#FAF6F2] text-[#B45309] flex items-center justify-center shrink-0 border border-[#EADDCE]">
                  <Compass className="w-4 h-4" />
                </div>
                <div>
                  <div className="flex items-center gap-2 flex-wrap">
                    <h3 className="text-base font-bold text-[#2A1D15]">
                      Alcance del servicio y entrega
                    </h3>
                    <span className="text-xs font-medium text-amber-900 bg-amber-100/80 px-2 py-0.5 rounded">
                      [POR CONFIRMAR] Área de cobertura para el servicio de delivery fuera del local
                    </span>
                  </div>
                  <p className="text-sm text-[#583E2E] mt-1.5 leading-relaxed">
                    Brindamos servicio en el centro histórico y zonas corporativas de Cusco. Para ubicaciones en el Valle Sagrado o distritos periféricos, coordinamos la viabilidad logística en la cotización.
                  </p>
                </div>
              </div>
            </div>

            {/* Item 4: Redes y canales de contacto */}
            <div className="bg-white rounded-xl p-5 border border-[#E7DFD5] shadow-xs">
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-lg bg-[#FAF6F2] text-[#B45309] flex items-center justify-center shrink-0 border border-[#EADDCE]">
                  <Share2 className="w-4 h-4" />
                </div>
                <div>
                  <div className="flex items-center gap-2 flex-wrap">
                    <h3 className="text-base font-bold text-[#2A1D15]">
                      Canales directos de comunicación
                    </h3>
                    <span className="text-xs font-medium text-amber-900 bg-amber-100/80 px-2 py-0.5 rounded">
                      [POR CONFIRMAR] Redes sociales o enlace a WhatsApp empresarial
                    </span>
                  </div>
                  <p className="text-sm text-[#583E2E] mt-1.5 leading-relaxed">
                    Puedes canalizar tu requerimiento inicial a través de nuestro formulario de cotización. Próximamente se integrará la línea directa de WhatsApp para seguimiento en tiempo real.
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
