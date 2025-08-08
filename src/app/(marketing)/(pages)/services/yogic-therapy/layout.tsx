import { siteConfig } from "@/app/(marketing)/_config/seo.config";
import { Metadata } from "next";
import { ogImagePath } from "../../../../../../public";

export const metadata: Metadata = {
  title: "Best Ayurvedic Therapy & Holistic Wellness in Kathmandu & Bhaktapur",
  description:
    "Leading Ayurvedic therapy center in Kathmandu and Bhaktapur. We offer personalized treatments, herbal remedies, and detoxification programs to balance your doshas and promote natural healing. Discover the ancient wisdom of Ayurveda for a healthy body and mind.",
  keywords:
    "Ayurvedic therapy Kathmandu, Ayurvedic therapy Bhaktapur, Panchakarma Nepal, herbal medicine, dosha balance, detoxification, holistic wellness Kathmandu, Ayurvedic treatment, stress management, natural healing, Ayurvedic clinic Kathmandu Valley",
  openGraph: {
    title:
      "Best Ayurvedic Therapy & Holistic Wellness in Kathmandu & Bhaktapur",
    description:
      "Expert Ayurvedic therapy center in Kathmandu and Bhaktapur. Personalized treatments including Panchakarma, herbal medicine, and lifestyle counseling to restore your body's natural balance and vitality. Book your consultation today.",
    type: "website",
    locale: "en_US",
    url: siteConfig.url + "/service/ayurvedic-therapy",
    images: [
      {
        url: `${siteConfig.url}/${ogImagePath.AyurvedicTherapy}`,
        width: 1200,
        height: 630,
        alt: "Best Ayurvedic Therapy and Panchakarma in Kathmandu and Bhaktapur, Nepal",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Top Ayurvedic Therapy & Detoxification in Kathmandu & Bhaktapur",
    description:
      "Experience authentic Ayurvedic treatments, including Panchakarma, herbal remedies, and dietary guidance for optimal health and well-being in Kathmandu and Bhaktapur.",
    images: [ogImagePath.AyurvedicTherapy],
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
    canonical: siteConfig.url + "/service/ayurvedic-therapy",
  },
};

const Layout = ({ children }: { children: React.ReactNode }) => {
  return <div>{children}</div>;
};

export default Layout;
