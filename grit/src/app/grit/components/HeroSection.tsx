'use client';
import { useEffect, useRef } from 'react';
import AppImage from '@/components/ui/AppImage';

export default function HeroSection() {
  const imgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => {
      if (!imgRef?.current) return;
      const y = window.scrollY;
      imgRef.current.style.transform = `translateY(${y * 0.3}px)`;
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col justify-end overflow-hidden">
      {/* Background parallax image */}
      <div ref={imgRef} className="absolute inset-0 scale-110 hero-img">
        <AppImage
          src="https://images.unsplash.com/photo-1544367567-0f2f71534b04?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
          alt="Person meditating peacefully at sunrise on a mountain peak with soft morning light"
          fill
          className="object-cover object-center"
          priority />
        
        <div className="absolute inset-0 bg-gradient-to-t from-midnight-deep via-midnight/60 to-midnight/20" />
        <div className="absolute inset-0 bg-gradient-to-r from-midnight-deep/40 to-transparent" />
      </div>

      {/* Fog top edge */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-midnight-deep/80 to-transparent pointer-events-none" />

      {/* Hero content */}
      <div className="relative z-10 max-w-6xl mx-auto px-5 pb-20 pt-28 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-end">

          {/* Left: Headline */}
          <div className="fog-reveal">
            <p className="text-coral text-xs font-semibold uppercase tracking-[0.3em] mb-4">
              Daily Mindfulness · Sunrise · Anytime, Anywhere
            </p>
            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-black text-mist leading-[0.92] tracking-tight mb-6">
              Stillness is the{' '}
              <span className="italic text-lavender">superpower.</span>
            </h1>
            <p className="text-mist/70 text-lg font-light leading-relaxed max-w-md mb-8">
              Guided breathing. Body scans. Meditation between meetings.
              Quiet moments and people who actually understand.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="#quiz"
                className="btn-coral px-7 py-3.5 rounded-full text-base font-bold inline-flex items-center gap-2">
                
                Start Free Trial
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </a>
              <a
                href="#pdf"
                className="px-7 py-3.5 rounded-full text-base font-semibold border border-mist/20 text-mist/80 hover:border-mist/40 hover:text-mist transition-all">
                
                Free Meditation Guide
              </a>
            </div>
          </div>

          {/* Right: Testimonial card */}
          <div className="flex justify-center lg:justify-end">
            <TestimonialCard />
          </div>
        </div>

        {/* Scroll nudge */}
        <div className="mt-16 flex items-center gap-3 text-mist/30 text-xs uppercase tracking-widest">
          <div className="w-6 h-6 rounded-full border border-mist/20 flex items-center justify-center breathe">
            <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </div>
          Scroll to begin your journey
        </div>
      </div>
    </section>);

}

function TestimonialCard() {
  return (
    <div className="testimonial-card glass-card card-3d rounded-2xl overflow-hidden w-72">
      {/* Photo */}
      <div className="relative h-52 overflow-hidden">
        <div className="scan-line" />
        <AppImage
          src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
          alt="Sarah, an Aura member smiling peacefully during a guided meditation session in a calm garden setting"
          fill
          className="object-cover member-photo" />
        
        {/* Rain speckle overlay */}
        <div
          className="absolute inset-0 opacity-20 pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.6) 1px, transparent 1px)`,
            backgroundSize: '18px 22px'
          }} />
        
        <div className="absolute inset-0 bg-gradient-to-t from-midnight-light/80 to-transparent" />

        {/* Badge */}
        <div className="absolute top-3 right-3 bg-coral/90 text-midnight-deep text-[10px] font-black uppercase tracking-widest px-2.5 py-1 rounded-full">
          8 weeks in
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        <p className="text-mist text-sm font-light leading-snug italic mb-3">
          "I used to check my phone first thing. Now I check in with myself first."
        </p>
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-full bg-coral/20 border border-coral/30 flex items-center justify-center text-coral text-[10px] font-bold">
            SR
          </div>
          <div>
            <p className="text-mist text-xs font-semibold">Sarah R.</p>
            <p className="text-mist/40 text-[10px]">Product Designer · San Francisco</p>
          </div>
        </div>
      </div>
    </div>);

}