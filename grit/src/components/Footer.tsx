export default function Footer() {
  return (
    <footer className="border-t border-mist/10 py-8 px-5">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-mist/40">
        <span className="font-display font-semibold text-mist/60 tracking-widest text-xs uppercase">
          Aura
        </span>
        <div className="flex items-center gap-6 text-xs font-medium">
          <a href="#" className="hover:text-mist transition-colors">Privacy</a>
          <a href="#" className="hover:text-mist transition-colors">Terms</a>
          <a href="#" className="hover:text-mist transition-colors">Contact</a>
        </div>
        <span className="text-xs">© 2026 Aura Mindfulness</span>
      </div>
    </footer>
  );
}