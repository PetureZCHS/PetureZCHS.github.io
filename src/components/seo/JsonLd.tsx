"use client";

import { useEffect } from "react";

interface JsonLdProps {
  data: Record<string, unknown>;
}

export function JsonLd({ data }: JsonLdProps) {
  useEffect(() => {
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.text = JSON.stringify(data);
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, [data]);

  return null;
}

export function OrganizationJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "智宠合生 Peture",
    url: "https://peture.com",
    logo: "https://peture.com/images/app-icon.png",
    description: "用 AI 技术为您的宠物提供个性化服务，打造全方位智慧养宠体验",
    sameAs: [
      "https://twitter.com/peture",
      "https://github.com/peture",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      email: "peture_app@outlook.com",
      contactType: "customer service",
    },
    potentialAction: {
      "@type": "SearchAction",
      target: "https://peture.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  };

  return <JsonLd data={data} />;
}

export function ProductJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "智宠合生 Peture",
    description: "AI 宠物服务平台，提供宠物档案管理、AI助手、智能提醒等功能",
    brand: {
      "@type": "Brand",
      name: "智宠合生 Peture",
    },
    manufacturer: {
      "@type": "Organization",
      name: "Peture Team",
    },
    offers: [
      {
        "@type": "Offer",
        name: "免费版",
        price: "0",
        priceCurrency: "CNY",
        availability: "https://schema.org/InStock",
        description: "适合初次体验",
      },
      {
        "@type": "Offer",
        name: "专业版",
        price: "168",
        priceCurrency: "CNY",
        availability: "https://schema.org/InStock",
        description: "适合宠物主人，年付¥168/年",
      },
      {
        "@type": "Offer",
        name: "家庭版",
        price: "268",
        priceCurrency: "CNY",
        availability: "https://schema.org/InStock",
        description: "多宠物家庭首选，年付¥268/年",
      },
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      reviewCount: "1000",
    },
  };

  return <JsonLd data={data} />;
}