import { BrainCircuit, Rocket, Sparkles } from "lucide-react";

export default function About() {

  const skills = ["REACT", "NEXT.JS", "TYPESCRIPT", "TAILWIND", "REDUX", "FIGMA"];


  return (
    <section className="w-full py-24 md:py-32 px-4 relative" id="about">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-6">

          <div>
            <h2 className="font-display text-4xl md:text-6xl font-bold text-white mb-4">
              Sobre
              <span className="text-transparent bg-clip-text bg-linear-to-r from-accent-secondary to-accent-tertiary">
                mim
              </span>
            </h2>
            <p className="max-w-xl text-lg">
              Mais do que código, construo experiências. Minha forma de desenvolver une pensamento lógico, cuidado visual e foco real na experiência de quem usa.
            </p>
          </div>

          <div className="hidden md:block w-32 h-px bg-linear-to-r from-accent-secondary to-transparent"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 gap-6 auto-rows-[minmax(180px,auto)]">
          <div className="md:col-span-6 lg:col-span-8 row-span-2 glass-panel rounded-3xl p-8 md:p-12 relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-12 opacity-10 group-hover:opacity-20 transition-opacity duration-500">

              <span className="inline-flex text-accent-primary">
                <BrainCircuit className="w-48 h-48" />
              </span>

            </div>
            <h3 className="font-display text-3xl font-bold text-white mb-6">A mente por trás do código</h3>
            <p className="text-lg leading-relaxed max-w-2xl relative z-10">
              Formada em Propaganda e Marketing, mas sempre tive uma curiosidade natural por tecnologia. Mesmo antes de entender o que era programação, eu já me aventurava com HTML, CSS e JavaScript, sem saber ao certo para onde aquilo me levaria. Com o tempo, essa curiosidade se transformou em paixão, e minha jornada me levou a migrar para o universo da programação, onde sigo aprofundando meu olhar técnico e a forma como penso e construo soluções. Hoje, meu foco é transformar ideias em interfaces bem pensadas, equilibrando lógica, estética e experiência para criar soluções claras, funcionais e intuitivas com foco no usuário.
            </p>
            <div className="mt-8 flex gap-4 flex-wrap relative z-10">
              <span className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-sm font-medium hover:bg-white/10 transition-colors">Pensamento estratégico</span>
              <span className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-sm font-medium hover:bg-white/10 transition-colors">Foco em experiência</span>
              <span className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-sm font-medium hover:bg-white/10 transition-colors">Código com intenção</span>
            </div>
          </div>
          <div className="md:col-span-3 lg:col-span-4 glass-panel rounded-3xl p-8 flex flex-col justify-between hover:bg-white/3 transition-colors group">
            <div className="w-12 h-12 rounded-full bg-accent-primary/20 flex items-center justify-center text-accent-primary group-hover:scale-110 transition-transform">

              <Rocket />
            </div>
            <div>
              <h4 className="text-4xl font-display font-bold text-white mt-4">3+</h4>
              <p className="text-sm mt-1 uppercase tracking-wider">anos de experiência</p>
            </div>
          </div>
          <div className="md:col-span-3 lg:col-span-4 glass-panel rounded-3xl p-8 flex flex-col justify-between hover:bg-white/3 transition-colors group">
            <div className="w-12 h-12 rounded-full bg-accent-tertiary/20 flex items-center justify-center text-accent-tertiary group-hover:scale-110 transition-transform">
              <Sparkles />
            </div>
            <div>
              <h4 className="text-4xl font-display font-bold text-white mt-4">Do conceito</h4>
              <p className="text-sm mt-1 uppercase tracking-wider">à interface</p>
            </div>
          </div>

          <div className="md:col-span-6 lg:col-span-12 glass-panel rounded-3xl p-0 flex items-center overflow-hidden h-25 relative">
            <div className="absolute inset-0 bg-linear-to-r from-bg-card via-transparent to-bg-card z-10 pointer-events-none"></div>
            <div className="flex items-center gap-12 animate-scroll whitespace-nowrap px-8">
              {Array(3)
                .fill(skills)
                .flat()
                .map((skill, idx) => {
                  const opacity = idx % 2 === 0 ? "text-white/20" : "text-white/50";
                  return (
                    <span key={idx} className={`text-2xl font-display font-bold ${opacity}`}>
                      {skill}
                    </span>
                  );
                })}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
