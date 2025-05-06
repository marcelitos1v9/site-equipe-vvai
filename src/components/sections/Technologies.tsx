'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const technologies = [
  {
    name: 'TypeScript',
    icon: '/tech/typescript.svg',
    description: 'Linguagem de programação tipada'
  },
  {
    name: 'Next.js',
    icon: '/tech/nextjs.svg',
    description: 'Framework React para produção'
  },
  {
    name: 'Python',
    icon: '/tech/python.svg',
    description: 'Linguagem versátil e poderosa'
  },
  {
    name: 'Node.js',
    icon: '/tech/nodejs.svg',
    description: 'Runtime JavaScript'
  },
  {
    name: 'React',
    icon: '/tech/react.svg',
    description: 'Biblioteca JavaScript para UI'
  },
  {
    name: 'TensorFlow',
    icon: '/tech/tensorflow.svg',
    description: 'Framework para machine learning'
  }
];

const Technologies = () => {
  return (
    <section id="tech" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Tecnologias que Utilizamos
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Nossa stack tecnológica é composta por ferramentas modernas e
            robustas para entregar soluções de alta qualidade.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center text-center"
            >
              <div className="w-20 h-20 mb-4 relative">
                <Image
                  src={tech.icon}
                  alt={tech.name}
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {tech.name}
              </h3>
              <p className="text-sm text-gray-600">{tech.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Technologies; 