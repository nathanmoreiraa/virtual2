'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { ArrowRight, Weight, Ruler, CircleDot, MessageCircle } from 'lucide-react';

const WA_LINK =
  'https://api.whatsapp.com/send/?phone=5511920003108&text=Ol%C3%A1%2C+tudo+bem%3F+Vim+do+Instagram+e+quero+saber+mais+sobre+os+carrinhos+%3A%29&type=phone_number&app_absent=0';

const products = [
  {
    name: 'Médio 3.50x4',
    image: '/images/products/medio350x4.jpg',
    capacity: '200kg',
    dimensions: '1300x370mm — Base 300mm',
    wheels: 'Pneumáticas 3.50x4 — Rolamento de Esfera',
  },
  {
    name: 'Mini Roda 3.50x4',
    image: '/images/products/mini_350x4.jpg',
    capacity: '150kg',
    dimensions: '1200x370mm — Base 300mm',
    wheels: 'Pneumáticas 3.50x4 — Rolamento de Esfera',
  },
  {
    name: 'Plataforma 5ª Roda Madeira',
    image: '/images/products/plataforma_de_madeira.jpg',
    capacity: '700kg',
    dimensions: '1500x800mm',
    wheels: 'Pneumáticas 3.50x8',
  },
  {
    name: 'Regulável',
    image: '/images/products/regulavel.jpg',
    capacity: '150kg',
    dimensions: '1200x360mm — Base 300mm',
    wheels: 'Maciça 8"',
  },
  {
    name: 'Sacarias Roda de Alumínio',
    image: '/images/products/sacarias_roda_de_aluminio_400x8.jpg',
    capacity: '500kg',
    dimensions: '1500x500mm — Base 500mm',
    wheels: 'Pneumáticas 4.00x8 — Alumínio',
  },
  {
    name: 'Tela para Rodízio',
    image: '/images/products/telado_para_rodizio.jpg',
    capacity: '300kg',
    dimensions: '1000x600mm — Grades 700mm',
    wheels: '2 Fixas + 2 Giratórias de 6"',
  },
];

export default function Products() {
  return (
    <>
      <section id="modelos" className="section-padding bg-neutral-gray-light">
        <div className="container-custom">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mx-auto mb-14 max-w-2xl text-center"
          >
            <span className="badge-blue mb-4">Nossa Linha</span>
            <h2 className="mb-4 mt-4 text-3xl font-bold text-neutral-graphite sm:text-4xl">
              Nossa Linha de Carrinhos
            </h2>
            <p className="text-base leading-relaxed text-gray-600 sm:text-lg">
              Conheça alguns dos nossos produtos e solicite um orçamento
              personalizado. Carrinhos fabricados com aço de alta qualidade,
              excelente resistência e acabamento impecável para atender
              diferentes setores e necessidades.
            </p>
          </motion.div>

          {/* Grid */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((product, index) => (
              <motion.div
                key={product.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08, duration: 0.5 }}
                className="group overflow-hidden rounded-2xl bg-white shadow-card transition-all hover:-translate-y-1 hover:shadow-large"
              >
                {/* Image area — object-contain so product is fully visible */}
                <div className="relative flex h-60 items-center justify-center bg-neutral-gray-light p-4 sm:h-64">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-contain p-4 transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="mb-4 text-lg font-bold text-neutral-graphite">
                    {product.name}
                  </h3>

                  {/* Specs */}
                  <ul className="mb-5 space-y-2">
                    <li className="flex items-start gap-2.5 text-sm text-gray-600">
                      <Weight className="mt-0.5 h-4 w-4 flex-shrink-0 text-brand-blue" />
                      <span>
                        <span className="font-medium text-neutral-graphite">Capacidade: </span>
                        {product.capacity}
                      </span>
                    </li>
                    <li className="flex items-start gap-2.5 text-sm text-gray-600">
                      <Ruler className="mt-0.5 h-4 w-4 flex-shrink-0 text-brand-blue" />
                      <span>
                        <span className="font-medium text-neutral-graphite">Dimensões: </span>
                        {product.dimensions}
                      </span>
                    </li>
                    <li className="flex items-start gap-2.5 text-sm text-gray-600">
                      <CircleDot className="mt-0.5 h-4 w-4 flex-shrink-0 text-brand-blue" />
                      <span>
                        <span className="font-medium text-neutral-graphite">Rodas: </span>
                        {product.wheels}
                      </span>
                    </li>
                  </ul>

                  <a
                    href={WA_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-xl border-2 border-brand-blue py-3 text-sm font-semibold text-brand-blue transition-all hover:bg-brand-blue hover:text-white"
                  >
                    Solicitar Orçamento
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Products CTA */}
      <section className="bg-white py-16 lg:py-20">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="mx-auto max-w-2xl rounded-2xl border border-brand-blue/15 bg-brand-blue-lighter px-8 py-12 text-center shadow-soft"
          >
            <h3 className="mb-4 text-2xl font-bold text-neutral-graphite sm:text-3xl">
              Não encontrou o produto ideal?
            </h3>
            <p className="mb-8 text-base leading-relaxed text-gray-600 sm:text-lg">
              Se você procura um produto específico ou precisa de uma solução
              personalizada, nossa equipe está pronta para ajudar. Entre em
              contato e solicite um orçamento sem compromisso.
            </p>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 rounded-xl bg-brand-blue px-10 py-4 text-base font-semibold text-white shadow-blue transition-all hover:bg-brand-blue-dark hover:shadow-xl active:scale-[0.98]"
            >
              <MessageCircle className="h-5 w-5" />
              Solicitar Orçamento
            </a>
          </motion.div>
        </div>
      </section>
    </>
  );
}
