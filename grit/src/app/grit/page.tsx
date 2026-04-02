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
        {[...Array(20)].map((_, i) => {
          // Use deterministic positions based on index to avoid hydration mismatch
          const positions = [
            { left: '10%', top: '20%', delay: '0s' },
            { left: '25%', top: '15%', delay: '0.5s' },
            { left: '40%', top: '30%', delay: '1s' },
            { left: '60%', top: '25%', delay: '1.5s' },
            { left: '75%', top: '40%', delay: '2s' },
            { left: '85%', top: '60%', delay: '2.5s' },
            { left: '70%', top: '75%', delay: '3s' },
            { left: '50%', top: '80%', delay: '3.5s' },
            { left: '30%', top: '70%', delay: '4s' },
            { left: '15%', top: '55%', delay: '4.5s' },
            { left: '5%', top: '45%', delay: '5s' },
            { left: '20%', top: '35%', delay: '5.5s' },
            { left: '35%', top: '50%', delay: '6s' },
            { left: '55%', top: '65%', delay: '6.5s' },
            { left: '80%', top: '30%', delay: '7s' },
            { left: '65%', top: '20%', delay: '7.5s' },
            { left: '45%', top: '45%', delay: '8s' },
            { left: '25%', top: '60%', delay: '8.5s' },
            { left: '90%', top: '50%', delay: '9s' },
            { left: '75%', top: '85%', delay: '9.5s' }
          ];
          
          const pos = positions[i % positions.length];
          
          return (
            <div
              key={i}
              className="particle"
              style={{
                left: pos.left,
                top: pos.top,
                animationDelay: pos.delay
              }}
            />
          );
        })}
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