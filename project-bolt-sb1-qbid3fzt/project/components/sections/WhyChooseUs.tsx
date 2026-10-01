'use client';

import { motion } from 'framer-motion';
import { Hammer, Wrench, Handshake, Truck, MessageCircle } from 'lucide-react';

const WA_LINK =
  'https://api.whatsapp.com/send/?phone=5511920003108&text=Ol%C3%A1%2C+tudo+bem%3F+Vim+do+Instagram+e+quero+saber+mais+sobre+os+carrinhos+%3A%29&type=phone_number&app_absent=0';

const features = [
  {
    icon: Hammer,
    title: 'Estrutura Reforçada',
    description: 'Fabricados com aço de alta qualidade para garantir maior resistência e longa vida útil.',
  },
  {
    icon: Wrench,
    title: 'Acabamento Profissional',
    description: 'Produtos montados com atenção aos detalhes para oferecer qualidade e excelente apresentação.',
  },
  {
    icon: Handshake,
    title: 'Atendimento Especializado',
    description: 'Nossa equipe auxilia você na escolha do carrinho ideal para cada necessidade.',
  },
  {
    icon: Truck,
    title: 'Envio para Todo o Brasil',
    description: 'Consulte a disponibilidade de envio para sua região através de transportadora.',
  },
];

export default function WhyChooseUs() {
  return (
    <section className="section-padding bg-neutral-graphite">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto mb-14 max-w-2xl text-center"
        >
          <span className="inline-block rounded-full border border-brand-blue/30 bg-brand-blue/10 px-4 py-2 text-sm font-semibold text-brand-blue-light mb-4">
            Diferenciais
          </span>
          <h2 className="mt-4 mb-5 text-3xl font-bold text-white sm:text-4xl">
            Por que escolher a Virtual Carrinhos?
          </h2>
          <p className="text-lg leading-relaxed text-gray-400">
            Cada carrinho é desenvolvido pensando em resistência, durabilidade e desempenho para o dia a dia. Trabalhamos com materiais de alta qualidade, acabamento profissional e atendimento especializado para oferecer a melhor solução para cada cliente.
          </p>
        </motion.div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group rounded-2xl border border-white/10 bg-white/5 p-6 transition-all hover:border-brand-blue/40 hover:bg-white/10"
            >
              <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-brand-blue/20 transition-colors group-hover:bg-brand-blue">
                <feature.icon className="h-7 w-7 text-brand-blue-light transition-colors group-hover:text-white" />
              </div>
              <h3 className="mb-2 font-semibold text-white">{feature.title}</h3>
              <p className="text-sm leading-relaxed text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mx-auto mt-14 max-w-3xl rounded-2xl bg-gradient-to-r from-brand-blue to-brand-blue-dark p-8 text-center shadow-large sm:p-10"
        >
          <h3 className="mb-3 text-2xl font-bold text-white sm:text-3xl">
            Precisa de ajuda para escolher o modelo ideal?
          </h3>
          <p className="mb-8 text-lg leading-relaxed text-blue-100">
            Nossa equipe está pronta para orientar você e indicar a melhor opção para a sua necessidade.
          </p>
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 rounded-xl bg-[#25D366] px-8 py-4 text-base font-semibold text-white shadow-large transition-all hover:scale-105 hover:shadow-xl"
          >
            <MessageCircle className="h-6 w-6" />
            Solicitar Orçamento
          </a>
        </motion.div>
      </div>
    </section>
  );
}
