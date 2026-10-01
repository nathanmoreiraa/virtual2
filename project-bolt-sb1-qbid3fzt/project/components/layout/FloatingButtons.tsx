'use client';

import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

const WA_LINK =
  'https://api.whatsapp.com/send/?phone=5511920003108&text=Ol%C3%A1%2C+tudo+bem%3F+Vim+do+Instagram+e+quero+saber+mais+sobre+os+carrinhos+%3A%29&type=phone_number&app_absent=0';

export default function FloatingButtons() {
  return (
    <div className="fixed bottom-6 right-5 z-50">
      <motion.a
        href={WA_LINK}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5, duration: 0.4 }}
        whileHover={{ scale: 1.1 }}
        className="flex h-16 w-16 items-center justify-center rounded-full bg-[#25D366] shadow-large transition-shadow hover:shadow-xl"
        aria-label="Fale conosco pelo WhatsApp"
        title="Fale conosco pelo WhatsApp"
      >
        <MessageCircle className="h-7 w-7 text-white" />
      </motion.a>
    </div>
  );
}
