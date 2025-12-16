
import { ChevronDown, MoveRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="w-full min-h-screen flex flex-col justify-center items-center px-4 relative pt-24">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <div className="flex flex-col gap-6 order-2 lg:order-1 relative">

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-accent-primary/30 bg-accent-primary/10 w-fit" >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-primary"></span>
            </span>
            <span className="text-xs font-medium tracking-wider uppercase text-accent-primary">
              Open to work
            </span>

          </div>


          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.9] tracking-tighter text-text-light">
            CÓDIGO <br />
            <span className="text-gradient">DESIGN</span> <br />
            <span className="italic font-light text-text/80">&amp; MAGIA.</span>
          </h1>
          <p className="text-lg md:text-xl max-w-xl font-light leading-relaxed border-l-2 border-accent-secondary/50 pl-6 bg-bg-card/50 p-4 rounded-lg">
            Desenvolvimento de interfaces digitais equilibrando experiência, performance e design — do código à experiência final.
          </p>


          <div className="flex flex-wrap gap-4 pt-4">
            <a className="group relative px-8 py-4 bg-white text-black font-bold rounded-lg overflow-hidden transition-all hover:scale-105" href="#projetos">
              <div className="absolute inset-0 w-full h-full bg-linear-to-r from-accent-primary to-accent-secondary opacity-0 group-hover:opacity-10 transition-opacity"></div>
              <span className="relative flex items-center gap-2">
                Ver portfolio <MoveRight />
              </span>
            </a>
            <a className="px-8 py-4 border border-white/20 hover:border-white/50 text-white font-medium rounded-lg transition-all hover:bg-white/5" href="#contato">
              Baixar CV
            </a>
          </div>
        </div>
        <div className="order-1 lg:order-2 flex justify-center lg:justify-end relative group perspective-1000">
          <div className="absolute inset-0 bg-linear-to-tr from-accent-primary to-accent-secondary rounded-4xl blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-700"></div>
          <div className="relative w-full max-w-md aspect-4/5 rounded-4xl overflow-hidden border border-white/10 shadow-2xl transition-transform duration-500 group-hover:rotate-y-6 group-hover:scale-[1.02]">
            <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent z-10"></div>
            <img alt="Portrait of a female front-end developer in a creative workspace"
              className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDir9uDiwAdTidpuMDB9RR3yUl4ZhCdSZ1JIxKXbalRuESDJZ36tYgJFBFZgdFyuvlRZss5Rzv4qxrdMIfGhk2HIGBgG1w5Jca2-05uMruSXgSPu4esYXovGwurB4_NqAbuVzmjO4OCSIiQdvkoXxPElOo30wz5vT4kcmzYAieWsr6ktmCNNDHxcNdhAhtuBTvPzAjhcXUfPFjvuERT-CGLeobo_54X6PFneW_O00IsKhBMt0ZVOhastpLcBghunPzywBn7fHucdIQ" />

          </div>
        </div>
      </div>
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown />
      </div>
    </section>
  )
}
