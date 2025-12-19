import { ArrowRight } from 'lucide-react'
import { projects } from './ProjectCard/projects'
import ProjectCard from './ProjectCard/page'

export default function Projects() {
  return (
    <section className="w-full py-16 sm:py-24 px-4 relative z-10" id="projects">
      <div className="max-w-7xl mx-auto">

        <div className="flex flex-col md:flex-row justify-between md:items-end mb-16 gap-6 bg-background-card/50 p-6 rounded-lg">

          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-2">
            Projetos em <br />
            <span className="text-gradient">Destaque</span>
          </h2>

          <a
            className="group flex items-center w-fit gap-2 text-white border-b border-white pb-1 hover:text-accent-primary hover:border-accent-primary transition-all"
            href="https://github.com/fernandaflx"
            target="_blank"
            rel="noopener noreferrer"
          >
            Veja mais no GitHub
            <ArrowRight className="text-lg transition-transform group-hover:translate-x-1" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              index={index}
              title={project.title}
              description={project.description}
              imageUrl={project.imageUrl}
              tags={project.tags}
              hrefCode='/'
              hrefPreview='/'
            />
          ))}
        </div>

      </div>
    </section>
  )
}
