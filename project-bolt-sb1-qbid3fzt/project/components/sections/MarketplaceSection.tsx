'use client';

import { motion } from 'framer-motion';
import { ShoppingCart, ExternalLink } from 'lucide-react';

export default function MarketplaceSection() {
  return (
    <section className="section-padding bg-neutral-gray-light">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl overflow-hidden rounded-2xl bg-white shadow-card"
        >
          <div className="bg-brand-blue p-8 text-center text-white sm:p-10">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-white/20">
              <ShoppingCart className="h-8 w-8 text-white" />
            </div>
            <h2 className="text-2xl font-bold sm:text-3xl">
              Também Estamos no Marketplace
            </h2>
            <p className="mt-3 text-blue-100">
              Encontre todos os nossos produtos no Marketplace do Facebook.
              Veja anúncios, fotos e entre em contato direto pelo aplicativo.
            </p>
          </div>

          <div className="p-8 text-center sm:p-10">
            <p className="mb-6 text-gray-600">
              Acesse o Marketplace da Virtual Carrinhos e confira a variedade
              completa de carrinhos de carga disponíveis.
            </p>

            <motion.a
              href="#"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-3 rounded-xl bg-[#1877F2] px-8 py-4 text-base font-semibold text-white transition-colors hover:bg-[#166FE5]"
            >
              <ExternalLink className="h-5 w-5" />
              Acessar Marketplace
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
