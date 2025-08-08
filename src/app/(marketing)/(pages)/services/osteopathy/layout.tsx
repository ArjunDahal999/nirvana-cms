import { siteConfig } from "@/app/(marketing)/_config/seo.config";
import { Metadata } from "next";
import { ogImagePath } from "../../../../../../public";

export const metadata: Metadata = {
  title: "Best Osteopathy & Musculoskeletal Care in Kathmandu & Bhaktapur",
  description:
    "Leading osteopathy clinic in Kathmandu and Bhaktapur offering expert diagnosis and treatment for musculoskeletal pain. Our certified osteopaths provide personalized care to restore body function and promote natural healing.",
  keywords:
    "osteopathy Kathmandu, osteopathy Bhaktapur, musculoskeletal pain relief, natural healing Nepal, body function balance, osteopathic treatment Kathmandu, joint pain Bhaktapur, back pain relief, holistic wellness Nepal, best osteopath Nepal, stress and tension relief, osteopathy clinic Kathmandu Valley",
  openGraph: {
    title: "Best Osteopathy & Musculoskeletal Care in Kathmandu & Bhaktapur",
    description:
      "Expert osteopathy clinic in Kathmandu and Bhaktapur. Personalized treatment for musculoskeletal pain, improved mobility, and overall body function. Book your osteopathy consultation today.",
    type: "website",
    locale: "en_US",
    url: siteConfig.url + "/service/osteopathy",
    images: [
      {
        url: `${siteConfig.url}/${ogImagePath.OsteopathyImage}`,
        width: 1200,
        height: 630,
        alt: "Best Osteopathy and Musculoskeletal Care in Kathmandu and Bhaktapur Nepal",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Top Osteopathy & Musculoskeletal Care in Kathmandu & Bhaktapur",
    description:
      "Get expert osteopathy treatment for pain relief, improved mobility, and overall body balance in Kathmandu and Bhaktapur. Serving Kathmandu Valley and beyond.",
    images: [ogImagePath.OsteopathyImage],
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
    canonical: siteConfig.url + "/service/osteopathy",
  },
};

const Layout = ({ children }: { children: React.ReactNode }) => {
  return <div>{children}</div>;
};

export default Layout;
