import Script from "next/script";

export function JsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://elitecore.com/#organization",
    "name": "EliteCore",
    "url": "https://elitecore.com",
    "logo": {
      "@type": "ImageObject",
      "url": "https://elitecore.com/logo.png",
      "width": 112,
      "height": 112
    },
    "sameAs": [
      "https://twitter.com/elitecore",
      "https://facebook.com/elitecore",
      "https://linkedin.com/company/elitecore"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1-555-0123-4567",
      "contactType": "customer service",
      "areaServed": "Global",
      "availableLanguage": "English"
    }
  };

  return (
    <Script
      id="json-ld"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
