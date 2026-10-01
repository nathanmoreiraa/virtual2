import './globals.css';
import type { Metadata } from 'next';
import { Inter, Manrope } from 'next/font/google';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import FloatingButtons from '@/components/layout/FloatingButtons';
import JsonLd from './schema';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-manrope',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://virtualcarrinhos.com.br'),
  title: {
    default: 'Virtual Carrinhos | Carrinhos de Carga em São Paulo',
    template: '%s | Virtual Carrinhos',
  },
  description: 'Virtual Carrinhos — especialistas em carrinhos de carga em São Paulo. Mais de 6.000 clientes atendidos. Venda, reforma e fabricação sob medida. 5,0 no Google.',
  keywords: ['virtual carrinhos', 'carrinhos de carga', 'carrinho de mão', 'carrinho plataforma', 'carrinho carga são paulo', 'reforma carrinho', 'carrinho regulável', 'itaim paulista'],
  authors: [{ name: 'Virtual Carrinhos' }],
  creator: 'Virtual Carrinhos',
  publisher: 'Virtual Carrinhos',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://virtualcarrinhos.com.br',
    siteName: 'Virtual Carrinhos',
    title: 'Virtual Carrinhos | Carrinhos de Carga em São Paulo',
    description: 'Especialistas em carrinhos de carga. +6.000 clientes atendidos. 5,0 estrelas no Google. Venda, reforma e fabricação sob medida.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Virtual Carrinhos — Especialistas em Carrinhos de Carga',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Virtual Carrinhos | Carrinhos de Carga em São Paulo',
    description: 'Especialistas em carrinhos de carga. +6.000 clientes atendidos. 5,0 estrelas no Google.',
    images: ['/og-image.jpg'],
  },
  alternates: {
    canonical: 'https://virtualcarrinhos.com.br',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${manrope.variable}`}>
      <body className="font-sans">
        <JsonLd />
        <Header />
        {children}
        <Footer />
        <FloatingButtons />
      </body>
    </html>
  );
}
