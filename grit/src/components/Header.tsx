'use client';
import { useState, useEffect } from 'react';
import AppLogo from '@/components/ui/AppLogo';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-midnight-deep/90 backdrop-blur-md border-b border-mist/5 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-5 flex items-center justify-between">
        <AppLogo
          text="AURA"
          size={32}
          iconName="SparklesIcon"
          className="text-mist font-display font-black tracking-widest text-lg"
        />
        <a
          href="#trial"
          className="btn-coral px-5 py-2 rounded-full text-sm font-semibold"
        >
          Start Free Trial
        </a>
      </div>
    </header>
  );
}