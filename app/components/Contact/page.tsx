import { Mail, MapPin, Github, Linkedin } from 'lucide-react'
import Form from './Form/page'

//TODO: ifix brand icons
const contactLinks = [
  {
    label: "fernandaleitefelix@gmail.com",
    href: "mailto:fernandaleitefelix@gmail.com",
    icon: Mail,
    external: false,
  },
  {
    label: "https://www.github.com/fernandaflx",
    href: "https://github.com/fernandaflx",
    icon: Github,
    external: true,
  },
  {
    label: "https://www.linkedin.com/in/fernandaleitefelix",
    href: "https://www.linkedin.com/in/fernandaleitefelix/",
    icon: Linkedin,
    external: true,
  },
  {
    label: "São Paulo, Brasil",
    href: "#",
    icon: MapPin,
    external: false,
  },
];

export default function Contact() {
  return (
    <section
      className="w-full py-24 px-4 bg-linear-to-b from-bg to-[#0a0a0c] z-20 relative"
      id="contact"
    >
      <div className="max-w-7xl mx-auto">
        <div className="glass-panel rounded-[2.5rem] p-8 md:p-20 border border-white/10 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-125 h-125 bg-accent-secondary/20 rounded-full blur-[120px] pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 relative z-10">

            <div className="flex flex-col justify-center">
              <h2 className="font-display text-5xl md:text-7xl font-bold text-white leading-tight mb-8">
                Vamos criar algo <span className="text-gradient-cyan">incrível?</span>
              </h2>
              <p className="text-text text-xl mb-12 max-w-md bg-bg-card/50 p-4 rounded-lg">
                Tem um projeto em mente ou quer apenas trocar uma ideia? Me mande uma mensagem!
              </p>

              <div className="flex flex-col gap-6">
                {contactLinks.map(({ label, href, icon: Icon, external }) => (
                  <a
                    key={label}
                    href={href}
                    target={external ? "_blank" : undefined}
                    rel={external ? "noopener noreferrer" : undefined}
                    className="flex items-center gap-4 text-white hover:text-accent-primary transition-colors group"
                  >
                    <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-accent-primary group-hover:border-accent-primary transition-all">
                      <Icon className="w-5 h-5" />
                    </div>

                    <span className="text-lg">{label}</span>
                  </a>
                ))}
              </div>

            </div>
            <Form />
          </div>
        </div>
      </div>
    </section>
  )
}
