'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Project } from '@/types';

const projects: Project[] = [
  {
    id: '1',
    title: 'Sistema de Gestão Inteligente',
    description: 'Plataforma completa para gestão empresarial com IA integrada.',
    image: '/projects/project1.jpg',
    technologies: ['Next.js', 'TypeScript', 'Python', 'TensorFlow'],
    link: '#'
  },
  {
    id: '2',
    title: 'Aplicativo de Saúde Digital',
    description: 'Solução mobile para monitoramento de saúde e bem-estar.',
    image: '/projects/project2.jpg',
    technologies: ['React Native', 'Node.js', 'MongoDB'],
    link: '#'
  },
  {
    id: '3',
    title: 'Plataforma de Educação Online',
    description: 'Sistema de ensino a distância com recursos interativos.',
    image: '/projects/project3.jpg',
    technologies: ['Vue.js', 'Django', 'PostgreSQL'],
    link: '#'
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Nossos Projetos
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Conheça alguns dos nossos principais trabalhos e iniciativas.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="relative h-48">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  className="inline-block px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors"
                >
                  Saiba mais
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects; 