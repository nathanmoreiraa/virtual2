export default function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Virtual Carrinhos",
    "description": "Especialistas em carrinhos de carga em São Paulo. Venda, reforma e fabricação sob medida com mais de 6.000 clientes atendidos.",
    "url": "https://virtualcarrinhos.com.br",
    "telephone": "+5511920003108",
    "email": "contato@virtualcarrinhos.com.br",
    "image": "/LOGO.png",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "R. Monte Camberela, Nº 183",
      "addressLocality": "Itaim Paulista",
      "addressRegion": "SP",
      "postalCode": "08110-260",
      "addressCountry": "BR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": -23.4971192,
      "longitude": -46.4046427
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "08:00",
        "closes": "18:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Saturday",
        "opens": "08:00",
        "closes": "13:00"
      }
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5.0",
      "reviewCount": "66"
    },
    "sameAs": [
      "https://www.instagram.com/virtualcarrinhos1/"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Carrinhos de Carga",
      "itemListElement": [
        { "@type": "Offer", "itemOffered": { "@type": "Product", "name": "Médio 3.50x4", "description": "Carrinho de carga 200kg, rodas pneumáticas 3.50x4 com rolamento de esfera." } },
        { "@type": "Offer", "itemOffered": { "@type": "Product", "name": "Mini Roda 3.50x4", "description": "Carrinho de carga 150kg, rodas pneumáticas 3.50x4 com rolamento de esfera." } },
        { "@type": "Offer", "itemOffered": { "@type": "Product", "name": "Plataforma 5ª Roda Madeira", "description": "Carrinho plataforma 700kg, rodas pneumáticas 3.50x8." } },
        { "@type": "Offer", "itemOffered": { "@type": "Product", "name": "Regulável", "description": "Carrinho regulável 150kg, roda maciça 8 polegadas." } },
        { "@type": "Offer", "itemOffered": { "@type": "Product", "name": "Sacarias Roda de Alumínio", "description": "Carrinho sacarias 500kg, rodas pneumáticas 4.00x8 de alumínio." } },
        { "@type": "Offer", "itemOffered": { "@type": "Product", "name": "Tela para Rodízio", "description": "Carrinho tela 300kg com 2 rodas fixas e 2 giratórias de 6 polegadas." } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Reforma de Carrinhos de Carga" } }
      ]
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
