import { MoveRight } from "lucide-react";

export default function HeroButtons() {
  return (
    <div className="flex flex-wrap gap-4 pt-4">
      <a className="group relative px-8 py-4 bg-white text-black font-bold rounded-lg overflow-hidden transition-all hover:scale-105" href="#projects">
        <div className="absolute inset-0 w-full h-full bg-linear-to-r from-accent-primary to-accent-secondary opacity-0 group-hover:opacity-10 transition-opacity"></div>
        <span className="relative flex items-center gap-2">
          Projetos <MoveRight />
        </span>
      </a>
      <a className="px-8 py-4 border border-white/20 hover:border-white/50 text-white font-medium rounded-lg transition-all hover:bg-white/5"
        href="/Resume-Fernanda_Leite_Felix.pdf"
        download
      >
        Baixar CV
      </a>
    </div>
  )
}
