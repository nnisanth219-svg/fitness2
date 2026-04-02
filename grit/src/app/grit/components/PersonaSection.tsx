'use client';
import { useEffect, useRef } from 'react';
import AppImage from '@/components/ui/AppImage';

interface Props {
  barrier: 'time' | 'motivation' | 'beginner' | null;
}

export default function PersonaSection({ barrier }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (barrier && ref.current) {
      setTimeout(() => {
        ref.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);
    }
  }, [barrier]);

  if (!barrier) return null;

  return (
    <div ref={ref} className="relative">
      {barrier === 'time' && <TimePanel />}
      {barrier === 'motivation' && <MotivationPanel />}
      {barrier === 'beginner' && <BeginnerPanel />}
    </div>);

}

/* ─── TIME PANEL ─── */
function TimePanel() {
  const schedule = [
  { time: '06:00', label: 'Dawn', spots: 3, tag: 'Most popular' },
  { time: '12:00', label: 'Midday', spots: 6, tag: '' },
  { time: '18:30', label: 'Evening', spots: 4, tag: '' }];


  return (
    <section className="py-20 px-5 bg-midnight-light/20">
      <div className="max-w-5xl mx-auto">
        <div className="divider-coral mb-16" />

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-coral text-xs uppercase tracking-[0.3em] font-semibold mb-4">
              For the time-starved
            </p>
            <h2 className="font-display text-4xl sm:text-5xl font-black text-mist leading-tight mb-5">
              5 minutes.<br />
              <span className="italic text-lavender">Zero excuses.</span>
            </h2>
            <p className="text-mist/60 text-base leading-relaxed mb-8">
              Every session is designed for your busy life. Breathing, body scan, moment of presence — structured so you're back to your day with clarity to spare. No fluff. No equipment. Just peace.
            </p>

            {/* Mini session breakdown */}
            <div className="space-y-3 mb-8">
              {[
              { label: 'Center breathing', mins: 1, color: 'var(--coral)' },
              { label: 'Body scan', mins: 3, color: 'var(--lavender)' },
              { label: 'Mindful moment', mins: 1, color: 'var(--coral)' }].
              map((block) =>
              <div key={block.label} className="flex items-center gap-3">
                  <div
                  className="h-2 rounded-full flex-shrink-0 transition-all duration-700"
                  style={{
                    width: `${block.mins / 5 * 100}%`,
                    maxWidth: 200,
                    background: block.color
                  }} />
                
                  <span className="text-mist/60 text-sm">
                    {block.mins} min — {block.label}
                  </span>
                </div>
              )}
            </div>

            <a href="#trial" className="btn-coral px-7 py-3.5 rounded-full text-sm font-bold inline-flex items-center gap-2">
              Start your first session
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </a>
          </div>

          {/* Schedule grid */}
          <div className="space-y-3">
            <p className="text-mist/40 text-xs uppercase tracking-widest mb-5">Today's session times</p>
            {schedule.map((slot) =>
            <div
              key={slot.time}
              className="stat-card rounded-xl p-5 flex items-center justify-between group hover:border-coral/30 transition-all">
              
                <div className="flex items-center gap-4">
                  <span className="font-display text-2xl font-bold text-mist">{slot.time}</span>
                  <div>
                    <p className="text-mist text-sm font-semibold">{slot.label} Session</p>
                    <p className="text-mist/40 text-xs">{slot.spots} spots left</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  {slot.tag &&
                <span className="text-[10px] bg-coral/10 text-coral border border-coral/20 px-2 py-0.5 rounded-full font-semibold uppercase tracking-wide">
                      {slot.tag}
                    </span>
                }
                  <div className="w-8 h-8 rounded-full border border-mist/15 flex items-center justify-center group-hover:border-coral group-hover:bg-coral/10 transition-all">
                    <svg className="w-4 h-4 text-mist/40 group-hover:text-coral transition-colors" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            )}
            <p className="text-mist/30 text-xs text-center pt-2">Syncs with Google Calendar & Apple Calendar</p>
          </div>
        </div>
      </div>
    </section>);

}

/* ─── MOTIVATION PANEL ─── */
function MotivationPanel() {
  const streaks = [
  { name: 'Marcus T.', weeks: 18, streak: [true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true], note: 'Former skeptic. Found his calm.' },
  { name: 'Priya S.', weeks: 12, streak: [true, true, true, false, true, true, true, true, true, true, true, true], note: 'New mom. Morning practice. Unshakeable.' },
  { name: 'James K.', weeks: 9, streak: [true, true, true, true, false, false, true, true, true], note: 'Desk-bound since 2019. Not anymore.' }];


  return (
    <section className="py-20 px-5">
      <div className="max-w-5xl mx-auto">
        <div className="divider-coral mb-16" />

        <div className="text-center mb-14">
          <p className="text-lavender text-xs uppercase tracking-[0.3em] font-semibold mb-4">
            For the focus-seekers
          </p>
          <h2 className="font-display text-4xl sm:text-5xl font-black text-mist leading-tight mb-4">
            You don't need motivation.<br />
            <span className="italic text-coral">You need the daily ritual.</span>
          </h2>
          <p className="text-mist/55 text-base max-w-xl mx-auto">
            Motivation is temporary. Ritual is forever. These are real members. Real streaks. Real reasons they keep showing up.
          </p>
        </div>

        <div className="grid sm:grid-cols-3 gap-5">
          {streaks.map((member) =>
          <div key={member.name} className="stat-card rounded-2xl p-6">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <p className="text-mist font-semibold text-sm">{member.name}</p>
                  <p className="text-mist/40 text-xs">{member.weeks} days straight</p>
                </div>
                <span className="text-lavender font-display text-2xl font-black">{member.weeks}</span>
              </div>

              {/* Streak dots */}
              <div className="flex flex-wrap gap-1.5 mb-4">
                {member.streak.map((hit, i) =>
              <div
                key={i}
                className={`streak-dot ${hit ? i === member.streak.length - 1 ? 'lavender' : 'active' : ''}`} />

              )}
              </div>

              <p className="text-mist/50 text-xs italic">{member.note}</p>
            </div>
          )}
        </div>

        <div className="mt-12 text-center">
          <p className="text-mist/40 text-sm mb-6">Your streak starts on day one. We track it so you don't have to.</p>
          <a href="#trial" className="btn-coral px-7 py-3.5 rounded-full text-sm font-bold inline-flex items-center gap-2 mx-auto">
            Join the practice — first week free
          </a>
        </div>
      </div>
    </section>);

}

/* ─── BEGINNER PANEL ─── */
function BeginnerPanel() {
  const guides = [
  {
    name: 'Guide Maya',
    cert: 'MBSR Teacher · 8 years',
    specialty: 'Breathwork foundations',
    img: "https://images.unsplash.com/photo-1494790108755-2616b332c5ca?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    alt: 'Guide Maya, a mindfulness teacher smiling peacefully in a calm setting',
    quote: 'No one is a beginner for long. You just haven\'t begun yet.'
  },
  {
    name: 'Guide Kai',
    cert: 'RYT-500 · 6 years',
    specialty: 'Body scan techniques',
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    alt: 'Guide Kai, a meditation teacher demonstrating breathing techniques',
    quote: 'The hardest breath is the one you almost didn\'t take. I\'ll be there for that one.'
  }];


  const practices = ['Box Breathing', 'Body Scan', 'Loving Kindness', 'Mindful Walking', 'Progressive Relaxation'];

  return (
    <section className="py-20 px-5 bg-midnight-light/15">
      <div className="max-w-5xl mx-auto">
        <div className="divider-coral mb-16" />

        <div className="text-center mb-14">
          <p className="text-mist/50 text-xs uppercase tracking-[0.3em] font-semibold mb-4">
            For the first-timers
          </p>
          <h2 className="font-display text-4xl sm:text-5xl font-black text-mist leading-tight mb-4">
            No one is left behind<br />
            <span className="italic text-coral">without a gentle guide.</span>
          </h2>
          <p className="text-mist/55 text-base max-w-xl mx-auto">
            Every new member gets a welcome session. Every technique is explained before it's practiced. Our guides teach; they don't just lead silence.
          </p>
        </div>

        {/* Guide cards */}
        <div className="grid sm:grid-cols-2 gap-6 mb-14">
          {guides.map((guide) =>
          <div key={guide.name} className="coach-card rounded-2xl overflow-hidden">
              <div className="relative h-52">
                <AppImage
                src={guide.img}
                alt={guide.alt}
                fill
                className="object-cover object-top member-photo" />
              
                <div className="absolute inset-0 bg-gradient-to-t from-midnight-deep/90 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <p className="text-mist font-display font-bold text-lg">{guide.name}</p>
                  <p className="text-coral text-xs font-semibold">{guide.cert}</p>
                </div>
              </div>
              <div className="p-5">
                <p className="text-lavender text-xs font-semibold uppercase tracking-wide mb-2">{guide.specialty}</p>
                <p className="text-mist/65 text-sm italic leading-relaxed">"{guide.quote}"</p>
              </div>
            </div>
          )}
        </div>

        {/* Practice tutorial list */}
        <div className="stat-card rounded-2xl p-6">
          <p className="text-mist/40 text-xs uppercase tracking-widest mb-4">Practices we'll teach you — step by step</p>
          <div className="flex flex-wrap gap-2">
            {practices.map((practice) =>
            <span
              key={practice}
              className="px-4 py-2 rounded-full border border-mist/10 text-mist/70 text-sm font-medium hover:border-coral/40 hover:text-coral transition-all cursor-default">
              
                {practice}
              </span>
            )}
          </div>
          <p className="text-mist/30 text-xs mt-4">Each available as a short guided audio in your member portal before your first session.</p>
        </div>

        <div className="mt-10 text-center">
          <a href="#trial" className="btn-coral px-7 py-3.5 rounded-full text-sm font-bold inline-flex items-center gap-2 mx-auto">
            Start with a free week
          </a>
        </div>
      </div>
    </section>);

}