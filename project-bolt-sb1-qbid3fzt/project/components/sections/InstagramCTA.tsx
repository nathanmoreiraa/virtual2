'use client';

import { motion } from 'framer-motion';
import { Instagram } from 'lucide-react';

const IG_LINK = 'https://www.instagram.com/virtualcarrinhos1/?hl=pt-br';

export default function InstagramCTA() {
  return (
    <section className="section-padding bg-neutral-gray-light">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl overflow-hidden rounded-2xl bg-white shadow-card"
        >
          {/* Gradient header */}
          <div className="bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045] p-8 text-center text-white sm:p-10">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-white/20">
              <Instagram className="h-8 w-8 text-white" />
            </div>
            <h2 className="text-2xl font-bold sm:text-3xl">
              Acompanhe nosso dia a dia
            </h2>
            <p className="mt-3 text-white/80 leading-relaxed">
              Conheça novos produtos, reformas, novidades e conteúdos publicados diariamente pela Virtual Carrinhos.
            </p>
          </div>

          <div className="flex flex-col items-center gap-5 p-8 text-center sm:p-10">
            <span className="inline-flex items-center gap-2 rounded-xl bg-gray-100 px-5 py-2.5 text-base font-semibold text-neutral-graphite">
              <Instagram className="h-5 w-5 text-[#E1306C]" />
              @virtualcarrinhos1
            </span>

            <motion.a
              href={IG_LINK}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-3 rounded-xl bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045] px-8 py-4 text-base font-semibold text-white shadow-large transition-shadow hover:shadow-xl"
            >
              <Instagram className="h-5 w-5" />
              Seguir no Instagram
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
