import React, { useState } from 'react';
import { Send, CheckCircle, Calendar, Users, Building2, User, Mail, Phone, Lock, Sparkles } from 'lucide-react';
import { QuoteFormData } from '../types';

// Aquí se conectará después el webhook que recibirá las solicitudes
const WEBHOOK_URL: string = "https://hook.us2.make.com/xicj0a6k7lvn8rcxxv1pmby90qfopfmw";

interface QuoteFormProps {
  onOpenPrivacy: () => void;
}

export const QuoteForm: React.FC<QuoteFormProps> = ({ onOpenPrivacy }) => {
  const [formData, setFormData] = useState<QuoteFormData>({
    nombre: '',
    empresa: '',
    correo: '',
    celular: '',
    fecha: '',
    personas: '',
    consentimiento: false,
  });

  const [submitted, setSubmitted] = useState<boolean>(false);
  const [submittedData, setSubmittedData] = useState<QuoteFormData | null>(null);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
    if (errorMsg) setErrorMsg(null);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Client-side validation
    if (!formData.nombre.trim()) {
      setErrorMsg('Por favor ingresa tu nombre y apellido.');
      return;
    }
    if (!formData.empresa.trim()) {
      setErrorMsg('Por favor ingresa el nombre de tu empresa o agencia.');
      return;
    }
    if (!formData.correo.trim() || !formData.correo.includes('@')) {
      setErrorMsg('Por favor ingresa un correo electrónico válido.');
      return;
    }
    if (!formData.celular.trim()) {
      setErrorMsg('Por favor ingresa un número de celular de contacto.');
      return;
    }
    if (!formData.fecha) {
      setErrorMsg('Por favor selecciona la fecha tentativa de tu evento.');
      return;
    }
    const numPersonas = Number(formData.personas);
    if (!formData.personas || numPersonas < 10 || numPersonas > 40) {
      setErrorMsg('El número de personas debe estar comprendido entre 10 y 40.');
      return;
    }
    if (!formData.consentimiento) {
      setErrorMsg('Debes aceptar la casilla de consentimiento para procesar tu cotización.');
      return;
    }

    setIsSubmitting(true);

    try {
      // Si en el futuro se define un WEBHOOK_URL, se despacha la petición POST
      if (WEBHOOK_URL && WEBHOOK_URL.trim() !== '') {
        await fetch(WEBHOOK_URL, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData),
        });
      }
      // Simulación de respuesta inmediata en cliente (sin recargar)
      setSubmittedData({ ...formData });
      setSubmitted(true);
      setErrorMsg(null);
    } catch (err) {
      // Manejo de error si el webhook fallara en el futuro
      console.error('Error al enviar solicitud al webhook:', err);
      // Igualmente mostramos el agradecimiento para no bloquear al usuario en demo
      setSubmittedData({ ...formData });
      setSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setFormData({
      nombre: '',
      empresa: '',
      correo: '',
      celular: '',
      fecha: '',
      personas: '',
      consentimiento: false,
    });
    setSubmitted(false);
    setSubmittedData(null);
    setErrorMsg(null);
  };

  return (
    <section id="formulario-cotizacion" className="py-16 md:py-24 bg-[#FAF8F5] relative scroll-mt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold tracking-wider text-[#B45309] uppercase mb-2">
            <Sparkles className="w-4 h-4 text-[#B45309]" />
            <span>Reserva y planificación sin demoras</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#221B16] tracking-tight [text-wrap:balance]">
            Solicita la propuesta para tu próximo evento
          </h2>
          <p className="mt-3 text-base text-[#583E2E]">
            Completa los datos de tu reunión en Cusco (10 a 40 asistentes) y te responderemos con opciones exactas de café de especialidad y menaje.
          </p>
        </div>

        {/* Main Card Container */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 lg:p-12 border border-[#E7DFD5] shadow-xl relative overflow-hidden">
          
          {submitted && submittedData ? (
            /* In-page thank you message without reloading */
            <div className="py-8 text-center" role="alert" aria-live="polite">
              <div className="w-16 h-16 bg-[#ECFDF5] text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6 border border-emerald-200">
                <CheckCircle className="w-8 h-8" />
              </div>

              <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#2A1D15] mb-3">
                ¡Gracias por solicitar tu cotización, {submittedData.nombre}!
              </h3>

              <p className="text-base text-[#583E2E] max-w-xl mx-auto mb-6 leading-relaxed">
                Hemos recibido con éxito los datos de tu evento para <strong>{submittedData.empresa}</strong>. Nos pondremos en contacto contigo para enviarte la propuesta personalizada con café de especialidad de La Convención.
              </p>

              {/* Summary of submitted data */}
              <div className="bg-[#FAF6F2] rounded-2xl p-6 max-w-md mx-auto text-left border border-[#EADDCE] mb-8 text-sm">
                <h4 className="font-semibold text-[#2A1D15] mb-3 border-b border-[#E2D8CC] pb-2 text-xs uppercase tracking-wide">
                  Resumen de la solicitud
                </h4>
                <div className="space-y-2 text-[#583E2E]">
                  <div className="flex justify-between">
                    <span className="text-[#7B5840]">Empresa / Agencia:</span>
                    <strong className="text-[#2A1D15]">{submittedData.empresa}</strong>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#7B5840]">Asistentes:</span>
                    <strong className="text-[#2A1D15]">{submittedData.personas} personas</strong>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#7B5840]">Fecha tentativa:</span>
                    <strong className="text-[#2A1D15]">{submittedData.fecha}</strong>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#7B5840]">Contacto:</span>
                    <strong className="text-[#2A1D15]">{submittedData.correo}</strong>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#7B5840]">Celular:</span>
                    <strong className="text-[#2A1D15]">{submittedData.celular}</strong>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <button
                  type="button"
                  onClick={handleReset}
                  className="px-6 py-2.5 rounded-xl text-sm font-semibold text-[#583E2E] bg-[#FAF8F5] border border-[#D5C9BD] hover:bg-[#F3EFEA] transition-colors focus-visible:ring-2 focus-visible:ring-[#B45309]"
                >
                  Enviar otra cotización
                </button>
              </div>
            </div>
          ) : (
            /* Form with visible labels and requested name attributes */
            <form onSubmit={handleSubmit} noValidate className="space-y-6">
              
              {errorMsg && (
                <div className="p-4 rounded-xl bg-rose-50 border border-rose-200 text-rose-800 text-sm flex items-start gap-3">
                  <span className="font-bold">•</span>
                  <span>{errorMsg}</span>
                </div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                {/* 1. Nombre y apellido */}
                <div>
                  <label
                    htmlFor="nombre"
                    className="block text-sm font-semibold text-[#2A1D15] mb-2"
                  >
                    Nombre y apellido <span className="text-rose-600">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#A37654]">
                      <User className="w-4 h-4" />
                    </div>
                    <input
                      type="text"
                      id="nombre"
                      name="nombre"
                      required
                      placeholder="Ej. Valeria Quispe"
                      value={formData.nombre}
                      onChange={handleChange}
                      className="w-full pl-10 pr-4 py-3 rounded-xl border border-[#D5C9BD] bg-[#FAF8F5] text-[#221B16] placeholder:text-[#9C8270] focus:bg-white focus:border-[#B45309] focus:ring-2 focus:ring-[#B45309]/20 transition-all text-sm outline-none"
                    />
                  </div>
                </div>

                {/* 2. Nombre de la empresa o agencia */}
                <div>
                  <label
                    htmlFor="empresa"
                    className="block text-sm font-semibold text-[#2A1D15] mb-2"
                  >
                    Nombre de la empresa o agencia <span className="text-rose-600">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#A37654]">
                      <Building2 className="w-4 h-4" />
                    </div>
                    <input
                      type="text"
                      id="empresa"
                      name="empresa"
                      required
                      placeholder="Ej. Andean Horizons Travel"
                      value={formData.empresa}
                      onChange={handleChange}
                      className="w-full pl-10 pr-4 py-3 rounded-xl border border-[#D5C9BD] bg-[#FAF8F5] text-[#221B16] placeholder:text-[#9C8270] focus:bg-white focus:border-[#B45309] focus:ring-2 focus:ring-[#B45309]/20 transition-all text-sm outline-none"
                    />
                  </div>
                </div>

                {/* 3. Correo electrónico */}
                <div>
                  <label
                    htmlFor="correo"
                    className="block text-sm font-semibold text-[#2A1D15] mb-2"
                  >
                    Correo electrónico <span className="text-rose-600">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#A37654]">
                      <Mail className="w-4 h-4" />
                    </div>
                    <input
                      type="email"
                      id="correo"
                      name="correo"
                      required
                      placeholder="valeria@tuempresa.pe"
                      value={formData.correo}
                      onChange={handleChange}
                      className="w-full pl-10 pr-4 py-3 rounded-xl border border-[#D5C9BD] bg-[#FAF8F5] text-[#221B16] placeholder:text-[#9C8270] focus:bg-white focus:border-[#B45309] focus:ring-2 focus:ring-[#B45309]/20 transition-all text-sm outline-none"
                    />
                  </div>
                </div>

                {/* 4. Número de celular */}
                <div>
                  <label
                    htmlFor="celular"
                    className="block text-sm font-semibold text-[#2A1D15] mb-2"
                  >
                    Número de celular <span className="text-rose-600">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#A37654]">
                      <Phone className="w-4 h-4" />
                    </div>
                    <input
                      type="tel"
                      id="celular"
                      name="celular"
                      required
                      placeholder="+51 984 000 000"
                      value={formData.celular}
                      onChange={handleChange}
                      className="w-full pl-10 pr-4 py-3 rounded-xl border border-[#D5C9BD] bg-[#FAF8F5] text-[#221B16] placeholder:text-[#9C8270] focus:bg-white focus:border-[#B45309] focus:ring-2 focus:ring-[#B45309]/20 transition-all text-sm outline-none"
                    />
                  </div>
                </div>

                {/* 5. Fecha tentativa del evento */}
                <div>
                  <label
                    htmlFor="fecha"
                    className="block text-sm font-semibold text-[#2A1D15] mb-2"
                  >
                    Fecha tentativa del evento <span className="text-rose-600">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#A37654]">
                      <Calendar className="w-4 h-4" />
                    </div>
                    <input
                      type="date"
                      id="fecha"
                      name="fecha"
                      required
                      value={formData.fecha}
                      onChange={handleChange}
                      className="w-full pl-10 pr-4 py-3 rounded-xl border border-[#D5C9BD] bg-[#FAF8F5] text-[#221B16] focus:bg-white focus:border-[#B45309] focus:ring-2 focus:ring-[#B45309]/20 transition-all text-sm outline-none"
                    />
                  </div>
                </div>

                {/* 6. Número de personas (10-40) */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <label
                      htmlFor="personas"
                      className="block text-sm font-semibold text-[#2A1D15]"
                    >
                      Número de personas (10-40) <span className="text-rose-600">*</span>
                    </label>
                    <span className="text-xs text-[#7B5840]">
                      Grupos de 10 a 40 personas
                    </span>
                  </div>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#A37654]">
                      <Users className="w-4 h-4" />
                    </div>
                    <input
                      type="number"
                      id="personas"
                      name="personas"
                      min={10}
                      max={40}
                      required
                      placeholder="Ej. 25"
                      value={formData.personas}
                      onChange={handleChange}
                      className="w-full pl-10 pr-4 py-3 rounded-xl border border-[#D5C9BD] bg-[#FAF8F5] text-[#221B16] placeholder:text-[#9C8270] focus:bg-white focus:border-[#B45309] focus:ring-2 focus:ring-[#B45309]/20 transition-all text-sm outline-none font-mono"
                    />
                  </div>
                </div>

              </div>

              {/* Casilla de consentimiento obligatoria */}
              <div className="pt-2">
                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    id="consentimiento"
                    name="consentimiento"
                    required
                    checked={formData.consentimiento}
                    onChange={handleChange}
                    className="mt-1 w-4 h-4 rounded border-[#D5C9BD] text-[#B45309] focus:ring-[#B45309] focus:ring-offset-0 transition-colors cursor-pointer"
                  />
                  <label
                    htmlFor="consentimiento"
                    className="text-xs sm:text-sm text-[#583E2E] leading-normal cursor-pointer"
                  >
                    Acepto que mis datos sean utilizados exclusivamente por Wayra Café para elaborar la cotización del evento y coordinar la propuesta logística. Consulta nuestro{' '}
                    <button
                      type="button"
                      onClick={onOpenPrivacy}
                      className="underline font-semibold text-[#B45309] hover:text-[#92400E] focus-visible:ring-1 focus-visible:ring-[#B45309] rounded inline"
                    >
                      Aviso de privacidad
                    </button>
                    .
                  </label>
                </div>
              </div>

              {/* Submit CTA button: exact text required by brief */}
              <div className="pt-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl text-base font-semibold text-white bg-[#B45309] hover:bg-[#92400E] active:scale-[0.99] transition-all shadow-md hover:shadow-lg disabled:opacity-70 disabled:cursor-not-allowed focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#B45309]"
                >
                  <span>
                    {isSubmitting ? 'Procesando solicitud...' : 'Solicitar cotización para mi evento'}
                  </span>
                  <Send className="w-4 h-4 shrink-0" />
                </button>
              </div>

              <div className="flex items-center justify-center gap-2 text-xs text-[#7B5840] pt-1">
                <Lock className="w-3.5 h-3.5 text-[#A37654]" />
                <span>Respuesta prioritaria para eventos y capacitaciones en Cusco</span>
              </div>

            </form>
          )}

        </div>

      </div>
    </section>
  );
};
