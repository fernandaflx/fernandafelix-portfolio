export default function HeroBadge() {
  return (
    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-accent-primary/30 bg-accent-primary/10 w-fit" >
      <span className="relative flex h-2 w-2">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-primary opacity-75"></span>
        <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-primary"></span>
      </span>
      <span className="text-xs font-medium tracking-wider uppercase text-accent-primary">
        Open to work
      </span>

    </div>
  )
}