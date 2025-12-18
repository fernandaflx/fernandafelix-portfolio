
export default function AboutHeader() {
  return (
    <div className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-6">
      <div>
        <h2 className="font-display text-5xl md:text-6xl font-bold text-white mb-4">
          Sobre
          <span className="text-transparent bg-clip-text bg-linear-to-r from-accent-secondary to-accent-tertiary">
            mim
          </span>
        </h2>
        <p className="max-w-xl md:text-lg">
          Mais do que código, construo experiências. Minha forma de desenvolver une pensamento lógico, cuidado visual e foco real na experiência de quem usa.
        </p>
      </div>

      <div className="hidden md:block w-32 h-px bg-linear-to-r from-accent-secondary to-transparent"></div>
    </div>
  )
}
