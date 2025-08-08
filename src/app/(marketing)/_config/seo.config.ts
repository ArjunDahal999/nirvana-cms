import { WithContext, WebPage } from "schema-dts";

export const siteConfig = {
  name: "Nirvana Physiotherapy and Wellness Center",
  description:
    "Official website of Nirvana Physiotherapy and Wellness Center in Kathmandu, Nepal. We offer holistic treatments including physiotherapy, osteopathy, chiropractic, and Ayurvedic healing.",
  url:
    process.env.NODE_ENV === "production"
      ? "https://nirvana-bice.vercel.app"
      : "http://localhost:3000",
  twitterTitle: "Nirvana Physiotherapy & Wellness | Official Website",
  twitterDescription:
    "Your guide to holistic health and wellness in Nepal. Specializing in back pain, spinal alignment, manual therapy, and more.",
};

export const webPageSchemaOrg: WithContext<WebPage> = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Nirvana Physiotherapy and Wellness Center",
  description:
    "Nirvana Physiotherapy, Wellness Center Kathmandu, Nepal, Physiotherapy, Chiropractic Care, Osteopathy, Ayurvedic Healing, Back Pain Relief",
  url: siteConfig.url,
  image: {
    "@type": "ImageObject",
    url: `${siteConfig.url}/opengraph-image.jpeg`, // Placeholder - Replace with actual image URL
    caption: "Nirvana Physiotherapy and Wellness Center",
  },
  author: {
    "@type": "Organization",
    name: "Nirvana Physiotherapy and Wellness Center",
    url: siteConfig.url,
  },
  publisher: {
    "@type": "Organization",
    name: "Nirvana Physiotherapy and Wellness Center",
    logo: {
      "@type": "ImageObject",
      url: `${siteConfig.url}/logo.jpg`, // Placeholder - Replace with actual logo URL
      width: "300",
      height: "90",
    },
  },
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": siteConfig.url,
  },
  potentialAction: {
    "@type": "SearchAction",
    target: `${siteConfig.url}/search?q={search_term_string}`,
    query: "required name=search_term_string",
  },
  about: {
    "@type": "Thing",
    name: [
      "Nirvana Physiotherapy",
      "Wellness Center Nepal",
      "Chiropractic",
      "Osteopathy",
      "Ayurvedic Healing",
      "Back Pain",
      "Spinal Alignment",
      "Manual Therapy",
      "Naturopathy",
    ],
  },
  keywords:
    "Nirvana Physiotherapy, Wellness Center, Kathmandu, Nepal, Physiotherapy, Chiropractic, Osteopathy, Ayurveda, Back Pain, Holistic Health, Wellness, Spinal Care",
};
