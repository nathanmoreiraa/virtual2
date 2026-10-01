'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';
import { Award, Headphones, ShieldCheck, MapPin, Star } from 'lucide-react';

const MAPS_LINK =
  'https://www.google.com/maps/place/Virtual+Carrinhos/@-23.4971191,-46.4095136,17z/data=!3m1!4b1!4m6!3m5!1s0x94ce6383a3c34e1d:0x66ddd8048095cc66!8m2!3d-23.4971192!4d-46.4046427!16s%2Fg%2F11s98d9zjd?entry=ttu&g_ep=EgoyMDI2MDYyOS4wIKXMDSoASAFQAw%3D%3D';

const highlights = [
  {
    icon: ShieldCheck,
    title: 'Qualidade Garantida',
    description: 'Produtos fabricados com aço de alta qualidade e acabamento impecável.',
  },
  {
    icon: Headphones,
    title: 'Atendimento Especializado',
    description: 'Equipe preparada para indicar a solução ideal para cada necessidade.',
  },
  {
    icon: Award,
    title: '5,0 no Google',
    description: '66 avaliações verificadas de clientes reais e satisfeitos.',
  },
  {
    icon: MapPin,
    title: 'Loja Física',
    description: 'Venha nos visitar no Itaim Paulista — São Paulo/SP.',
  },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <section id="sobre" className="section-padding bg-neutral-gray-light">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto mb-12 max-w-2xl text-center"
        >
          <span className="badge-blue mb-4">Quem Somos</span>
          <h2 className="mt-4 text-3xl font-bold text-neutral-graphite sm:text-4xl">
            Nossa Loja
          </h2>
          <p className="mt-3 text-lg text-gray-600">
            Há anos oferecendo soluções em carrinhos de carga com qualidade e confiança.
          </p>
        </motion.div>

        {/* Image and Info Grid */}
        <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Image */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
            transition={{ duration: 0.55 }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-2xl shadow-large aspect-[4/3]">
              <Image
                src="/images/hero/ChatGPT_Image_6_de_jul._de_2026,_14_39_23.png"
                alt="Virtual Carrinhos — nossa loja no Itaim Paulista"
                fill
                className="object-cover"
              />
            </div>

            {/* Address floating card */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
              transition={{ delay: 0.25, duration: 0.45 }}
              className="absolute -bottom-4 left-4 right-4 rounded-xl bg-white px-5 py-4 shadow-large sm:left-auto sm:right-6 sm:w-auto sm:min-w-[280px]"
            >
              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-5 w-5 flex-shrink-0 text-brand-blue" />
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-brand-blue">
                    Nossa Loja
                  </p>
                  <p className="mt-0.5 text-sm font-medium text-neutral-graphite">
                    R. Monte Camberela, 183
                  </p>
                  <p className="text-xs text-gray-500">Itaim Paulista — São Paulo/SP</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <p className="mb-8 text-base leading-relaxed text-gray-600">
                A Virtual Carrinhos se tornou referência em São Paulo pela qualidade dos
                produtos, atendimento especializado e compromisso com cada cliente. Em nossa
                loja no Itaim Paulista, ajudamos empresas e profissionais a encontrar o
                equipamento ideal para cada necessidade, sempre com foco em durabilidade,
                segurança e excelente custo-benefício.
              </p>
            </motion.div>

            {/* Highlights Grid */}
            <div className="grid grid-cols-2 gap-4">
              {highlights.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08, duration: 0.45 }}
                  className="rounded-xl bg-white p-4 shadow-soft transition-all hover:shadow-medium"
                >
                  <item.icon className="mb-2.5 h-6 w-6 text-brand-blue" />
                  <h4 className="mb-1 text-sm font-semibold text-neutral-graphite">{item.title}</h4>
                  <p className="text-xs leading-relaxed text-gray-500">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Google Rating Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-14 flex justify-center"
        >
          <a
            href={MAPS_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 rounded-2xl border border-gray-200 bg-white px-6 py-4 shadow-soft transition-all hover:border-brand-blue/30 hover:shadow-card"
          >
            <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-[#4285F4]/10">
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                {[1,2,3,4,5].map((s) => (
                  <Star key={s} className="h-4 w-4 fill-[#FBBC05] text-[#FBBC05]" />
                ))}
                <span className="ml-1 text-base font-bold text-neutral-graphite">5,0</span>
              </div>
              <p className="text-xs text-gray-500">66 avaliações no Google</p>
            </div>
            <span className="ml-2 text-xs font-semibold text-brand-blue opacity-0 transition-opacity group-hover:opacity-100">
              Ver →
            </span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
