'use client';


interface Props {
  onSelect: (barrier: 'time' | 'motivation' | 'beginner') => void;
  selected: string | null;
}

const options = [
  {
    id: 'time' as const,
    emoji: '⏰',
    label: 'Too busy',
    sub: "My schedule is packed",
    detail: 'Sessions start at 5 minutes. Perfect for coffee breaks.',
    color: 'var(--coral)',
  },
  {
    id: 'motivation' as const,
    emoji: '🧘',
    label: 'Mind wanders',
    sub: 'I can\'t stay focused',
    detail: 'Our guides bring you back gently, every time. No judgment.',
    color: 'var(--lavender)',
  },
  {
    id: 'beginner' as const,
    emoji: '�',
    label: 'Never tried',
    sub: 'I wouldn\'t know where to start',
    detail: 'Begin with 1-minute breathing. We\'ll build from there together.',
    color: 'var(--mist)',
  },
];

export default function QuizSection({ onSelect, selected }: Props) {
  return (
    <section id="quiz" className="py-24 px-5 relative overflow-hidden">
      {/* Atmospheric blob */}
      <div
        className="absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse, rgba(255,107,107,0.06) 0%, transparent 70%)',
        }}
      />

      <div className="max-w-3xl mx-auto text-center relative z-10">
        <p className="text-coral text-xs uppercase tracking-[0.3em] font-semibold mb-6 reveal visible">
          Discover your practice
        </p>
        <h2 className="font-display text-4xl sm:text-5xl font-black text-mist leading-tight mb-4 reveal visible">
          What's holding you back?
        </h2>
        <p className="text-mist/50 text-base mb-14 reveal visible reveal-delay-1">
          Tap one. Your journey awaits.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {options.map((opt, i) => (
            <button
              key={opt.id}
              onClick={() => onSelect(opt.id)}
              className={`quiz-card glass-card card-3d rounded-2xl p-6 text-left reveal visible reveal-delay-${i + 1} ${
                selected === opt.id ? 'selected' : ''
              }`}
              style={{ background: 'rgba(248,250,252,0.03)' }}
            >
              <span className="text-4xl block mb-4">{opt.emoji}</span>
              <h3
                className="font-display text-xl font-bold mb-1"
                style={{ color: selected === opt.id ? opt.color : 'var(--mist)' }}
              >
                {opt.label}
              </h3>
              <p className="text-mist/50 text-sm mb-3">{opt.sub}</p>
              {selected === opt.id && (
                <p className="text-sm font-medium" style={{ color: opt.color }}>
                  {opt.detail}
                </p>
              )}
              {selected !== opt.id && (
                <div className="flex items-center gap-1 text-xs text-mist/30 font-medium mt-2">
                  <span>Tap to see</span>
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              )}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}