/**
 * Structured Data (JSON-LD) utilities for SEO
 * These help search engines understand your content better
 */

export interface OrganizationSchema {
  "@context": string;
  "@type": string;
  name: string;
  alternateName?: string;
  description: string;
  url: string;
  logo?: string;
  image?: string;
  sameAs?: string[];
  contactPoint?: {
    "@type": string;
    contactType: string;
    areaServed: string;
    availableLanguage: string;
  };
  parentOrganization?: {
    "@type": string;
    name: string;
    url: string;
  };
}

export interface WebSiteSchema {
  "@context": string;
  "@type": string;
  name: string;
  url: string;
  potentialAction?: {
    "@type": string;
    target: string;
    "query-input": string;
  };
}

export interface ArticleSchema {
  "@context": string;
  "@type": string;
  headline: string;
  description: string;
  image: string;
  author: {
    "@type": string;
    name: string;
  };
  publisher: {
    "@type": string;
    name: string;
    logo: {
      "@type": string;
      url: string;
    };
  };
  datePublished: string;
  dateModified: string;
}

export function generateOrganizationSchema(baseUrl: string): OrganizationSchema {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Transfer Technologií ČVUT",
    "alternateName": "ČVUT Technology Transfer",
    "description": "Transfer Technologií ČVUT spojuje vědecký výzkum s praktickými aplikacemi a podporuje inovace.",
    "url": baseUrl,
    "logo": `${baseUrl}/logos/Logo.svg`,
    "image": `${baseUrl}/images/mise.jpg`,
    "sameAs": [
      // Add your social media URLs here when available
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer service",
      "areaServed": "CZ",
      "availableLanguage": "Czech"
    },
    "parentOrganization": {
      "@type": "EducationalOrganization",
      "name": "České vysoké učení technické v Praze",
      "url": "https://www.cvut.cz"
    }
  };
}

export function generateWebSiteSchema(baseUrl: string): WebSiteSchema {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Transfer Technologií ČVUT",
    "url": baseUrl,
    "potentialAction": {
      "@type": "SearchAction",
      "target": `${baseUrl}/inqbay?search={search_term_string}`,
      "query-input": "required name=search_term_string"
    }
  };
}

export function generateArticleSchema(
  title: string,
  description: string,
  imageUrl: string,
  publishedDate: string,
  baseUrl: string
): ArticleSchema {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": title,
    "description": description,
    "image": imageUrl,
    "author": {
      "@type": "Organization",
      "name": "Transfer Technologií ČVUT"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Transfer Technologií ČVUT",
      "logo": {
        "@type": "ImageObject",
        "url": `${baseUrl}/logos/Logo.svg`
      }
    },
    "datePublished": publishedDate,
    "dateModified": publishedDate
  };
}
