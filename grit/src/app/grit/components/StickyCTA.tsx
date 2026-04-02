'use client';
import { useEffect, useState } from 'react';

export default function StickyCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const trigger = document.getElementById('social-proof-anchor');
    if (!trigger) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.1 }
    );
    observer?.observe(trigger);
    return () => observer?.disconnect();
  }, []);

  return (
    <div
      className={`sticky-cta fixed bottom-0 left-0 right-0 z-50 ${visible ? 'visible' : ''}`}
      style={{
        background: 'rgba(15,36,32,0.95)',
        backdropFilter: 'blur(12px)',
        borderTop: '1px solid rgba(46,196,182,0.2)',
      }}
    >
      <div className="max-w-6xl mx-auto px-5 py-3 flex items-center justify-between gap-4">
        <p className="text-fog/70 text-sm hidden sm:block">
          <span className="text-fog font-semibold">First week is free.</span> No card, no commitment.
        </p>
        <a
          href="#trial"
          className="btn-teal px-6 py-2.5 rounded-full text-sm font-bold ml-auto sm:ml-0 whitespace-nowrap"
        >
          Try a Free Week →
        </a>
      </div>
    </div>
  );
}