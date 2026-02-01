// components/LocalBusinessSchema.tsx
export default function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Made by Kane",
    "description": "Atlanta developer specializing in custom websites, mobile apps, business automation, and local SEO for small businesses in Atlanta and Athens, GA.",
    "url": "https://madebykane.com",
    "telephone": "+1-703-713-5390",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Atlanta",
      "addressRegion": "GA",
      "postalCode": "30326",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "33.7490",
      "longitude": "-84.3880"
    },
    "areaServed": [
      {
        "@type": "City",
        "name": "Atlanta"
      },
      {
        "@type": "City", 
        "name": "Athens"
      },
      {
        "@type": "City", 
        "name": "Buckhead"
      },
      {
        "@type": "State",
        "name": "Georgia"
      }
    ],
    "priceRange": "$$",
    "serviceType": ["Web Development", "Mobile App Development", "Local SEO", "Business Automation"]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}