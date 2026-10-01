'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';

const faqs = [
  {
    question: 'Vocês fabricam carrinhos sob medida?',
    answer: 'Sim! Trabalhamos com produtos personalizados de acordo com as especificações do cliente. Entre em contato via WhatsApp, descreva sua necessidade e nossa equipe apresentará a melhor solução.',
  },
  {
    question: 'Vocês fazem reforma de carrinhos?',
    answer: 'Sim, realizamos reformas completas em carrinhos de carga. Substituímos peças desgastadas, pintamos e recuperamos o equipamento como novo.',
  },
  {
    question: 'Como funciona o processo de orçamento?',
    answer: 'É simples e rápido:\n\n1. Entre em contato via WhatsApp.\n2. Descreva o carrinho ou serviço desejado.\n3. Nossa equipe retornará com um orçamento detalhado em até 24 horas úteis.\n\nSem compromisso e totalmente gratuito.',
  },
  {
    question: 'Vocês atendem empresas?',
    answer: 'Sim, atendemos empresas de todos os portes — indústrias, depósitos, transportadoras, supermercados e comércios em geral. Temos condições especiais para pedidos em quantidade.',
  },
  {
    question: 'Como funciona a entrega?',
    answer: 'Realizamos entregas em toda a Grande São Paulo e para todo o Brasil via transportadora. O prazo e valor do frete são calculados conforme a localização e a quantidade de itens.',
  },
  {
    question: 'Os produtos têm garantia?',
    answer: 'Sim. Todos os nossos carrinhos possuem garantia contra defeitos de fabricação. Estamos à disposição para solucionar qualquer problema no pós-venda.',
  },
  {
    question: 'Onde fica a loja física?',
    answer: 'Estamos localizados na R. Monte Camberela, Nº 183 — Itaim Paulista, São Paulo - SP, CEP 08110-260. Atendemos de Segunda a Sexta, das 8h às 18h, e Sábados das 8h às 13h.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="section-padding bg-neutral-gray-light">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto mb-14 max-w-2xl text-center"
        >
          <span className="badge-blue mb-4">Dúvidas</span>
          <h2 className="mt-4 mb-4 text-3xl font-bold text-neutral-graphite sm:text-4xl">
            Perguntas Frequentes
          </h2>
          <p className="text-lg text-gray-600">
            Tire suas dúvidas sobre nossos produtos e serviços.
          </p>
        </motion.div>

        <div className="mx-auto max-w-3xl space-y-3">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, duration: 0.4 }}
              className="overflow-hidden rounded-xl bg-white shadow-soft"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="flex w-full items-center justify-between p-6 text-left transition-colors hover:bg-brand-blue-lighter"
              >
                <span className="flex items-center gap-4">
                  <HelpCircle className="h-5 w-5 flex-shrink-0 text-brand-blue" />
                  <span className="font-semibold text-neutral-graphite">{faq.question}</span>
                </span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="ml-4 flex-shrink-0"
                >
                  <ChevronDown className="h-5 w-5 text-gray-400" />
                </motion.div>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="border-t border-gray-100 px-6 pb-6 pt-4">
                      <p className="whitespace-pre-line pl-9 text-gray-600 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
