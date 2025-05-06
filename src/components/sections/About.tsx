'use client';

import { motion } from 'framer-motion';

const About = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Sobre a VVAI
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Somos uma equipe dedicada a transformar o futuro através da tecnologia
            e inovação.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            {...fadeInUp}
            className="bg-gray-50 p-8 rounded-xl"
          >
            <h3 className="text-xl font-bold text-gray-900 mb-4">Nossa Missão</h3>
            <p className="text-gray-600">
              Desenvolver soluções tecnológicas inovadoras que transformam
              positivamente a vida das pessoas e impulsionam o progresso da
              sociedade.
            </p>
          </motion.div>

          <motion.div
            {...fadeInUp}
            transition={{ delay: 0.2 }}
            className="bg-gray-50 p-8 rounded-xl"
          >
            <h3 className="text-xl font-bold text-gray-900 mb-4">Nossa Visão</h3>
            <p className="text-gray-600">
              Ser referência em inovação tecnológica, reconhecida pela excelência
              e impacto positivo de nossas soluções no mercado.
            </p>
          </motion.div>

          <motion.div
            {...fadeInUp}
            transition={{ delay: 0.4 }}
            className="bg-gray-50 p-8 rounded-xl"
          >
            <h3 className="text-xl font-bold text-gray-900 mb-4">Nossos Valores</h3>
            <ul className="text-gray-600 space-y-2">
              <li>• Inovação constante</li>
              <li>• Excelência técnica</li>
              <li>• Trabalho em equipe</li>
              <li>• Compromisso com resultados</li>
              <li>• Ética e transparência</li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About; 