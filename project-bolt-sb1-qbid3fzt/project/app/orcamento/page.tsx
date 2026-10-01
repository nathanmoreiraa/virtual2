import { Metadata } from 'next';
import QuoteForm from '@/components/sections/QuoteForm';
import QuoteProducts from '@/components/sections/QuoteProducts';

export const metadata: Metadata = {
  title: 'Solicitar Orçamento',
  description: 'Solicite um orçamento gratuito para compra ou reforma de carrinhos de carga. Atendimento rápido via WhatsApp — Virtual Carrinhos, São Paulo.',
  openGraph: {
    title: 'Solicitar Orçamento | Virtual Carrinhos',
    description: 'Solicite um orçamento gratuito para compra ou reforma de carrinhos de carga.',
    url: 'https://virtualcarrinhos.com.br/orcamento',
  },
};

export default function OrcamentoPage() {
  return (
    <main className="pt-20">
      <QuoteForm />
      <QuoteProducts />
    </main>
  );
}
