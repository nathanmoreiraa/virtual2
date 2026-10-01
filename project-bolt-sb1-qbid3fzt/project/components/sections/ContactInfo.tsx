'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, MessageCircle, Navigation, Send, User, AtSign, FileText, Instagram } from 'lucide-react';

const WA_LINK =
  'https://api.whatsapp.com/send/?phone=5511920003108&text=Ol%C3%A1%2C+tudo+bem%3F+Vim+do+Instagram+e+quero+saber+mais+sobre+os+carrinhos+%3A%29&type=phone_number&app_absent=0';

const MAPS_LINK =
  'https://www.google.com/maps/place/Virtual+Carrinhos/@-23.4971191,-46.4095136,17z/data=!3m1!4b1!4m6!3m5!1s0x94ce6383a3c34e1d:0x66ddd8048095cc66!8m2!3d-23.4971192!4d-46.4046427!16s%2Fg%2F11s98d9zjd?entry=ttu&g_ep=EgoyMDI2MDYyOS4wIKXMDSoASAFQAw%3D%3D';

const MAPS_EMBED =
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3658.9830745103327!2d-46.409513620264086!3d-23.497119124294763!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce6383a3c34e1d%3A0x66ddd8048095cc66!2sVirtual%20Carrinhos!5e0!3m2!1spt-BR!2sbr!4v1784134579331!5m2!1spt-BR!2sbr';

export default function ContactInfo() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Olá! Vim pelo site e gostaria de mais informações.\n\nNome: ${formData.name}\nTelefone: ${formData.phone}\nE-mail: ${formData.email}\n\nMensagem:\n${formData.message}`;
    const encoded = encodeURIComponent(text);
    window.open(`https://api.whatsapp.com/send/?phone=5511920003108&text=${encoded}`, '_blank');
  };

  return (
    <div>
      {/* Contact Cards Section */}
      <section className="section-padding bg-neutral-gray-light">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mx-auto mb-12 max-w-2xl text-center"
          >
            <span className="badge-blue mb-4">Contato</span>
            <h1 className="mt-4 mb-4 text-3xl font-bold text-neutral-graphite sm:text-4xl lg:text-5xl">
              Entre em Contato
            </h1>
            <p className="text-lg text-gray-600">
              Estamos prontos para atender você. Escolha a forma mais conveniente.
            </p>
          </motion.div>

          <div className="grid gap-6 lg:grid-cols-2">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="rounded-2xl bg-white p-8 shadow-card"
            >
              <h3 className="mb-6 text-xl font-semibold text-neutral-graphite">Envie sua Mensagem</h3>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-neutral-graphite">
                    Nome
                  </label>
                  <div className="relative">
                    <User className="absolute left-3.5 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
                    <input
                      type="text"
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full rounded-xl border border-gray-200 py-3 pl-11 pr-4 text-sm text-neutral-graphite placeholder-gray-400 transition-colors focus:border-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-blue/20"
                      placeholder="Seu nome completo"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-neutral-graphite">
                    Telefone
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3.5 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
                    <input
                      type="tel"
                      id="phone"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full rounded-xl border border-gray-200 py-3 pl-11 pr-4 text-sm text-neutral-graphite placeholder-gray-400 transition-colors focus:border-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-blue/20"
                      placeholder="(11) 90000-0000"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-neutral-graphite">
                    E-mail
                  </label>
                  <div className="relative">
                    <AtSign className="absolute left-3.5 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
                    <input
                      type="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full rounded-xl border border-gray-200 py-3 pl-11 pr-4 text-sm text-neutral-graphite placeholder-gray-400 transition-colors focus:border-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-blue/20"
                      placeholder="seu@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-neutral-graphite">
                    Mensagem
                  </label>
                  <div className="relative">
                    <FileText className="absolute left-3.5 top-3.5 h-5 w-5 text-gray-400" />
                    <textarea
                      id="message"
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full resize-none rounded-xl border border-gray-200 py-3 pl-11 pr-4 text-sm text-neutral-graphite placeholder-gray-400 transition-colors focus:border-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-blue/20"
                      placeholder="Como podemos ajudar?"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-brand-blue px-6 py-3.5 text-sm font-semibold text-white shadow-blue transition-all hover:bg-brand-blue-dark hover:shadow-xl active:scale-[0.98]"
                >
                  <Send className="h-4 w-4" />
                  Enviar pelo WhatsApp
                </button>
              </form>
            </motion.div>

            {/* Contact Cards */}
            <div className="space-y-4">
              {/* WhatsApp */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.15, duration: 0.5 }}
                className="rounded-2xl bg-white p-6 shadow-card"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-[#25D366]/10">
                    <MessageCircle className="h-6 w-6 text-[#25D366]" />
                  </div>
                  <div>
                    <h3 className="mb-1 text-base font-semibold text-neutral-graphite">WhatsApp</h3>
                    <p className="mb-1.5 text-sm text-gray-500">Atendimento rápido e personalizado</p>
                    <a
                      href={WA_LINK}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-semibold text-[#25D366] transition-colors hover:text-[#1DA851]"
                    >
                      (11) 92000-3108
                    </a>
                  </div>
                </div>
              </motion.div>

              {/* Phone */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="rounded-2xl bg-white p-6 shadow-card"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-brand-blue-muted">
                    <Phone className="h-6 w-6 text-brand-blue" />
                  </div>
                  <div>
                    <h3 className="mb-1 text-base font-semibold text-neutral-graphite">Telefone</h3>
                    <p className="mb-1.5 text-sm text-gray-500">Atendimento comercial</p>
                    <a
                      href="tel:+5511920003108"
                      className="text-sm font-semibold text-neutral-graphite transition-colors hover:text-brand-blue"
                    >
                      (11) 92000-3108
                    </a>
                  </div>
                </div>
              </motion.div>

              {/* Email */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.25, duration: 0.5 }}
                className="rounded-2xl bg-white p-6 shadow-card"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-brand-blue-muted">
                    <Mail className="h-6 w-6 text-brand-blue" />
                  </div>
                  <div>
                    <h3 className="mb-1 text-base font-semibold text-neutral-graphite">E-mail</h3>
                    <p className="mb-1.5 text-sm text-gray-500">Envie sua mensagem</p>
                    <a
                      href="mailto:contato@virtualcarrinhos.com.br"
                      className="text-sm font-semibold text-neutral-graphite transition-colors hover:text-brand-blue"
                    >
                      contato@virtualcarrinhos.com.br
                    </a>
                  </div>
                </div>
              </motion.div>

              {/* Hours */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="rounded-2xl bg-white p-6 shadow-card"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-brand-blue-muted">
                    <Clock className="h-6 w-6 text-brand-blue" />
                  </div>
                  <div>
                    <h3 className="mb-1 text-base font-semibold text-neutral-graphite">Atendimento</h3>
                    <p className="mb-1.5 text-sm text-gray-500">Horário de funcionamento</p>
                    <div className="text-sm text-neutral-graphite">
                      <span className="font-medium">Segunda a Sexta-feira</span>
                      <span className="text-gray-500"> · 08:30 às 18:00</span>
                    </div>
                    <div className="mt-1 text-sm text-neutral-graphite">
                      <span className="font-medium">Sábado</span>
                      <span className="text-gray-500"> · 08:30 às 14:00</span>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Address */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.35, duration: 0.5 }}
                className="rounded-2xl bg-white p-6 shadow-card"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-brand-blue-muted">
                    <MapPin className="h-6 w-6 text-brand-blue" />
                  </div>
                  <div>
                    <h3 className="mb-1 text-base font-semibold text-neutral-graphite">Endereço</h3>
                    <p className="mb-1.5 text-sm text-gray-500">Venha nos visitar</p>
                    <address className="not-italic text-sm leading-relaxed text-neutral-graphite">
                      R. Monte Camberela, Nº 183<br />
                      Itaim Paulista — São Paulo/SP
                    </address>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Visite Nossa Loja */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-10 text-center"
          >
            <h2 className="text-3xl font-bold text-neutral-graphite sm:text-4xl">
              Visite Nossa Loja
            </h2>
          </motion.div>

          <div className="grid gap-6 lg:grid-cols-[340px_1fr]">
            {/* Info Card */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex flex-col rounded-2xl bg-neutral-gray-light p-7 shadow-soft"
            >
              <div className="space-y-5">
                {/* Address */}
                <div className="flex items-start gap-3.5">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-brand-blue-muted">
                    <MapPin className="h-5 w-5 text-brand-blue" />
                  </div>
                  <div>
                    <p className="mb-0.5 text-xs font-semibold uppercase tracking-wider text-brand-blue">Endereço</p>
                    <p className="text-sm font-medium text-neutral-graphite leading-relaxed">
                      R. Monte Camberela, Nº 183<br />
                      Itaim Paulista – São Paulo/SP<br />
                      CEP 08110-260
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-3.5">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-brand-blue-muted">
                    <Phone className="h-5 w-5 text-brand-blue" />
                  </div>
                  <div>
                    <p className="mb-0.5 text-xs font-semibold uppercase tracking-wider text-brand-blue">Telefone</p>
                    <a
                      href="tel:+5511920003108"
                      className="text-sm font-medium text-neutral-graphite transition-colors hover:text-brand-blue"
                    >
                      (11) 92000-3108
                    </a>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start gap-3.5">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-brand-blue-muted">
                    <Clock className="h-5 w-5 text-brand-blue" />
                  </div>
                  <div>
                    <p className="mb-0.5 text-xs font-semibold uppercase tracking-wider text-brand-blue">Horário de Funcionamento</p>
                    <p className="text-sm font-medium text-neutral-graphite">Segunda a Sexta-feira</p>
                    <p className="text-xs text-gray-500">08:30 às 18:00</p>
                    <p className="mt-1.5 text-sm font-medium text-neutral-graphite">Sábado</p>
                    <p className="text-xs text-gray-500">08:30 às 14:00</p>
                  </div>
                </div>

                {/* Instagram */}
                <div className="flex items-start gap-3.5">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-brand-blue-muted">
                    <Instagram className="h-5 w-5 text-brand-blue" />
                  </div>
                  <div>
                    <p className="mb-0.5 text-xs font-semibold uppercase tracking-wider text-brand-blue">Instagram</p>
                    <a
                      href="https://www.instagram.com/virtualcarrinhos1/?hl=pt-br"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-medium text-neutral-graphite transition-colors hover:text-brand-blue"
                    >
                      @virtualcarrinhos1
                    </a>
                  </div>
                </div>
              </div>

              {/* Buttons */}
              <div className="mt-7 space-y-3">
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#25D366] px-5 py-3.5 text-sm font-semibold text-white transition-all hover:bg-[#1DA851] hover:shadow-xl active:scale-[0.98]"
                >
                  <MessageCircle className="h-4 w-4" />
                  WhatsApp
                </a>
                <a
                  href={MAPS_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-brand-blue px-5 py-3.5 text-sm font-semibold text-white shadow-blue transition-all hover:bg-brand-blue-dark hover:shadow-xl active:scale-[0.98]"
                >
                  <Navigation className="h-4 w-4" />
                  Como Chegar
                </a>
              </div>
            </motion.div>

            {/* Map */}
            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="overflow-hidden rounded-2xl shadow-large"
            >
              <iframe
                src={MAPS_EMBED}
                width="100%"
                height="450"
                style={{ border: 0, display: 'block' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
                title="Localização da Virtual Carrinhos"
              />
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
