import { Eye, Code2 } from "lucide-react";

type ProjectCardProps = {
  title: string;
  description: string;
  tags?: string[];
  imageUrl: string;
  hrefPreview?: string;
  hrefCode?: string;
  index: number;
};

const CARD_STYLES = [
  {
    duotoneClass: 'duotone-primary-secondary',
    clipClass:
      'clip-path-polygon-[10%_0%,_100%_0%,_90%_100%,_0%_100%] bg-linear-to-br from-accent-primary to-accent-secondary',
    primaryButtonHover: 'hover:bg-accent-primary hover:text-white',
  },
  {
    duotoneClass: 'duotone-tertiary-secondary',
    clipClass:
      'clip-path-polygon-[20%_0%,_80%_0%,_100%_100%,_0%_100%] bg-linear-to-br from-accent-tertiary to-accent-secondary',
    primaryButtonHover: 'hover:bg-accent-tertiary hover:text-white',
  },
  {
    duotoneClass: 'duotone-primary-secondary',
    clipClass:
      'clip-path-polygon-[0%_0%,_70%_10%,_100%_40%,_30%_100%,_0%_70%] bg-linear-to-br from-accent-primary to-accent-secondary',
    primaryButtonHover: 'hover:bg-accent-primary hover:text-white',
  },
];

export default function ProjectCard({
  title,
  description,
  tags = [],
  imageUrl,
  hrefPreview,
  hrefCode,
  index,
}: ProjectCardProps) {

  const style = CARD_STYLES[index % CARD_STYLES.length];

  return (
    <div
      className={`
        group relative rounded-2xl overflow-hidden
        bg-background-card border border-white/5
        h-100 lg:h-125
      `}
    >

      <div className={`absolute inset-0 overflow-hidden ${style.duotoneClass}`}>
        <div
          className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110 relative"
          style={{ backgroundImage: `url('${imageUrl}')` }}
        >
          <div
            className={`
              absolute inset-0 z-10
              ${style.clipClass}
              opacity-70 group-hover:opacity-90
              transition-opacity duration-300
            `}
          />
          <img
            alt={title}
            className="absolute inset-0 w-full h-full object-cover mix-blend-screen opacity-70"
            src={imageUrl}
          />
        </div>
        <div className="absolute inset-0 bg-linear-to-t from-bg via-bg/40 to-transparent opacity-90 transition-opacity duration-300 z-20" />
      </div>


      <div className="absolute bottom-0 left-0 p-8 md:p-12 w-full z-30">
        {tags.length > 0 && (
          <div className="flex flex-wrap items-center gap-2 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
            {tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 text-xs font-bold border border-white/20 rounded-full text-white bg-black/50 backdrop-blur-md"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        <h3 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-2">
          {title}
        </h3>

        <p className="text-text text-sm md:text-base max-w-md line-clamp-2 mb-6 group-hover:text-white transition-colors">
          {description}
        </p>

        <div className="flex gap-4">
          {hrefPreview && (
            <a
              href={hrefPreview}
              target="_blank"
              rel="noopener noreferrer"
              className={`
                w-12 h-12 rounded-full bg-white text-black flex items-center justify-center
                ${style.primaryButtonHover}
                transition-colors
              `}
            >
              <Eye className="w-5 h-5" />
            </a>
          )}

          {hrefCode && (
            <a
              href={hrefCode}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full border border-white/30 text-white flex items-center justify-center hover:bg-white hover:text-black transition-colors"
            >
              <Code2 className="w-5 h-5" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
