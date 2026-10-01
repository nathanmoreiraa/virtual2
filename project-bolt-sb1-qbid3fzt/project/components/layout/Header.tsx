'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, MessageCircle } from 'lucide-react';

const WA_LINK =
  'https://api.whatsapp.com/send/?phone=5511920003108&text=Ol%C3%A1%2C+tudo+bem%3F+Vim+do+Instagram+e+quero+saber+mais+sobre+os+carrinhos+%3A%29&type=phone_number&app_absent=0';

const navigation = [
  { name: 'Início', href: '/' },
  { name: 'Quem Somos', href: '/#sobre' },
  { name: 'Produtos', href: '/#modelos' },
  { name: 'Orçamento', href: '/orcamento' },
  { name: 'Contato', href: '/contato' },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 shadow-soft backdrop-blur-sm'
          : 'bg-transparent'
      }`}
    >
      <nav className="container-custom">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="relative h-12 w-12 flex-shrink-0">
              <Image
                src="/LOGO.png"
                alt="Virtual Carrinhos"
                fill
                className="object-contain"
              />
            </div>
            <span
              className={`font-heading text-xl font-bold transition-colors duration-300 ${
                isScrolled ? 'text-neutral-graphite' : 'text-white'
              }`}
            >
              Virtual Carrinhos
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-7 md:flex">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`text-sm font-medium transition-colors duration-200 ${
                  isScrolled
                    ? 'text-neutral-graphite hover:text-brand-blue'
                    : 'text-white/90 hover:text-white'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              <MessageCircle className="h-4 w-4" />
              Solicitar Orçamento
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`flex h-10 w-10 items-center justify-center rounded-lg transition-colors md:hidden ${
              isScrolled ? 'hover:bg-neutral-gray-light' : 'hover:bg-white/10'
            }`}
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? 'Fechar menu' : 'Abrir menu'}
          >
            {isOpen ? (
              <X className={`h-6 w-6 ${isScrolled ? 'text-neutral-graphite' : 'text-white'}`} />
            ) : (
              <Menu className={`h-6 w-6 ${isScrolled ? 'text-neutral-graphite' : 'text-white'}`} />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden bg-white md:hidden"
            >
              <div className="flex flex-col gap-1 pb-6 pt-4">
                {navigation.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.06 }}
                  >
                    <Link
                      href={item.href}
                      className="block rounded-lg px-4 py-3 text-base font-medium text-neutral-graphite transition-colors hover:bg-brand-blue-lighter hover:text-brand-blue"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: navigation.length * 0.06 }}
                  className="px-4 pt-2"
                >
                  <a
                    href={WA_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary w-full"
                  >
                    <MessageCircle className="h-5 w-5" />
                    Solicitar Orçamento
                  </a>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
