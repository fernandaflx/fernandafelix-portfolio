export default function NavBar() {
  const items = [
    { label: 'Sobre mim', href: '#about' },
    { label: 'Jornada', href: '#journey' },
    { label: 'Projetos', href: '#projects' },
  ]

  return (
    <nav className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4">
      <div className="glass-panel rounded-full px-6 py-3 flex items-center gap-4 shadow-2xl shadow-accent-primary/5">
        {/* TODO: Logo */}
        <a className="flex items-center gap-2 group cursor-pointer" href="#">
          <span className="font-bold text-gradient text-4xl">{'{'}</span>
          <span className="font-bold text-white text-2xl">F</span>
          <span className="font-bold  text-gradient text-4xl">{'}'}</span>

        </a>
        <div className="hidden md:flex items-center gap-1 p-1">
          {items.map(({ label, href }) => (
            <a
              key={href}
              className="px-4 py-1.5 rounded-full text-sm font-medium hover:text-white hover:bg-white/10 transition-all"
              href={href}
            >
              {label}
            </a>
          ))}
        </div>
        <a className="relative inline-flex h-9 overflow-hidden rounded-full p-px focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50" href="#contact">
          <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]"></span>
          <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-5 py-1 text-xs font-medium text-white backdrop-blur-3xl transition-colors hover:bg-slate-900">
            Vamos conversar
          </span>
        </a>
      </div>
    </nav>

  )
}
