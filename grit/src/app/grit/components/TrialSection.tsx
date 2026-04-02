'use client';
import { useState } from 'react';

export default function TrialSection() {
  const [activeTime, setActiveTime] = useState<string>('dawn');
  const [formState, setFormState] = useState({ name: '', email: '', time: 'dawn' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const times = [
    { id: 'dawn', label: 'Dawn', sub: '06:00' },
    { id: 'midday', label: 'Midday', sub: '12:00' },
    { id: 'evening', label: 'Evening', sub: '18:30' },
  ];

  return (
    <section id="trial" className="py-24 px-5 relative overflow-hidden">
      {/* Background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at 50% 0%, rgba(46,196,182,0.08) 0%, transparent 65%)',
        }}
      />

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="divider-teal mb-16" />

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left: copy */}
          <div>
            <p className="text-teal text-xs uppercase tracking-[0.3em] font-semibold mb-4">
              No credit card. No commitment.
            </p>
            <h2 className="font-display text-4xl sm:text-5xl font-black text-fog leading-tight mb-5">
              Try a free week.<br />
              <span className="italic text-gold">Show up once.</span>
            </h2>
            <p className="text-fog/60 text-base leading-relaxed mb-8">
              Three fields. That's it. We'll send your session details, what to wear, and what to expect. You just have to show up — the cold air does the rest.
            </p>
            <ul className="space-y-3">
              {[
                'First session is completely free',
                'No gym kit required — just outdoor clothes',
                'Coach walkthrough before every new session',
                'Cancel anytime — no awkward calls',
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-fog/65 text-sm">
                  <svg className="w-4 h-4 text-teal flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Right: form */}
          <div className="stat-card rounded-3xl p-8">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="text-fog/50 text-xs uppercase tracking-widest block mb-2">First Name</label>
                  <input
                    type="text"
                    placeholder="Your first name"
                    required
                    className="grit-input w-full rounded-xl px-4 py-3 text-sm"
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  />
                </div>
                <div>
                  <label className="text-fog/50 text-xs uppercase tracking-widest block mb-2">Email</label>
                  <input
                    type="email"
                    placeholder="you@email.com"
                    required
                    className="grit-input w-full rounded-xl px-4 py-3 text-sm"
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  />
                </div>
                <div>
                  <label className="text-fog/50 text-xs uppercase tracking-widest block mb-3">Preferred Session</label>
                  <div className="grid grid-cols-3 gap-2">
                    {times.map((t) => (
                      <button
                        key={t.id}
                        type="button"
                        onClick={() => {
                          setActiveTime(t.id);
                          setFormState({ ...formState, time: t.id });
                        }}
                        className={`time-pill rounded-xl py-3 text-center transition-all ${activeTime === t.id ? 'active' : ''}`}
                      >
                        <p className="text-sm font-semibold">{t.label}</p>
                        <p className="text-xs opacity-60">{t.sub}</p>
                      </button>
                    ))}
                  </div>
                </div>
                <button type="submit" className="btn-teal w-full py-4 rounded-xl text-base font-bold mt-2">
                  Claim My Free Week →
                </button>
                <p className="text-fog/25 text-xs text-center">No spam. Just your session details.</p>
              </form>
            ) : (
              <div className="text-center py-8">
                <div className="w-16 h-16 rounded-full bg-teal/10 border border-teal/30 flex items-center justify-center mx-auto mb-5">
                  <svg className="w-8 h-8 text-teal" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="font-display text-2xl font-bold text-fog mb-2">You're in.</h3>
                <p className="text-fog/55 text-sm">Check your inbox — your {activeTime} session details are on their way.</p>
                <p className="text-teal text-xs font-semibold mt-4 uppercase tracking-widest">See you at the park. 🌿</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}