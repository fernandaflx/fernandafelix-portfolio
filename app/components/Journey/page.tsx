export default function Journey() {

  const experiences = [
  {
    year: '2023',
    position: 'Desenvolvedora Frontend Pleno',
    period: '2.4 anos',
    company: 'Alby Technology',
    description:
      'Atuação em uma fintech B2B focada em soluções de pagamento, com desenvolvimento de aplicações escaláveis usando React, Next.js e TypeScript. Trabalhei na criação de uma biblioteca interna de componentes reutilizáveis, garantindo consistência visual e acelerando entregas. Também participei da integração com APIs REST para sistemas críticos de transações, além de aplicar boas práticas de arquitetura front-end, versionamento e code review, colaborando de forma próxima com times de produto, design e tecnologia em ambiente ágil.'
  },
  {
    year: '2022',
    position: 'Desenvolvedora Frontend Junior',
    period: '9 meses',
    company: 'Alby Technology',
    description:
      'Suporte no desenvolvimento e manutenção de features em aplicações React e TypeScript, seguindo padrões de boas práticas e foco em qualidade de código. Atuei na implementação de interfaces responsivas e acessíveis e participei de iniciativas de modernização da UI, contribuindo para soluções mais consistentes e performáticas. Evolução técnica rápida, resultando em promoção para o nível pleno em menos de um ano.'
  },
  {
    year: '2022',
    position: 'Desenvolvedora Frontend Junior',
    period: '1 ano',
    company: 'Squadacomp',
    description:
      'Início da carreira em um ambiente voltado ao aprendizado, com participação no desenvolvimento de componentes front-end reutilizáveis e escaláveis. Atuei sob supervisão técnica, colaborando em tarefas de implementação e ajustes de interface, enquanto desenvolvia fundamentos sólidos em front-end e aprimorava habilidades técnicas e de comunicação em um contexto de crescimento contínuo.'
  },
];


  return (
    <section
      className="w-full py-24 px-4 bg-black/40 relative overflow-hidden z-0"
      id="journey"
    >
      <div className="absolute inset-y-0 left-1/2 w-px bg-linear-to-b from-transparent via-accent-primary/30 to-transparent -translate-x-1/2 hidden md:block" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-20 bg-bg-card/50 p-6 rounded-lg w-fit mx-auto">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white">
            Trajetória Profissional
          </h2>
          <p className="text-text mt-4">Timeline da minha carreira</p>
        </div>

        {/* <div className="space-y-16 relative">

          <div className="relative flex flex-col md:flex-row items-center md:justify-between group">
            <div className="hidden md:block w-[calc(50%-3rem)] text-right pr-12">
              <span className="font-display text-6xl font-bold text-white/5 group-hover:text-accent-primary/20 transition-colors">
                2022
              </span>
            </div>

            <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-bg border-2 border-accent-primary z-20 shadow-[0_0_15px_rgba(217,70,239,0.5)]" />

            <div className="w-full md:w-[calc(50%-3rem)] pl-0 md:pl-12">
              <div className="glass-panel p-8 rounded-2xl border-l-4 border-l-accent-primary hover:translate-x-2 transition-transform duration-300">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-white">Senior Front-End Dev</h3>
                  <span className="text-xs font-bold px-2 py-1 rounded bg-accent-primary/20 text-accent-primary">
                    Atual
                  </span>
                </div>
                <p className="text-accent-secondary text-sm font-mono mb-4">@ TechCorp</p>
                <p className="text-text text-sm leading-relaxed">
                  Liderança técnica do time de front-end e implementação de design system. Melhorei a performance em 40% e lidero a adoção de tecnologias modernas.
                </p>
              </div>
            </div>
          </div>


          <div className="relative flex flex-col md:flex-row-reverse items-center md:justify-between group">
            <div className="hidden md:block w-[calc(50%-3rem)] text-left pl-12">
              <span className="font-display text-6xl font-bold text-white/5 group-hover:text-accent-secondary/20 transition-colors">
                2020
              </span>
            </div>

            <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-bg border-2 border-accent-secondary z-20 shadow-[0_0_15px_rgba(99,102,241,0.5)]" />

            <div className="w-full md:w-[calc(50%-3rem)] pr-0 md:pr-12">
              <div className="glass-panel p-8 rounded-2xl md:border-r-4 border-l-4 md:border-l-0 border-accent-secondary hover:-translate-x-2 transition-transform duration-300 text-left md:text-right">
                <div className="flex flex-row md:flex-row-reverse justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-white">Front-End Developer</h3>
                  <span className="text-xs font-bold px-2 py-1 rounded bg-white/10 text-white">
                    2 Anos
                  </span>
                </div>
                <p className="text-accent-secondary text-sm font-mono mb-4">@ StartupX</p>
                <p className="text-text text-sm leading-relaxed">
                  Desenvolvimento de SPAs complexas com Vue.js e integração de APIs RESTful. Colaboração estreita com UX/UI para criar interfaces responsivas.
                </p>
              </div>
            </div>
          </div>


          <div className="relative flex flex-col md:flex-row items-center md:justify-between group">
            <div className="hidden md:block w-[calc(50%-3rem)] text-right pr-12">
              <span className="font-display text-6xl font-bold text-white/5 group-hover:text-accent-tertiary/20 transition-colors">
                2018
              </span>
            </div>

            <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-bg border-2 border-accent-tertiary z-20 shadow-[0_0_15px_rgba(34,211,238,0.5)]" />

            <div className="w-full md:w-[calc(50%-3rem)] pl-0 md:pl-12">
              <div className="glass-panel p-8 rounded-2xl border-l-4 border-l-accent-tertiary hover:translate-x-2 transition-transform duration-300">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-white">Junior Web Dev</h3>
                  <span className="text-xs font-bold px-2 py-1 rounded bg-white/10 text-white">
                    2 Anos
                  </span>
                </div>
                <p className="text-accent-secondary text-sm font-mono mb-4">@ AgencyY</p>
                <p className="text-text text-sm leading-relaxed">
                  Início da carreira criando landing pages e temas customizados. Foco em HTML, CSS semântico e otimização para motores de busca (SEO).
                </p>
              </div>
            </div>
          </div>
          
        </div> */}
        <div className="space-y-16 relative">
          {experiences.map((exp, idx) => {
            const isReversed = idx % 2 !== 0;
            const circleColors = ['accent-primary', 'accent-secondary', 'accent-tertiary'];
            const circleColor = circleColors[idx % circleColors.length];
            const borderSide = isReversed ? 'border-r-4 md:border-r-4 md:border-l-0' : 'border-l-4';

            return (
              <div
                key={idx}
                className={`relative flex flex-col ${isReversed ? 'md:flex-row-reverse' : 'md:flex-row'} items-center md:justify-between group`}
              >
                <div className={`hidden md:block w-[calc(50%-3rem)] ${isReversed ? 'text-left pl-12' : 'text-right pr-12'}`}>
                  <span
                    className={`font-display text-6xl font-bold text-white/5 group-hover:text-${circleColor}/20 transition-colors`}
                  >
                    {exp.year}
                  </span>
                </div>

                <div
                  className={`absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-bg border-2 border-${circleColor} z-20 shadow-[0_0_15px_rgba(0,0,0,0.3)]`}
                />

                <div className={`w-full md:w-[calc(50%-3rem)] ${isReversed ? 'pr-0 md:pr-12' : 'pl-0 md:pl-12'}`}>
                  <div
                    className={`glass-panel p-8 rounded-2xl ${borderSide} hover:translate-x-2 transition-transform duration-300 text-left md:text-${isReversed ? 'right' : 'left'}`}
                  >
                    <div className={`flex ${isReversed ? 'flex-row-reverse' : 'flex-row'} justify-between items-start mb-2`}>
                      <h3 className="text-xl font-bold text-white">{exp.position}</h3>
                      <span className="text-xs font-bold px-2 py-1 rounded bg-white/10 text-white">{exp.period}</span>
                    </div>
                    <p className={`text-${circleColor} text-sm font-mono mb-4`}>@ {exp.company}</p>
                    <p className="text-text text-sm leading-relaxed">{exp.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  )
}
