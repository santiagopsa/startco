export function getOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Tinkko Coworking",
    url: "https://www.tinkkocoworking.com",
    logo: "https://www.tinkkocoworking.com/favicon.png",
    sameAs: [
      "https://www.instagram.com",
    ],
  };
}

export function getWebsiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Tinkko Coworking",
    url: "https://www.tinkkocoworking.com",
    inLanguage: ["en", "es"],
  };
}

export function getFaqPageSchema(
  entries: Array<{ question: string; answer: string }>
) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: entries.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function getArticleSchema(params: {
  headline: string;
  description: string;
  url: string;
  datePublished: string;
  dateModified?: string;
  image?: string;
  language?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: params.headline,
    description: params.description,
    mainEntityOfPage: params.url,
    datePublished: params.datePublished,
    dateModified: params.dateModified ?? params.datePublished,
    image: params.image ?? "https://www.tinkkocoworking.com/assets/hero/dashboard.png",
    inLanguage: params.language ?? "en",
    author: {
      "@type": "Organization",
      name: "Tinkko Coworking",
    },
    publisher: {
      "@type": "Organization",
      name: "Tinkko Coworking",
      logo: {
        "@type": "ImageObject",
        url: "https://www.tinkkocoworking.com/favicon.png",
      },
    },
  };
}
