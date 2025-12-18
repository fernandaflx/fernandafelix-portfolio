import { Rocket, Sparkles } from "lucide-react";

type AboutStatCardProps = {
  icon: "rocket" | "sparkles";
  value: string;
  label: string;
};

const iconMap = {
  rocket: { Icon: Rocket, bg: "bg-accent-primary/20", text: "text-accent-primary" },
  sparkles: { Icon: Sparkles, bg: "bg-accent-tertiary/20", text: "text-accent-tertiary" },
};

export default function AboutStatCard({ icon, value, label }: AboutStatCardProps) {
  const { Icon, bg, text } = iconMap[icon];

  return (
    <div className="md:col-span-3 lg:col-span-4 glass-panel rounded-3xl p-8 flex flex-col justify-between hover:bg-white/3 transition-colors group">
      <div className={`w-12 h-12 rounded-full ${bg} flex items-center justify-center ${text} group-hover:scale-110 transition-transform`}>
        <Icon />
      </div>
      <div>
        <h4 className="text-4xl font-display font-bold text-white mt-4">{value}</h4>
        <p className="text-sm mt-1 uppercase tracking-wider">{label}</p>
      </div>
    </div>
  );
}
