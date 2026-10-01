'use client';

import { motion } from 'framer-motion';
import { Star, Quote, ExternalLink } from 'lucide-react';

const GOOGLE_MAPS_LINK =
  'https://www.google.com/maps/place/Virtual+Carrinhos/@-23.4971191,-46.4095136,17z/data=!3m1!4b1!4m6!3m5!1s0x94ce6383a3c34e1d:0x66ddd8048095cc66!8m2!3d-23.4971192!4d-46.4046427!16s%2Fg%2F11s98d9zjd?entry=ttu&g_ep=EgoyMDI2MDYyOS4wIKXMDSoASAFQAw%3D%3D';

const testimonials = [
  {
    name: 'Marcos Augusto',
    role: 'Cliente Verificado',
    content: 'Comprei dois carrinhos e fiquei muito satisfeito. Material de ótima qualidade, resistente e bem acabado. Entrega rápida e atendimento excelente. Recomendo muito!',
    rating: 5,
    source: 'Google',
  },
  {
    name: 'Fernanda Costa',
    role: 'Cliente Verificada',
    content: 'Atendimento incrível! Me ajudaram a escolher o modelo ideal para minha necessidade. O carrinho chegou perfeito, exatamente como anunciado. Super recomendo a Virtual Carrinhos!',
    rating: 5,
    source: 'Google',
  },
  {
    name: 'Roberto Mendes',
    role: 'Cliente Verificado',
    content: 'Excelente empresa! Comprei o carrinho plataforma e a qualidade superou minhas expectativas. Muito resistente, ótimo acabamento. Já indiquei para vários amigos.',
    rating: 5,
    source: 'Google',
  },
  {
    name: 'Patricia Souza',
    role: 'Cliente Verificada',
    content: 'Produto de altíssima qualidade. O carrinho é muito bem feito e o atendimento foi rápido e eficiente. Com certeza vou comprar mais. 5 estrelas com certeza!',
    rating: 5,
    source: 'Instagram',
  },
  {
    name: 'Diego Almeida',
    role: 'Cliente Verificado',
    content: 'Ótima compra! Carrinhos muito bem fabricados, material de primeira. O pessoal da loja é muito atencioso e me explicou tudo direitinho. Nota 10!',
    rating: 5,
    source: 'Google',
  },
  {
    name: 'Claudia Ferreira',
    role: 'Cliente Verificada',
    content: 'Melhor loja de carrinhos que já comprei. Qualidade excepcional, preço justo e entrega no prazo. O carrinho já está em uso na empresa e está perfeito. Muito obrigada!',
    rating: 5,
    source: 'Instagram',
  },
];

export default function Testimonials() {
  return (
    <section id="depoimentos" className="section-padding bg-white">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto mb-14 max-w-2xl text-center"
        >
          <span className="badge-blue mb-4">Depoimentos</span>

          {/* Star Rating Summary */}
          <div className="mt-4 mb-4 flex items-center justify-center gap-2">
            {[1, 2, 3, 4, 5].map((i) => (
              <Star key={i} className="h-7 w-7 fill-yellow-400 text-yellow-400" />
            ))}
          </div>
          <div className="mb-2 flex items-center justify-center gap-3">
            <span className="text-4xl font-bold text-neutral-graphite">5,0</span>
            <div className="text-left">
              <p className="font-semibold text-neutral-graphite">Classificação no Google</p>
              <p className="text-sm text-gray-500">66 avaliações verificadas</p>
            </div>
          </div>

          <h2 className="mt-6 text-3xl font-bold text-neutral-graphite sm:text-4xl">
            O Que Dizem Nossos Clientes
          </h2>
          <p className="mt-3 text-lg text-gray-600">
            A satisfação de cada cliente é a nossa maior conquista.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08, duration: 0.5 }}
              className="relative rounded-2xl border border-gray-100 bg-white p-7 shadow-card transition-all hover:shadow-medium"
            >
              <Quote className="absolute right-6 top-6 h-8 w-8 text-brand-blue/10" />

              {/* Stars */}
              <div className="mb-4 flex gap-0.5">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              <p className="mb-6 text-gray-600 leading-relaxed">
                &ldquo;{testimonial.content}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-blue/10 text-base font-bold text-brand-blue">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold text-neutral-graphite">{testimonial.name}</p>
                    <p className="text-xs text-gray-400">{testimonial.role}</p>
                  </div>
                </div>
                <span
                  className={`rounded-full px-2.5 py-1 text-xs font-semibold ${
                    testimonial.source === 'Google'
                      ? 'bg-blue-50 text-blue-600'
                      : 'bg-pink-50 text-pink-600'
                  }`}
                >
                  {testimonial.source}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Google CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="mt-12 text-center"
        >
          <a
            href={GOOGLE_MAPS_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl border-2 border-brand-blue px-8 py-3.5 text-base font-semibold text-brand-blue transition-all hover:bg-brand-blue hover:text-white"
          >
            <ExternalLink className="h-5 w-5" />
            Ver Avaliações no Google
          </a>
        </motion.div>
      </div>
    </section>
  );
}
