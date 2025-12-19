import { experiences } from "./experiences";

export default function Journey() {

  return (
    <section
      className="w-full py-16 sm:py-24 bg-black/40 relative overflow-hidden z-0"
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

        <div className="space-y-24 md:space-y-16 relative">
          {experiences.map((exp, idx) => {
            const isReversed = idx % 2 !== 0;
            return (
              <div
                key={idx}
                className={`relative flex flex-col ${isReversed ? 'md:flex-row-reverse' : 'md:flex-row'} items-center md:justify-between group`}>
                <div className={`font-display text-5xl sm:text-6xl font-bold text-white/5 ${exp.yearColor} transition-colors absolute left-1/2 -translate-x-1/2 -top-16 flex items-center justify-center text-center md:hidden`}>
                  {exp.year}
                </div>


                <div className={`hidden md:block w-[calc(50%-3rem)] ${isReversed ? 'text-left pl-12' : 'text-right pr-12'}`}>
                  <span className={`font-display text-6xl font-bold text-white/5 ${exp.yearColor} transition-colors`}>
                    {exp.year}
                  </span>
                </div>


                <div className={`absolute left-1/2 -translate-x-1/2 -top-2 md:top-1/2 md:-translate-y-1/2 w-4 h-4 rounded-full bg-bg border-2 ${exp.circleBorder} z-20 ${exp.circleShadow}`} />

                <div className={`w-full md:w-[calc(50%-3rem)] ${isReversed ? 'pr-0 md:pr-12' : 'pl-0 md:pl-12'}`}>
                  <div className={`glass-panel p-8 rounded-2xl ${exp.sideBorder} transition-transform duration-300 ${isReversed ? 'hover:-translate-x-2 text-left md:text-right' : 'hover:translate-x-2 text-left md:text-left'}`}>
                    <div
                      className={`flex ${isReversed ? 'sm:flex-row-reverse' : 'flex-row'} justify-between items-center md:items-start mb-2`}>
                      <h3 className="text-xl font-bold text-white">
                        {exp.position}
                      </h3>
                      <span className="text-xs font-bold px-2 py-1 rounded bg-white/10 text-white min-w-fit">
                        {exp.period}
                      </span>
                    </div>

                    <p className={`${exp.companyColor} text-sm font-mono mb-4`}>
                      @ {exp.company}
                    </p>

                    <p className="text-text text-sm leading-relaxed">
                      {exp.description}
                    </p>
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
