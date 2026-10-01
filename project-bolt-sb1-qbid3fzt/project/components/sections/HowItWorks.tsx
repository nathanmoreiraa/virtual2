'use client';

import { motion } from 'framer-motion';
import { MessageCircle, Search, Factory, Truck, CheckCircle2 } from 'lucide-react';

const WA_LINK =
  'https://api.whatsapp.com/send/?phone=5511920003108&text=Ol%C3%A1%2C+tudo+bem%3F+Vim+do+Instagram+e+quero+saber+mais+sobre+os+carrinhos+%3A%29&type=phone_number&app_absent=0';

const steps = [
  {
    number: '01',
    icon: MessageCircle,
    title: 'Entre em Contato',
    description: 'Fale conosco via WhatsApp ou pelo formulário do site.',
  },
  {
    number: '02',
    icon: Search,
    title: 'Entendemos sua Necessidade',
    description: 'Analisamos suas demandas e indicamos o modelo ideal.',
  },
  {
    number: '03',
    icon: Factory,
    title: 'Fabricamos ou Reformamos',
    description: 'Produzimos ou recuperamos seu carrinho com qualidade.',
  },
  {
    number: '04',
    icon: Truck,
    title: 'Entrega do Produto',
    description: 'Entregamos seu carrinho pronto para uso, no prazo.',
  },
];

export default function HowItWorks() {
  return (
    <section id="como-funciona" className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto mb-14 max-w-2xl text-center"
        >
          <span className="badge-blue mb-4">Processo</span>
          <h2 className="mt-4 mb-4 text-3xl font-bold text-neutral-graphite sm:text-4xl">
            Como Funciona
          </h2>
          <p className="text-lg text-gray-600">
            Um processo simples e transparente do início ao fim.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line - Desktop */}
          <div className="absolute left-1/2 top-0 hidden h-full w-0.5 bg-gradient-to-b from-brand-blue via-brand-blue-light to-transparent lg:block" />

          <div className="space-y-10 lg:space-y-0">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.5 }}
                className={`relative flex items-center gap-6 lg:gap-0 ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}
              >
                {/* Content */}
                <div className={`flex-1 ${index % 2 === 0 ? 'lg:pr-16 lg:text-right' : 'lg:pl-16'}`}>
                  <div
                    className={`rounded-2xl bg-neutral-gray-light p-7 ${
                      index % 2 === 0 ? 'lg:ml-auto lg:max-w-md' : 'lg:mr-auto lg:max-w-md'
                    }`}
                  >
                    <span className="mb-2 inline-block text-sm font-bold tracking-wider text-brand-blue">
                      PASSO {step.number}
                    </span>
                    <h3 className="mb-3 text-xl font-semibold text-neutral-graphite">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>

                {/* Icon Center - Desktop */}
                <div className="relative z-10 hidden lg:flex">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-brand-blue shadow-blue">
                    <step.icon className="h-7 w-7 text-white" />
                  </div>
                </div>

                <div className="hidden flex-1 lg:block" />

                {/* Mobile Icon */}
                <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-full bg-brand-blue shadow-blue lg:hidden">
                  <step.icon className="h-6 w-6 text-white" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Final CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="mt-16 text-center"
        >
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-green-100 px-6 py-3 text-green-700 font-semibold transition-colors hover:bg-green-200"
          >
            <CheckCircle2 className="h-5 w-5" />
            Pronto para começar? Fale conosco agora
          </a>
        </motion.div>
      </div>
    </section>
  );
}
