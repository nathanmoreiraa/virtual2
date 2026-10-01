'use client';

import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown } from 'lucide-react';
import Image from 'next/image';

const WA_LINK =
  'https://api.whatsapp.com/send/?phone=5511920003108&text=Ol%C3%A1%2C+tudo+bem%3F+Vim+do+Instagram+e+quero+saber+mais+sobre+os+carrinhos+%3A%29&type=phone_number&app_absent=0';

export default function Hero() {
  const handleScrollToProdutos = () => {
    const el = document.getElementById('modelos');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative flex min-h-[85vh] items-center overflow-hidden bg-[#070E21] pt-16">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/store-facade/ChatGPT_Image_4_de_jul._de_2026,_23_29_05.png"
          alt="Carrinho de carga Virtual Carrinhos"
          fill
          className="object-cover opacity-50"
          priority
        />
        {/* Refined gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#070E21]/98 via-[#070E21]/85 to-[#070E21]/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#070E21]/60 via-transparent to-[#070E21]/20" />

        {/* Subtle accent glow */}
        <div className="absolute -bottom-32 -left-32 h-[600px] w-[600px] rounded-full bg-brand-blue/5 blur-[150px]" />
      </div>

      {/* Content */}
      <div className="container-custom relative z-10 py-16 lg:py-20">
        <div className="max-w-[640px]">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 backdrop-blur-sm"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-brand-blue-light" />
            <span className="text-xs font-medium tracking-[0.18em] text-white/60 uppercase">
              Virtual Carrinhos
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.08 }}
            className="mb-8 text-[2.35rem] font-bold leading-[1.12] tracking-tight text-white sm:text-[2.75rem] lg:text-[3.25rem]"
          >
            Resistência que{' '}
            <span className="bg-gradient-to-r from-[#60A5FA] via-[#93C5FD] to-[#DBEAFE] bg-clip-text text-transparent">
              acompanha
            </span>{' '}
            o ritmo do seu trabalho.
          </motion.h1>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.18 }}
            className="flex flex-col gap-2.5 sm:flex-row"
          >
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-brand-blue px-6 py-3.5 text-[15px] font-semibold text-white shadow-blue transition-all duration-200 hover:bg-brand-blue-dark hover:shadow-xl active:scale-[0.98]"
            >
              Solicitar Orçamento
              <ArrowRight className="h-4.5 w-4.5" />
            </a>
            <button
              onClick={handleScrollToProdutos}
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/[0.04] px-6 py-3.5 text-[15px] font-medium text-white/90 backdrop-blur-sm transition-all duration-200 hover:border-white/30 hover:bg-white/[0.08] active:scale-[0.98]"
            >
              Ver Catálogo
              <ChevronDown className="h-4 w-4" />
            </button>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
          className="flex h-9 w-5 items-center justify-center rounded-full border border-white/15 bg-white/[0.02]"
        >
          <motion.div className="h-1.5 w-0.5 rounded-full bg-brand-blue-light/50" />
        </motion.div>
      </motion.div>
    </section>
  );
}
