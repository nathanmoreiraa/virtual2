'use client';

import { motion } from 'framer-motion';
import { MessageCircle, ArrowRight, Phone } from 'lucide-react';

const WA_LINK =
  'https://api.whatsapp.com/send/?phone=5511920003108&text=Ol%C3%A1%2C+tudo+bem%3F+Vim+do+Instagram+e+quero+saber+mais+sobre+os+carrinhos+%3A%29&type=phone_number&app_absent=0';

export default function CTA() {
  return (
    <section className="relative overflow-hidden bg-brand-blue py-20 lg:py-28">
      {/* Background glows */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-brand-blue-light/20 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-brand-blue-dark/40 blur-3xl" />
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <h2 className="mb-6 text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            Solicite Agora Seu Orçamento
          </h2>
          <p className="mb-10 text-lg leading-relaxed text-blue-100">
            Entre em contato conosco e receba uma proposta personalizada sem
            compromisso. Nossa equipe responde em até 24 horas úteis.
          </p>

          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 rounded-xl bg-[#25D366] px-8 py-4 text-lg font-semibold text-white shadow-large transition-all hover:scale-105 hover:shadow-xl"
            >
              <MessageCircle className="h-6 w-6" />
              Chamar no WhatsApp
            </a>

            <a
              href="tel:+5511920003108"
              className="inline-flex items-center justify-center gap-3 rounded-xl border-2 border-white bg-transparent px-8 py-4 text-lg font-semibold text-white transition-all hover:bg-white hover:text-brand-blue"
            >
              <Phone className="h-6 w-6" />
              (11) 92000-3108
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
