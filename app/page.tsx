import dynamic from 'next/dynamic';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";

// Lazy load non-critical components
const Services = dynamic(() => import("@/components/Services"), { ssr: true });
const Promotions = dynamic(() => import("@/components/Promotions"), { ssr: true });
const Projects = dynamic(() => import("@/components/Projects"), { ssr: true });
const About = dynamic(() => import("@/components/About"), { ssr: true });
const Contact = dynamic(() => import("@/components/Contact"), { ssr: true });

export default function Home() {
  // Structured Data for SEO (JSON-LD)
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Tecnodespegue",
    "image": "https://tecnodespegue.com/og-image.jpg",
    "@id": "https://tecnodespegue.com",
    "url": "https://tecnodespegue.com",
    "telephone": "+34123456789",
    "email": "contacto@tecnodespegue.com",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Madrid",
      "addressCountry": "ES"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 40.4168,
      "longitude": -3.7038
    },
    "sameAs": [
      "https://github.com/tecnodespegue",
      "https://linkedin.com/company/tecnodespegue",
      "https://twitter.com/tecnodespegue"
    ],
    "priceRange": "$$",
    "description": "Agencia freelance de desarrollo web y programación. Creamos soluciones digitales modernas, aplicaciones web personalizadas y software a medida.",
    "knowsAbout": [
      "Desarrollo Web",
      "React",
      "Next.js",
      "Node.js",
      "TypeScript",
      "Programación",
      "Diseño Web",
      "SEO"
    ],
    "areaServed": {
      "@type": "Country",
      "name": "España"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5",
      "reviewCount": "30"
    }
  };

  const webPageData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Tecnodespegue - Desarrollo Web y Programación Freelance",
    "description": "Agencia freelance de desarrollo web y programación. Creamos aplicaciones web modernas, software a medida y soluciones digitales.",
    "url": "https://tecnodespegue.com",
    "inLanguage": "es-ES"
  };

  const organizationData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Tecnodespegue",
    "url": "https://tecnodespegue.com",
    "logo": "https://tecnodespegue.com/logo.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+34123456789",
      "contactType": "customer service",
      "email": "contacto@tecnodespegue.com",
      "availableLanguage": ["Spanish", "English"]
    }
  };

  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationData) }}
      />

      <main className="min-h-screen">
        <Header />
        <Hero />
        <Services />
        <Promotions />
        <Projects />
        <About />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
