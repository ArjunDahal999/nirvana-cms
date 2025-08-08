import { siteConfig } from "@/app/(marketing)/_config/seo.config";
import { Metadata } from "next";
import React from "react";
import { ogImagePath } from "../../../../../../public";

export const metadata: Metadata = {
  title: "Best Naturopathy & Natural Healing Services in Kathmandu & Bhaktapur",
  description:
    "Leading naturopathy center in Kathmandu and Bhaktapur offering natural healing, herbal medicine, detoxification, and holistic wellness treatments. Expert naturopathic doctors serving Kathmandu Valley with personalized natural therapy solutions.",
  keywords:
    "naturopathy Kathmandu, naturopathy Bhaktapur, natural healing Kathmandu, natural healing Bhaktapur, herbal medicine Nepal, holistic wellness Kathmandu, naturopathic doctor Bhaktapur, natural therapy near me, detoxification Kathmandu, alternative medicine Nepal, naturopathy clinic Kathmandu Valley, best naturopathy Nepal, natural treatment Bhaktapur, holistic health Kathmandu, naturopathy therapy near me",
  openGraph: {
    title:
      "Best Naturopathy & Natural Healing Services in Kathmandu & Bhaktapur",
    description:
      "Expert naturopathy center in Kathmandu and Bhaktapur. Personalized natural healing for chronic conditions, stress relief, detoxification, and holistic wellness. Book your naturopathy consultation today.",
    type: "website",
    locale: "en_US",
    url: siteConfig.url + "/naturopathy",
    images: [
      {
        url: `${siteConfig.url}/${ogImagePath.NaturopathyImage}`,
        width: 1200,
        height: 630,
        alt: "Best Naturopathy Treatment Services in Kathmandu and Bhaktapur Nepal",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Top Naturopathy & Natural Healing Services in Kathmandu & Bhaktapur",
    description:
      "Get expert naturopathy treatment for natural healing, herbal medicine, and holistic wellness in Kathmandu and Bhaktapur. Serving Kathmandu Valley and beyond.",
    images: [ogImagePath.NaturopathyImage],
    creator: "@nirvana_nepal",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  alternates: {
    canonical: siteConfig.url + "/service/naturopathy",
  },
};

const Layout = ({ children }: { children: React.ReactNode }) => {
  return <div>{children}</div>;
};

export default Layout;
