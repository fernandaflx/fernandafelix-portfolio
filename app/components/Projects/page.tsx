import { ArrowRight, Eye, Code2 } from 'lucide-react'

export default function Projects() {
  return (
    <section className="w-full py-24 px-4 relative z-10" id="projects">
      <div className="max-w-7xl mx-auto">

        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6 bg-background-card/50 p-6 rounded-lg">
          <div>
            <h2 className="font-display text-4xl md:text-6xl font-bold text-white mb-2">
              Projetos em <br /> 
              <span className="text-gradient">Destaque</span>
            </h2>
          </div>
          <a
            className="group flex items-center gap-2 text-white border-b border-white pb-1 hover:text-accent-primary hover:border-accent-primary transition-all"
            href="https://github.com/fernandaflx"
            target="_blank"
            rel="noopener noreferrer"
          >
            Veja mais no GitHub
            <ArrowRight className="text-lg transition-transform group-hover:translate-x-1" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative">
          {/* Card 1 */}
          <div className="group relative rounded-2xl overflow-hidden bg-background-card border border-white/5 md:col-span-2 lg:col-span-1 h-100 lg:h-125">
            <div className="absolute inset-0 overflow-hidden duotone-primary-secondary">
              <div
                className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110 relative"
                style={{
                  backgroundImage:
                    "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDBk1qaz64Ps2arktpIS6ZVDx63Dllyw9MK5p9gx377NPnURHmA6kh8FLziVW-_XH8oELfomNl95tcJRwOfSrUihKGJjd7EAabdrjvuqaqrVwGe7m6_8uUJgSTkdp8SbrdUdmlQRrofl9eK836gtLjDbeY0I0WGxt9D1vZzS6x8KNKeFIDI9ze26dodD2JGJMJJ5MIbKCa3c0Oo4WD0sk3_IOBijH8Y-j9Ish-ySH2KGJFE6BqEMKtYYZ5XABGkx89DWXnxVHoyT70')",
                }}
              >
                <div className="absolute inset-0 z-10 clip-path-polygon-[10%_0%,_100%_0%,_90%_100%,_0%_100%] bg-linear-to-br from-accent-primary to-accent-secondary opacity-70 group-hover:opacity-90 transition-opacity duration-300" />
                <img
                  alt="Finance Dashboard Project"
                  className="absolute inset-0 w-full h-full object-cover mix-blend-screen opacity-70"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDBk1qaz64Ps2arktpIS6ZVDx63Dllyw9MK5p9gx377NPnURHmA6kh8FLziVW-_XH8oELfomNl95tcJRwOfSrUihKGJjd7EAabdrjvuqaqrVwGe7m6_8uUJgSTkdp8SbrdUdmlQRrofl9eK836gtLjDbeY0I0WGxt9D1vZzS6x8KNKeFIDI9ze26dodD2JGJMJJ5MIbKCa3c0Oo4WD0sk3_IOBijH8Y-j9Ish-ySH2KGJFE6BqEMKtYYZ5XABGkx89DWXnxVHoyT70"
                />
              </div>
              <div className="absolute inset-0 bg-linear-to-t from-bg via-bg/60 to-transparent opacity-90 transition-opacity duration-300 z-20" />
            </div>

            <div className="absolute bottom-0 left-0 p-8 md:p-12 w-full z-30 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
              <div className="flex items-center gap-4 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                <span className="px-3 py-1 text-xs font-bold border border-white/20 rounded-full text-white bg-black/50 backdrop-blur-md">
                  React
                </span>
                <span className="px-3 py-1 text-xs font-bold border border-white/20 rounded-full text-white bg-black/50 backdrop-blur-md">
                  Dashboard
                </span>
              </div>
              <h3 className="font-display text-3xl md:text-4xl font-bold text-white mb-2">
                Finance Dashboard
              </h3>
              <p className="text-text text-base max-w-md line-clamp-2 mb-6 group-hover:text-white transition-colors">
                Painel administrativo completo com visualização de dados em tempo real e relatórios complexos.
              </p>
              <div className="flex gap-4">
                <button className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center hover:bg-accent-primary hover:text-white transition-colors">
                  <Eye className="w-5 h-5" />
                </button>
                <button className="w-12 h-12 rounded-full border border-white/30 text-white flex items-center justify-center hover:bg-white hover:text-black transition-colors">
                  <Code2 className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="group relative rounded-2xl overflow-hidden bg-background-card border border-white/5 h-100 lg:h-125">
            <div className="absolute inset-0 overflow-hidden duotone-tertiary-secondary">
              <div
                className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110 relative"
                style={{
                  backgroundImage:
                    "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBY_0pbWeQf8bzbj3ls_2IRmvSQDTws9MvSsjDfJQByCjbkbI0JKI0kUOE7z2vBkR6q_s2cqQZSxpjRkuKCK6CS4fexs4q00SFR0hLiYZZ4iq3xAlyoZRvHidN0G8KjlUZR6rRJcojOaT-r0C3i1QQ21d3A92gKVXmSkc-OOeZRPaNJusAt3lzs9a_tY26pC26pwxuUi0408eKp3n_dpv5vAD_nxxc536bNuNuXirbGRDvvjJvUeUF0NtiikS39Az_cYZER_gIuM9M')",
                }}
              >
                <div className="absolute inset-0 z-10 clip-path-polygon-[20%_0%,_80%_0%,_100%_100%,_0%_100%] bg-linear-to-br from-accent-tertiary to-accent-secondary opacity-70 group-hover:opacity-90 transition-opacity duration-300" />
                <img
                  alt="Mobile E-commerce Project"
                  className="absolute inset-0 w-full h-full object-cover mix-blend-screen opacity-70"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBY_0pbWeQf8bzbj3ls_2IRmvSQDTws9MvSsjDfJQByCjbkbI0JKI0kUOE7z2vBkR6q_s2cqQZSxpjRkuKCK6CS4fexs4q00SFR0hLiYZZ4iq3xAlyoZRvHidN0G8KjlUZR6rRJcojOaT-r0C3i1QQ21d3A92gKVXmSkc-OOeZRPaNJusAt3lzs9a_tY26pC26pwxuUi0408eKp3n_dpv5vAD_nxxc536bNuNuXirbGRDvvjJvUeUF0NtiikS39Az_cYZER_gIuM9M"
                />
              </div>
              <div className="absolute inset-0 bg-linear-to-t from-bg via-bg/40 to-transparent opacity-90 transition-opacity duration-300 z-20" />
            </div>
            <div className="absolute bottom-0 left-0 p-8 w-full z-30">
              <h3 className="font-display text-2xl md:text-3xl font-bold text-white mb-2">
                Mobile E-commerce
              </h3>
              <p className="text-text text-sm mb-6 line-clamp-2">
                Experiência de compra fluida e otimizada para mobile.
              </p>
              <div className="flex gap-3 translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                <a className="text-sm font-bold text-accent-tertiary hover:underline" href="#">
                  Ver Detalhes
                </a>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="group relative rounded-2xl overflow-hidden bg-background-card border border-white/5 h-100 lg:h-125">
            <div className="absolute inset-0 overflow-hidden duotone-primary-secondary">
              <div
                className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110 relative"
                style={{
                  backgroundImage:
                    "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAXtXDWsj_VFXNLEaZHiUnyzvWCT10JsAPNJQJGmSCk9UQM8Ecq_OQv90ca7HDlVy_x8aOatJe-1u5wo58yNhObHFCPHhIib2ZQELCe5-mwq7oFPvN39xwKYMONlHCd-6WAtmfw5GVxFsG6Vq5258HPrQgKRBI1jz4Tvk-sY1m9h867Zf8qStDbf4RHti-bPW9yqqWC888OZVN6GMMdDSDNsFEZu7oNVCFojB6tu7kU7hItxozmsj1zZRr6DFtUtvCdBHbbyh_o_aQ')",
                }}
              >
                <div className="absolute inset-0 z-10 clip-path-polygon-[0%_0%,_70%_10%,_100%_40%,_30%_100%,_0%_70%] bg-linear-to-br from-accent-primary to-accent-secondary opacity-70 group-hover:opacity-90 transition-opacity duration-300" />
                <img
                  alt="Weather Forecast Project"
                  className="absolute inset-0 w-full h-full object-cover mix-blend-screen opacity-70"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAXtXDWsj_VFXNLEaZHiUnyzvWCT10JsAPNJQJGmSCk9UQM8Ecq_OQv90ca7HDlVy_x8aOatJe-1u5wo58yNhObHFCPHhIib2ZQELCe5-mwq7oFPvN39xwKYMONlHCd-6WAtmfw5GVxFsG6Vq5258HPrQgKRBI1jz4Tvk-sY1m9h867Zf8qStDbf4RHti-bPW9yqqWC888OZVN6GMMdDSDNsFEZu7oNVCFojB6tu7kU7hItxozmsj1zZRr6DFtUtvCdBHbbyh_o_aQ"
                />
              </div>
              <div className="absolute inset-0 bg-linear-to-t from-bg via-bg/40 to-transparent opacity-90 transition-opacity duration-300 z-20" />
            </div>
            <div className="absolute bottom-0 left-0 p-8 w-full z-30">
              <h3 className="font-display text-2xl md:text-3xl font-bold text-white mb-2">
                Weather Forecast
              </h3>
              <p className="text-text text-sm mb-6 line-clamp-2">
                App de clima minimalista consumindo API em tempo real.
              </p>
              <div className="flex gap-3 translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                <a className="text-sm font-bold text-accent-tertiary hover:underline" href="#">
                  Ver Detalhes
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
