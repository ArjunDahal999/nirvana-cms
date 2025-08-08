import { siteConfig } from "@/app/(marketing)/_config/seo.config";
import { Metadata } from "next";
import { ogImagePath } from "../../../../../../public";
export const metadata: Metadata = {
  title:
    "Best L&B Therapy for Stress Relief & Wellness in Kathmandu & Bhaktapur",
  description:
    "Leading L&B Therapy center in Kathmandu and Bhaktapur offering personalized treatments to reduce stress, improve circulation, and relieve body pain. Our expert therapists provide holistic care for mind-body balance.",
  keywords:
    "L&B therapy Kathmandu, L&B therapy Bhaktapur, stress relief Nepal, pain relief Kathmandu, improved circulation, holistic wellness Nepal, muscle tension relief, energy boost Bhaktapur, better sleep, mind-body balance, L&B therapy clinic Kathmandu Valley",
  openGraph: {
    title:
      "Best L&B Therapy for Stress Relief & Wellness in Kathmandu & Bhaktapur",
    description:
      "Expert L&B Therapy center in Kathmandu and Bhaktapur. Personalized sessions for stress reduction, pain relief, and enhanced energy. Book your L&B Therapy consultation today.",
    type: "website",
    locale: "en_US",
    url: siteConfig.url + "/service/lb-therapy",
    images: [
      {
        url: `${siteConfig.url}/${ogImagePath.LBTherapyImage}`,
        width: 1200,
        height: 630,
        alt: "Best L&B Therapy for Stress and Pain Relief in Kathmandu and Bhaktapur Nepal",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Top L&B Therapy for Stress Relief & Wellness in Kathmandu",
    description:
      "Get expert L&B Therapy for stress reduction, pain relief, and improved energy levels in Kathmandu and Bhaktapur. Serving Kathmandu Valley and beyond.",
    images: [ogImagePath.LBTherapyImage],
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
    canonical: siteConfig.url + "/service/lb-therapy",
  },
};
const Layout = ({ children }: { children: React.ReactNode }) => {
  return <div>{children}</div>;
};

export default Layout;
