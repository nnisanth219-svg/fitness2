'use client';
import { useState } from 'react';

export default function PDFSection() {
  const [email, setEmail] = useState('');
  const [done, setDone] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setDone(true);
  };

  return (
    <section id="pdf" className="py-16 px-5">
      <div className="max-w-3xl mx-auto">
        <div
          className="rounded-3xl p-8 sm:p-10 relative overflow-hidden"
          style={{
            background: 'linear-gradient(135deg, rgba(228,179,99,0.08) 0%, rgba(46,196,182,0.05) 100%)',
            border: '1px solid rgba(228,179,99,0.15)',
          }}
        >
          {/* Decorative */}
          <div
            className="absolute -top-10 -right-10 w-40 h-40 rounded-full pointer-events-none"
            style={{ background: 'radial-gradient(ellipse, rgba(228,179,99,0.12) 0%, transparent 70%)' }}
          />

          <div className="grid sm:grid-cols-2 gap-8 items-center relative z-10">
            <div>
              <span className="text-gold text-xs uppercase tracking-[0.3em] font-semibold">Not ready to show up?</span>
              <h3 className="font-display text-3xl font-black text-fog mt-2 mb-3 leading-tight">
                Download this week's<br />
                <span className="italic text-gold">park workout. Free.</span>
              </h3>
              <p className="text-fog/55 text-sm leading-relaxed">
                A full 30-minute outdoor session you can do alone, any park, any time. No equipment. No excuses. We'll send it straight to your inbox — and yes, that's the whole thing, no catch.
              </p>
            </div>

            {!done ? (
              <form onSubmit={handleSubmit} className="space-y-3">
                <input
                  type="email"
                  placeholder="Your email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="grit-input w-full rounded-xl px-4 py-3 text-sm"
                />
                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl font-bold text-sm transition-all"
                  style={{
                    background: 'var(--gold)',
                    color: 'var(--forest-deep)',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.background = 'var(--gold-dark)')}
                  onMouseLeave={(e) => (e.currentTarget.style.background = 'var(--gold)')}
                >
                  Send Me the Workout PDF →
                </button>
                <p className="text-fog/25 text-xs text-center">One email. Your PDF. Done.</p>
              </form>
            ) : (
              <div className="text-center py-4">
                <p className="text-gold text-2xl font-display font-bold mb-2">🌿 On its way.</p>
                <p className="text-fog/55 text-sm">Check your inbox. Your park workout is ready to go.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}