import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ProblemSolution } from './components/ProblemSolution';
import { Benefits } from './components/Benefits';
import { HowItWorks } from './components/HowItWorks';
import { PendingDetails } from './components/PendingDetails';
import { SocialProof } from './components/SocialProof';
import { QuoteForm } from './components/QuoteForm';
import { Footer } from './components/Footer';
import { PrivacyModal } from './components/PrivacyModal';

export default function App() {
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);

  const scrollToForm = () => {
    const el = document.getElementById('formulario-cotizacion');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      // Focus on the first input for accessibility
      setTimeout(() => {
        const input = document.getElementById('nombre');
        if (input) input.focus();
      }, 500);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8F5] text-[#221B16] selection:bg-[#B45309]/15 selection:text-[#78350F]">
      
      {/* 1. Header (Sticky navigation with Top Bar Contract) */}
      <Header onCtaClick={scrollToForm} />

      {/* 2. Main Content */}
      <main className="flex-1">
        {/* Hero Section: H1, Subtitle, Primary CTA, High-impact imagery */}
        <Hero onCtaClick={scrollToForm} />

        {/* Problem & Solution: Context for Cusco corporate organizers */}
        <ProblemSolution />

        {/* Benefits: 3 concrete benefits written from the client's perspective */}
        <Benefits onCtaClick={scrollToForm} />

        {/* How It Works: 3 simple steps to make the action */}
        <HowItWorks onCtaClick={scrollToForm} />

        {/* Pending Details & Operational Scope: Breakfasts, Coverage, Delivery */}
        <PendingDetails />

        {/* Social Proof: Testimonial space marked [POR CONFIRMAR] */}
        <SocialProof />

        {/* Quote Form: Primary lead capture destination */}
        <QuoteForm onOpenPrivacy={() => setIsPrivacyOpen(true)} />
      </main>

      {/* 3. Semantic Footer */}
      <Footer onOpenPrivacy={() => setIsPrivacyOpen(true)} />

      {/* Privacy Modal */}
      <PrivacyModal
        isOpen={isPrivacyOpen}
        onClose={() => setIsPrivacyOpen(false)}
      />

    </div>
  );
}
