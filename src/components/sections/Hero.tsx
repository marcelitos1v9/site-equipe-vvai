'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center">
      {/* Background com gradiente */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-white" />

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Texto e CTA */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Inovação e Tecnologia para o{' '}
              <span className="text-blue-600">Futuro</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8">
              Somos a VVAI, uma equipe apaixonada por transformar ideias em
              soluções tecnológicas inovadoras.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#contact"
                className="btn btn-primary"
              >
                Entre em Contato
              </a>
              <a
                href="#projects"
                className="btn btn-secondary"
              >
                Conheça Nossos Projetos
              </a>
            </div>
          </motion.div>

          {/* Imagem */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative h-[400px] lg:h-[500px]"
          >
            <Image
              src="/hero-image.png"
              alt="VVAI Team"
              fill
              className="object-contain"
              priority
            />
          </motion.div>
        </div>
      </div>

      {/* Elementos decorativos */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
};

export default Hero; 