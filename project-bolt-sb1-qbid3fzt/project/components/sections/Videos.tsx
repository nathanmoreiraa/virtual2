'use client';

import { motion } from 'framer-motion';
import { Play } from 'lucide-react';

const videos = [
  {
    title: 'Reforma Especializada',
    description: 'Veja o processo completo de recuperação de carrinhos de carga — do estado original ao resultado final.',
    thumbnail: '/images/products/medio350x4.jpg',
  },
  {
    title: 'Restauração e Acabamento',
    description: 'Cada detalhe conta: limpeza, pintura e ajuste para devolver vida ao carrinho com qualidade de fábrica.',
    thumbnail: '/images/products/sacarias_roda_de_aluminio_400x8.jpg',
  },
  {
    title: 'Resultado da Reforma',
    description: 'Carrinho reformado pronto para uso. Acabamento impecável, estrutura reforçada e excelente custo-benefício.',
    thumbnail: '/images/products/telado_para_rodizio.jpg',
  },
];

export default function Videos() {
  return (
    <section id="videos" className="section-padding bg-neutral-graphite">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto mb-14 max-w-2xl text-center"
        >
          <span className="inline-block rounded-full border border-brand-blue/30 bg-brand-blue/10 px-4 py-2 text-sm font-semibold text-brand-blue-light mb-4">
            Em Ação
          </span>
          <h2 className="mt-4 mb-4 text-3xl font-bold text-white sm:text-4xl">
            Veja Nosso Trabalho
          </h2>
          <p className="text-lg text-gray-400">
            Conheça nossa forma de trabalhar e a qualidade que entregamos a cada cliente.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-3">
          {videos.map((video, index) => (
            <motion.div
              key={video.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group cursor-pointer"
            >
              <div className="relative mb-4 aspect-video overflow-hidden rounded-2xl">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-neutral-graphite/50 transition-colors group-hover:bg-neutral-graphite/30" />

                {/* Play Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-brand-blue shadow-blue transition-transform group-hover:scale-110">
                    <Play className="ml-1 h-7 w-7 text-white" />
                  </div>
                </div>
              </div>
              <h3 className="mb-2 text-lg font-semibold text-white">{video.title}</h3>
              <p className="text-sm text-gray-400">{video.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
