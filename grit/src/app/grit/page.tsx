'use client';
import { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from './components/HeroSection';
import QuizSection from './components/QuizSection';
import PersonaSection from './components/PersonaSection';
import SocialProofSection from './components/SocialProofSection';
import TrialSection from './components/TrialSection';
import PDFSection from './components/PDFSection';
import StickyCTA from './components/StickyCTA';

export default function GritPage() {
  const [barrier, setBarrier] = useState<'time' | 'motivation' | 'beginner' | null>(null);

  // Scroll reveal observer
  useEffect(() => {
    const elements = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );
    elements?.forEach((el) => observer?.observe(el));
    return () => observer?.disconnect();
  }, [barrier]); // re-run when barrier changes to catch new elements

  return (
    <div className="grain min-h-screen bg-midnight gradient-3d-bg">
      {/* Floating 3D Particles */}
      <div className="floating-particles">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`
            }}
          />
        ))}
      </div>
      
      {/* Atmospheric Overlay */}
      <div className="atmosphere-overlay" />
      <Header />

      <main>
        <HeroSection />

        <QuizSection onSelect={setBarrier} selected={barrier} />

        {barrier && <PersonaSection barrier={barrier} />}

        {/* Social proof anchor for sticky CTA trigger */}
        <div id="social-proof-anchor" />
        <SocialProofSection />

        <TrialSection />

        <PDFSection />
      </main>

      <Footer />
      <StickyCTA />
    </div>
  );
}