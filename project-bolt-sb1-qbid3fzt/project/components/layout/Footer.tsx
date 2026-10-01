'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Phone, Mail, MapPin, Clock, MessageCircle, Instagram, Facebook } from 'lucide-react';

const WA_LINK =
  'https://api.whatsapp.com/send/?phone=5511920003108&text=Ol%C3%A1%2C+tudo+bem%3F+Vim+do+Instagram+e+quero+saber+mais+sobre+os+carrinhos+%3A%29&type=phone_number&app_absent=0';

const quickLinks = [
  { name: 'Início', href: '/' },
  { name: 'Quem Somos', href: '/#sobre' },
  { name: 'Produtos', href: '/#modelos' },
  { name: 'Solicitar Orçamento', href: '/orcamento' },
  { name: 'Contato', href: '/contato' },
];

const products = [
  'Carrinho Médio 3.50x4',
  'Carrinho Mini Roda 3.50x4',
  'Plataforma 5ª Roda Madeira',
  'Regulável',
  'Sacarias Roda de Alumínio',
  'Tela para Rodízio',
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-neutral-graphite text-white">
      <div className="container-custom section-padding">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4 lg:gap-8 lg:items-start">
          {/* Company Info */}
          <div className="space-y-5">
            <div className="flex items-center gap-3">
              <div className="relative h-12 w-12 flex-shrink-0">
                <Image src="/LOGO.png" alt="Virtual Carrinhos" fill className="object-contain" />
              </div>
              <span className="font-heading text-xl font-bold">Virtual Carrinhos</span>
            </div>
            <p className="text-sm leading-relaxed text-gray-400">
              Especialistas em carrinhos de carga com mais de 6.000 clientes atendidos.
              Qualidade, resistência e atendimento personalizado.
            </p>
            <div className="flex flex-col gap-4">
              <div className="flex gap-3">
                <a
                  href="https://www.instagram.com/virtualcarrinhos1/?hl=pt-br"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/5 transition-colors hover:bg-brand-blue"
                  aria-label="Instagram"
                >
                  <Instagram className="h-5 w-5" />
                </a>
                <a
                  href="https://www.facebook.com/marketplace/profile/61559704200603/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/5 transition-colors hover:bg-brand-blue"
                  aria-label="Marketplace do Facebook"
                >
                  <Facebook className="h-5 w-5" />
                </a>
              </div>
              <a
                href="https://www.instagram.com/virtualcarrinhos1/?hl=pt-br"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-gray-400 transition-colors hover:text-white"
              >
                <Instagram className="h-4 w-4 text-[#E1306C]" />
                @virtualcarrinhos1
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-5">
            <h3 className="font-heading text-lg font-semibold text-gray-200">Links Rápidos</h3>
            <ul className="space-y-3.5">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 transition-colors hover:text-brand-blue-light"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div className="space-y-5">
            <h3 className="font-heading text-lg font-semibold text-gray-200">Nossos Produtos</h3>
            <ul className="space-y-3.5">
              {products.map((product) => (
                <li key={product}>
                  <span className="text-sm text-gray-400">{product}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-5">
            <h3 className="font-heading text-lg font-semibold text-gray-200">Contato</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="mt-1 h-5 w-5 flex-shrink-0 text-brand-blue-light" />
                <address className="not-italic text-sm text-gray-400">
                  R. Monte Camberela, Nº 183<br />
                  Itaim Paulista<br />
                  São Paulo - SP<br />
                  CEP 08110-260
                </address>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 flex-shrink-0 text-brand-blue-light" />
                <a
                  href="tel:+5511920003108"
                  className="text-sm text-gray-400 transition-colors hover:text-brand-blue-light"
                >
                  (11) 92000-3108
                </a>
              </li>
              <li className="flex items-center gap-3">
                <MessageCircle className="h-5 w-5 flex-shrink-0 text-brand-blue-light" />
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gray-400 transition-colors hover:text-brand-blue-light"
                >
                  WhatsApp
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 flex-shrink-0 text-brand-blue-light" />
                <a
                  href="mailto:contato@virtualcarrinhos.com.br"
                  className="text-sm text-gray-400 transition-colors hover:text-brand-blue-light"
                >
                  contato@virtualcarrinhos.com.br
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="mt-0.5 h-5 w-5 flex-shrink-0 text-brand-blue-light" />
                <div className="text-sm text-gray-400">
                  <p className="font-semibold text-gray-300">Atendimento</p>
                  <p className="text-xs text-gray-500">Horário de funcionamento</p>
                  <div className="mt-1.5 space-y-0.5">
                    <p className="whitespace-nowrap">
                      <span className="font-medium text-gray-300">Segunda a Sexta-feira</span>
                      <span className="text-gray-500"> · 08:30 às 18:00</span>
                    </p>
                    <p className="whitespace-nowrap">
                      <span className="font-medium text-gray-300">Sábado</span>
                      <span className="text-gray-500"> · 08:30 às 14:00</span>
                    </p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-700">
        <div className="container-custom flex flex-col items-center justify-between gap-4 py-6 md:flex-row">
          <p className="text-sm text-gray-500">
            {currentYear} Virtual Carrinhos. Todos os direitos reservados.
          </p>
          <div className="flex gap-6">
            <Link href="#" className="text-sm text-gray-500 transition-colors hover:text-gray-300">
              Política de Privacidade
            </Link>
            <Link href="#" className="text-sm text-gray-500 transition-colors hover:text-gray-300">
              Termos de Uso
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
