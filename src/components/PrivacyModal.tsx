import React from 'react';
import { X, ShieldCheck } from 'lucide-react';

interface PrivacyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PrivacyModal: React.FC<PrivacyModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="privacy-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs"
    >
      <div className="relative w-full max-w-lg bg-[#FAF8F5] rounded-2xl p-6 sm:p-8 shadow-2xl border border-[#E7DFD5] max-h-[90vh] overflow-y-auto">
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-lg text-[#583E2E] hover:text-[#2A1D15] hover:bg-[#EADDCE]/40 transition-colors focus-visible:ring-2 focus-visible:ring-[#B45309]"
          aria-label="Cerrar aviso de privacidad"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-xl bg-[#FAF6F2] text-[#B45309] flex items-center justify-center border border-[#EADDCE]">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <div>
            <h3 id="privacy-title" className="font-display text-xl font-bold text-[#2A1D15]">
              Aviso de Privacidad
            </h3>
            <span className="text-xs text-[#7B5840]">Wayra Café · Cusco, Perú</span>
          </div>
        </div>

        <div className="space-y-4 text-sm text-[#583E2E] leading-relaxed">
          <p>
            En <strong>Wayra Café</strong> respetamos y protegemos la privacidad de las empresas, organizadores y agencias de turismo que solicitan nuestros servicios de coffee break corporativo.
          </p>
          
          <h4 className="font-semibold text-[#2A1D15] pt-2">
            1. Finalidad del tratamiento de datos
          </h4>
          <p>
            Los datos solicitados a través del formulario (nombre y apellido, empresa o agencia, correo electrónico, número de celular, fecha tentativa y número de personas) son recopilados exclusivamente para:
          </p>
          <ul className="list-disc pl-5 space-y-1 text-xs sm:text-sm">
            <li>Elaborar y remitir la cotización personalizada de su evento.</li>
            <li>Coordinar los requerimientos logísticos de menaje y agenda en Cusco.</li>
            <li>Atender consultas previas a la confirmación del servicio.</li>
          </ul>

          <h4 className="font-semibold text-[#2A1D15] pt-2">
            2. Confidencialidad y no cesión
          </h4>
          <p>
            Sus datos no serán vendidos, cedidos ni compartidos con terceros con fines publicitarios ni comerciales ajenos a Wayra Café.
          </p>

          <h4 className="font-semibold text-[#2A1D15] pt-2">
            3. Ejercicio de derechos
          </h4>
          <p>
            Puede solicitar la actualización o eliminación de sus datos de contacto en cualquier momento notificándolo a través de nuestros canales oficiales.
          </p>
        </div>

        <div className="mt-6 pt-4 border-t border-[#E7DFD5] flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2.5 rounded-lg text-sm font-semibold text-white bg-[#B45309] hover:bg-[#92400E] transition-colors focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#B45309]"
          >
            Entendido
          </button>
        </div>
      </div>
    </div>
  );
};
