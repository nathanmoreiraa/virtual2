import { Metadata } from 'next';
import ContactInfo from '@/components/sections/ContactInfo';
import MarketplaceSection from '@/components/sections/MarketplaceSection';

export const metadata: Metadata = {
  title: 'Entre em Contato',
  description: 'Entre em contato com a Virtual Carrinhos. Atendimento via WhatsApp, telefone ou presencial em Itaim Paulista — São Paulo. R. Monte Camberela, 183.',
  openGraph: {
    title: 'Entre em Contato | Virtual Carrinhos',
    description: 'Fale com a Virtual Carrinhos via WhatsApp ou visite nossa loja no Itaim Paulista, São Paulo.',
    url: 'https://virtualcarrinhos.com.br/contato',
  },
};

export default function ContatoPage() {
  return (
    <main className="pt-20">
      <ContactInfo />
      <MarketplaceSection />
    </main>
  );
}
