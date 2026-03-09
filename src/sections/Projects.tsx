import { ScrollReveal } from '@/components/ScrollReveal';
import { ProjectCard } from '@/components/ProjectCard';

const projects = [
  {
    image: '/images/project-1.jpg',
    title: 'Campus Hotspot Deployment',
    description:
      'Complete WiFi hotspot system deployment for a leading educational institution, serving 2000+ students with reliable internet access across the campus.',
    tags: ['WiFi', 'Education'],
  },
  {
    image: '/images/project-2.jpg',
    title: 'School Network Infrastructure',
    description:
      'End-to-end networking infrastructure for a private school, including LAN setup, internet connectivity, and network management systems.',
    tags: ['Networking', 'Education'],
  },
  {
    image: '/images/project-3.jpg',
    title: 'Business CCTV Installation',
    description:
      'Comprehensive security camera system for a corporate office building with 24/7 monitoring capabilities and remote access.',
    tags: ['Security', 'Business'],
  },
  {
    image: '/images/project-4.jpg',
    title: 'Wireless Building Deployment',
    description:
      'High-speed wireless internet deployment for a residential apartment complex, providing seamless connectivity to all units.',
    tags: ['Internet', 'Residential'],
  },
];

export function Projects() {
  return (
    <section id="projects" className="relative py-24 lg:py-32 bg-tech-dark overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, #333333 1px, transparent 0)`,
            backgroundSize: '30px 30px',
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <ScrollReveal>
            <span className="text-orange text-sm font-semibold tracking-wider uppercase mb-4 block">
              Featured Projects
            </span>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              Our Recent{' '}
              <span className="text-orange">Work</span>
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <p className="text-white/70 text-lg">
              Explore some of our successful projects that showcase our expertise in delivering
              reliable ICT solutions.
            </p>
          </ScrollReveal>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              image={project.image}
              title={project.title}
              description={project.description}
              tags={project.tags}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
