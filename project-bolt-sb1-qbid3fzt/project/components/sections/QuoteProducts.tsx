'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from '@/components/ui/carousel';

const products = [
  {
    name: 'Carrinho Médio 3.50x4',
    image: '/images/products/medio350x4.jpg',
  },
  {
    name: 'Carrinho Mini Roda 3.50x4',
    image: '/images/products/mini_350x4.jpg',
  },
  {
    name: 'Plataforma 5ª Roda Madeira',
    image: '/images/products/plataforma_de_madeira.jpg',
  },
  {
    name: 'Carrinho Regulável',
    image: '/images/products/regulavel.jpg',
  },
];

export default function QuoteProducts() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto mb-12 max-w-2xl text-center"
        >
          <span className="badge-blue mb-4">Nossos Produtos</span>
          <h2 className="mt-4 mb-4 text-3xl font-bold text-neutral-graphite sm:text-4xl">
            Conheça Nossos Carrinhos
          </h2>
          <p className="text-lg text-gray-600">
            Qualidade e resistência em cada detalhe. Arraste para navegar.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-4xl"
        >
          <Carousel
            opts={{
              align: 'center',
              loop: true,
            }}
            className="px-2 sm:px-12"
          >
            <CarouselContent>
              {products.map((product) => (
                <CarouselItem key={product.name} className="basis-full sm:basis-1/2">
                  <div className="group overflow-hidden rounded-2xl bg-neutral-gray-light shadow-card transition-all hover:shadow-large">
                    <div className="relative flex h-72 items-center justify-center p-6 sm:h-80">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-contain p-6 transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                    <div className="bg-white px-6 py-4 text-center">
                      <h3 className="text-base font-semibold text-neutral-graphite">
                        {product.name}
                      </h3>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden sm:flex" />
            <CarouselNext className="hidden sm:flex" />
          </Carousel>
        </motion.div>
      </div>
    </section>
  );
}
