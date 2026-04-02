'use client';
import AppImage from '@/components/ui/AppImage';

const members = [
{
  name: 'Tom V.',
  role: 'Software Engineer',
  weeks: 22,
  quote: 'I used to pay £80/month for a gym I visited twice. Now I\'m outside every dawn, and I actually look forward to it.',
  img: "https://img.rocket.new/generatedImages/rocket_gen_img_1510cb786-1768584691833.png",
  alt: 'Tom, a software engineer member, in athletic wear smiling after an outdoor workout session',
  stat: '22 weeks',
  statLabel: 'no missed sessions'
},
{
  name: 'Leila M.',
  role: 'New parent · 8 months postpartum',
  weeks: 14,
  quote: 'Thirty minutes before my daughter wakes up. That half hour is mine. Grit gave it back to me.',
  img: "https://img.rocket.new/generatedImages/rocket_gen_img_19677906c-1766857923546.png",
  alt: 'Leila, a new parent member, smiling in workout clothes in a park setting',
  stat: '14 weeks',
  statLabel: 'dawn sessions'
},
{
  name: 'Andre B.',
  role: 'Former college athlete',
  weeks: 31,
  quote: 'The competitive fire never went out. I just needed somewhere to point it. This is that place.',
  img: "https://images.unsplash.com/photo-1603578280410-9552d4d26936",
  alt: 'Andre, a former college athlete member, performing an outdoor exercise in a green park',
  stat: '31 weeks',
  statLabel: 'personal records'
}];


const logos = [
'The Guardian', 'Time Out', 'Men\'s Health', 'Runner\'s World', 'Well+Good',
'The Guardian', 'Time Out', 'Men\'s Health', 'Runner\'s World', 'Well+Good'];


export default function SocialProofSection() {
  return (
    <section className="py-20 px-5 relative overflow-hidden">
      {/* Glow */}
      <div
        className="absolute bottom-0 right-0 w-96 h-96 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(228,179,99,0.06) 0%, transparent 70%)' }} />
      

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="divider-teal mb-16" />

        <p className="text-fog/40 text-xs uppercase tracking-[0.3em] font-semibold mb-4 text-center">
          Real members · Real mud
        </p>
        <h2 className="font-display text-4xl sm:text-5xl font-black text-fog text-center leading-tight mb-14">
          The numbers don't lie.<br />
          <span className="italic text-gold">Neither do the people.</span>
        </h2>

        {/* Stats row */}
        <div className="grid grid-cols-3 gap-4 mb-14">
          {[
          { n: '847', label: 'Active members', color: 'var(--teal)' },
          { n: '6am', label: 'Dawn crew size: 24 avg', color: 'var(--gold)' },
          { n: '94%', label: 'Re-book after trial', color: 'var(--teal)' }].
          map((s) =>
          <div key={s.label} className="stat-card rounded-2xl p-5 text-center">
              <p className="font-display text-3xl sm:text-4xl font-black mb-1" style={{ color: s.color }}>{s.n}</p>
              <p className="text-fog/45 text-xs">{s.label}</p>
            </div>
          )}
        </div>

        {/* Member cards */}
        <div className="grid sm:grid-cols-3 gap-5 mb-16">
          {members.map((m) =>
          <div key={m.name} className="stat-card rounded-2xl overflow-hidden group">
              <div className="relative h-44 overflow-hidden">
                <AppImage
                src={m.img}
                alt={m.alt}
                fill
                className="object-cover member-photo" />
              
                <div className="absolute inset-0 bg-gradient-to-t from-forest-deep/90 to-transparent" />
                <div className="absolute bottom-3 left-3 flex items-center gap-2">
                  <span className="text-teal text-xs font-black">{m.stat}</span>
                  <span className="text-fog/40 text-xs">{m.statLabel}</span>
                </div>
              </div>
              <div className="p-5">
                <p className="text-fog/65 text-sm italic leading-relaxed mb-4">"{m.quote}"</p>
                <div>
                  <p className="text-fog text-sm font-semibold">{m.name}</p>
                  <p className="text-fog/40 text-xs">{m.role}</p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Press marquee */}
        <div className="relative overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-forest to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-forest to-transparent z-10 pointer-events-none" />
          <div className="marquee-track flex items-center gap-12 py-2">
            {logos.map((logo, i) =>
            <span key={i} className="text-fog/20 text-sm font-semibold uppercase tracking-widest whitespace-nowrap hover:text-fog/50 transition-colors cursor-default">
                {logo}
              </span>
            )}
          </div>
        </div>
      </div>
    </section>);

}