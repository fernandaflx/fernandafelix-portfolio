
export default function SkillsMarquee() {
  const skills = ["REACT", "NEXT.JS", "TYPESCRIPT", "TAILWIND", "REDUX", "FIGMA"];


  return (
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
  )
}
