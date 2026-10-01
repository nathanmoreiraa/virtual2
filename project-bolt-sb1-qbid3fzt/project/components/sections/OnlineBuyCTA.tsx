'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { ExternalLink } from 'lucide-react';

const FB_LINK =
  'https://www.facebook.com/marketplace/profile/61559704200603/';

const ML_LINK =
  'https://lista.mercadolivre.com.br/_CustId_1819589057?item_id=MLB5709020642&category_id=MLB271400&seller_id=1819589057&client=recoview-selleritems&recos_listing=true#origin=upp&component=sellerData&typeSeller=classic';

const channels = [
  {
    name: 'Marketplace do Facebook',
    description: 'Confira os anúncios, fotos e preços diretamente no Facebook.',
    href: FB_LINK,
    bgColor: 'bg-[#1877F2]',
    hoverColor: 'hover:bg-[#166FE5]',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-7 w-7">
        <path d="M24 12.073C24 5.406 18.627 0 12 0S0 5.406 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047v-2.66c0-3.025 1.792-4.697 4.533-4.697 1.312 0 2.686.236 2.686.236v2.97h-1.513c-1.491 0-1.956.93-1.956 1.884v2.267h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z"/>
      </svg>
    ),
  },
  {
    name: 'Mercado Livre',
    description: 'Compre com segurança pela plataforma com maior proteção do Brasil.',
    href: ML_LINK,
    bgColor: 'bg-[#FFE600]',
    hoverColor: 'hover:bg-[#F5DC00]',
    textColor: 'text-[#333333]',
    useImage: true,
  },
];

export default function OnlineBuyCTA() {
  return (
    <section className="section-padding bg-neutral-graphite">
      <div className="container-custom">
        <div className="mx-auto grid max-w-3xl gap-6 sm:grid-cols-2">
          {channels.map((channel, index) => (
            <motion.a
              key={channel.name}
              href={channel.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.12, duration: 0.5 }}
              whileHover={{ y: -4 }}
              className="group flex flex-col items-center gap-5 rounded-2xl bg-white/5 border border-white/10 p-8 text-center transition-all hover:border-white/20 hover:bg-white/10"
            >
              <div className={`flex h-16 w-16 items-center justify-center rounded-2xl ${channel.bgColor} shadow-lg transition-transform group-hover:scale-110`}>
                {channel.useImage ? (
                  <div className="relative h-10 w-10">
                    <Image
                      src="/images/marketplace/ml.png"
                      alt="Mercado Livre"
                      fill
                      className="object-contain"
                    />
                  </div>
                ) : (
                  <span className={channel.textColor ?? 'text-white'}>{channel.icon}</span>
                )}
              </div>
              <div>
                <h3 className="mb-2 text-lg font-bold text-white">{channel.name}</h3>
                <p className="text-sm leading-relaxed text-gray-400">{channel.description}</p>
              </div>
              <span className={`inline-flex items-center gap-2 rounded-xl px-6 py-3 text-sm font-semibold transition-colors ${channel.bgColor} ${channel.hoverColor} ${channel.textColor ?? 'text-white'}`}>
                <ExternalLink className="h-4 w-4" />
                Acessar
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
