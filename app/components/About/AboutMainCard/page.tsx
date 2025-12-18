import { BrainCircuit } from "lucide-react";

export default function AboutMainCard() {
  return (
    <div className="md:col-span-6 lg:col-span-8 row-span-2 glass-panel rounded-3xl p-8 md:p-12 relative overflow-hidden group">
      <div className="absolute top-0 right-0 p-12 opacity-10 group-hover:opacity-20 transition-opacity duration-500">

        <span className="inline-flex text-accent-primary">
          <BrainCircuit className="w-48 h-48" />
        </span>

      </div>
      <h3 className="font-display text-2xl md:text-3xl font-bold text-white mb-6">A mente por trás do código</h3>
      <p className="md:text-lg leading-relaxed max-w-2xl relative z-10">
        Formada em Propaganda e Marketing, mas sempre tive uma curiosidade natural por tecnologia. Mesmo antes de entender o que era programação, eu já me aventurava com HTML, CSS e JavaScript, sem saber ao certo para onde aquilo me levaria. Com o tempo, essa curiosidade se transformou em paixão, e minha jornada me levou a migrar para o universo da programação, onde sigo aprofundando meu olhar técnico e a forma como penso e construo soluções. Hoje, meu foco é transformar ideias em interfaces bem pensadas, equilibrando lógica, estética e experiência para criar soluções claras, funcionais e intuitivas com foco no usuário.
      </p>
      <div className="mt-8 flex gap-4 flex-wrap relative z-10">
        <span className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-sm font-medium hover:bg-white/10 transition-colors">Pensamento estratégico</span>
        <span className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-sm font-medium hover:bg-white/10 transition-colors">Foco em experiência</span>
        <span className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-sm font-medium hover:bg-white/10 transition-colors">Código com intenção</span>
      </div>
    </div>
  )
}
