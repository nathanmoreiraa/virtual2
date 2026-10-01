'use client';

import { motion } from 'framer-motion';
import { Factory, RefreshCw, Users, Shield, Sparkles, Truck, Ruler, ThumbsUp } from 'lucide-react';

const differentials = [
  {
    icon: Factory,
    title: 'Fabricação Própria',
    description: 'Produzimos nossos carrinhos com controle total de qualidade.',
  },
  {
    icon: RefreshCw,
    title: 'Reforma Especializada',
    description: 'Recuperamos carrinhos antigos com acabamento profissional.',
  },
  {
    icon: Users,
    title: 'Atendimento Personalizado',
    description: 'Entendemos sua necessidade e indicamos a melhor solução.',
  },
  {
    icon: Shield,
    title: 'Produtos Resistentes',
    description: 'Aço de alta qualidade para máxima durabilidade e segurança.',
  },
  {
    icon: Sparkles,
    title: 'Excelente Acabamento',
    description: 'Detalhes impecáveis em cada produto que sai da nossa loja.',
  },
  {
    icon: Truck,
    title: 'Entrega',
    description: 'Consulte a disponibilidade para sua região. Trabalhamos também com envio por transportadora.',
  },
  {
    icon: Ruler,
    title: 'Soluções Sob Medida',
    description: 'Carrinhos personalizados para qualquer necessidade.',
  },
  {
    icon: ThumbsUp,
    title: '+6.000 Clientes',
    description: 'Confiança construída com milhares de clientes satisfeitos.',
  },
];

export default function Differentials() {
  return (
    <section id="diferenciais" className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto mb-14 max-w-2xl text-center"
        >
          <span className="badge-blue mb-4">Por Quê Nos Escolher</span>
          <h2 className="mt-4 mb-4 text-3xl font-bold text-neutral-graphite sm:text-4xl">
            Nossos Diferenciais
          </h2>
          <p className="text-lg text-gray-600">
            Compromisso com qualidade e excelência em cada detalhe.
          </p>
        </motion.div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {differentials.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.07, duration: 0.5 }}
              className="group rounded-2xl border border-gray-100 bg-white p-6 shadow-card transition-all hover:border-brand-blue/30 hover:shadow-medium"
            >
              <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-brand-blue-muted transition-colors group-hover:bg-brand-blue">
                <item.icon className="h-7 w-7 text-brand-blue transition-colors group-hover:text-white" />
              </div>
              <h3 className="mb-2 font-semibold text-neutral-graphite">{item.title}</h3>
              <p className="text-sm leading-relaxed text-gray-500">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
