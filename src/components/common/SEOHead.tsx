import React, { useEffect } from 'react';

export interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonicalUrl?: string;
  ogImage?: string;
  ogType?: 'website' | 'article' | 'profile';
  structuredData?: Record<string, any>;
}

export const SEOHead: React.FC<SEOHeadProps> = ({
  title = 'MEDICARE — Trusted Healthcare. Advanced Care.',
  description = 'MEDICARE Hospitals delivers compassionate, world-class medical science with cutting-edge diagnostics, expert specialists, emergency trauma, and AI healthcare.',
  keywords = 'MEDICARE, Medicare Hospitals, Multi Specialty Hospital, Cardiology, Oncology, Orthopedics, Emergency Trauma, Healthcare, Teleconsultation, Diagnostics',
  canonicalUrl = 'https://www.medicarehospitals.in',
  ogImage = 'https://www.medicarehospitals.in/assets/medicare-logo.svg',
  ogType = 'website',
  structuredData,
}) => {
  useEffect(() => {
    // 1. Update Document Title
    const formattedTitle = title.includes('MEDICARE') ? title : `${title} | MEDICARE Hospitals`;
    document.title = formattedTitle;

    // 2. Helper to set or update meta tag
    const setMetaTag = (nameOrProperty: 'name' | 'property', attrValue: string, contentValue: string) => {
      let element = document.querySelector(`meta[${nameOrProperty}="${attrValue}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(nameOrProperty, attrValue);
        document.head.appendChild(element);
      }
      element.setAttribute('content', contentValue);
    };

    // Standard Meta Tags
    setMetaTag('name', 'description', description);
    setMetaTag('name', 'keywords', keywords);

    // OpenGraph Tags
    setMetaTag('property', 'og:title', formattedTitle);
    setMetaTag('property', 'og:description', description);
    setMetaTag('property', 'og:type', ogType);
    setMetaTag('property', 'og:image', ogImage);
    setMetaTag('property', 'og:url', canonicalUrl);

    // Twitter Card Meta
    setMetaTag('name', 'twitter:card', 'summary_large_image');
    setMetaTag('name', 'twitter:title', formattedTitle);
    setMetaTag('name', 'twitter:description', description);
    setMetaTag('name', 'twitter:image', ogImage);

    // Canonical Link
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', canonicalUrl);

    // 3. Inject JSON-LD Structured Data
    if (structuredData) {
      let scriptElement = document.querySelector('#seo-structured-data') as HTMLScriptElement;
      if (!scriptElement) {
        scriptElement = document.createElement('script');
        scriptElement.id = 'seo-structured-data';
        scriptElement.type = 'application/ld+json';
        document.head.appendChild(scriptElement);
      }
      scriptElement.textContent = JSON.stringify(structuredData);
    }
  }, [title, description, keywords, canonicalUrl, ogImage, ogType, structuredData]);

  return null;
};
