'use client';

import { useState, FormEvent } from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Send, MessageCircle, User, Building2, MapPin, Phone, Mail } from 'lucide-react';

const WA_LINK =
  'https://api.whatsapp.com/send/?phone=5511920003108&text=Ol%C3%A1%2C+tudo+bem%3F+Vim+do+Instagram+e+quero+saber+mais+sobre+os+carrinhos+%3A%29&type=phone_number&app_absent=0';

export default function QuoteForm() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    city: '',
    phone: '',
    whatsapp: '',
    email: '',
    message: '',
  });

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    await new Promise((resolve) => setTimeout(resolve, 800));

    const message = `Olá, tudo bem? Vim do site e quero solicitar um orçamento :)

Nome: ${formData.name}
Empresa: ${formData.company}
Cidade: ${formData.city}
Telefone: ${formData.phone}
WhatsApp: ${formData.whatsapp}
E-mail: ${formData.email}

Mensagem: ${formData.message}`;

    window.open(
      `https://api.whatsapp.com/send/?phone=5511920003108&text=${encodeURIComponent(message)}&type=phone_number&app_absent=0`,
      '_blank'
    );

    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <section className="section-padding bg-neutral-gray-light">
      <div className="container-custom">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left Side - Info */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6 }}
          >
            <span className="badge-blue mb-4">Orçamento</span>
            <h1 className="mt-4 mb-6 text-3xl font-bold text-neutral-graphite sm:text-4xl lg:text-5xl">
              Faça um Orçamento
            </h1>
            <p className="mb-8 text-lg text-gray-600">
              Preencha o formulário ou entre em contato diretamente pelo WhatsApp
              para solicitar seu orçamento sem compromisso. Nossa equipe responde em até
              24 horas úteis.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-4 rounded-xl bg-white p-4 shadow-soft">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-brand-blue-muted">
                  <Phone className="h-6 w-6 text-brand-blue" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Telefone</p>
                  <a href="tel:+5511920003108" className="font-semibold text-neutral-graphite hover:text-brand-blue">
                    (11) 92000-3108
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 rounded-xl bg-white p-4 shadow-soft">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#25D366]/10">
                  <MessageCircle className="h-6 w-6 text-[#25D366]" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">WhatsApp</p>
                  <a
                    href={WA_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-neutral-graphite hover:text-[#25D366]"
                  >
                    Clique para conversar
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 rounded-xl bg-white p-4 shadow-soft">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-brand-blue-muted">
                  <Mail className="h-6 w-6 text-brand-blue" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">E-mail</p>
                  <a
                    href="mailto:contato@virtualcarrinhos.com.br"
                    className="font-semibold text-neutral-graphite hover:text-brand-blue"
                  >
                    contato@virtualcarrinhos.com.br
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Side - Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="rounded-2xl bg-white p-8 shadow-card lg:p-10">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="mb-2 block text-sm font-medium text-neutral-graphite">
                      Nome *
                    </label>
                    <div className="relative">
                      <User className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
                      <input type="text" id="name" name="name" required value={formData.name} onChange={handleChange} className="input-field pl-12" placeholder="Seu nome" />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="company" className="mb-2 block text-sm font-medium text-neutral-graphite">
                      Empresa
                    </label>
                    <div className="relative">
                      <Building2 className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
                      <input type="text" id="company" name="company" value={formData.company} onChange={handleChange} className="input-field pl-12" placeholder="Sua empresa" />
                    </div>
                  </div>
                </div>

                <div>
                  <label htmlFor="city" className="mb-2 block text-sm font-medium text-neutral-graphite">
                    Cidade *
                  </label>
                  <div className="relative">
                    <MapPin className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
                    <input type="text" id="city" name="city" required value={formData.city} onChange={handleChange} className="input-field pl-12" placeholder="Sua cidade" />
                  </div>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="phone" className="mb-2 block text-sm font-medium text-neutral-graphite">
                      Telefone *
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
                      <input type="tel" id="phone" name="phone" required value={formData.phone} onChange={handleChange} className="input-field pl-12" placeholder="(00) 00000-0000" />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="whatsapp" className="mb-2 block text-sm font-medium text-neutral-graphite">
                      WhatsApp
                    </label>
                    <div className="relative">
                      <MessageCircle className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
                      <input type="tel" id="whatsapp" name="whatsapp" value={formData.whatsapp} onChange={handleChange} className="input-field pl-12" placeholder="(00) 00000-0000" />
                    </div>
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="mb-2 block text-sm font-medium text-neutral-graphite">
                    E-mail *
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
                    <input type="email" id="email" name="email" required value={formData.email} onChange={handleChange} className="input-field pl-12" placeholder="seu@email.com" />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="mb-2 block text-sm font-medium text-neutral-graphite">
                    Mensagem *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="input-field resize-none"
                    placeholder="Descreva sua necessidade..."
                  />
                </div>

                <button type="submit" disabled={isSubmitting} className="btn-primary w-full disabled:opacity-70">
                  {isSubmitting ? (
                    'Enviando...'
                  ) : (
                    <>
                      <Send className="h-5 w-5" />
                      Solicitar Orçamento
                    </>
                  )}
                </button>
              </form>

              {/* WhatsApp Button */}
              <div className="mt-6 border-t border-gray-100 pt-6">
                <p className="mb-4 text-center text-sm text-gray-500">
                  Prefere falar direto pelo WhatsApp?
                </p>
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex w-full items-center justify-center gap-3 rounded-xl bg-[#25D366] px-8 py-4 text-base font-semibold text-white transition-all hover:bg-[#1DA851]"
                >
                  <MessageCircle className="h-6 w-6" />
                  Chamar no WhatsApp
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
