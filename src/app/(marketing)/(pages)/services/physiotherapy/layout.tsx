import { siteConfig } from "@/app/(marketing)/_config/seo.config";
import { Metadata } from "next";
import { ogImagePath } from "../../../../../../public";

export const metadata: Metadata = {
  title: "Top Physiotherapy & Rehabilitation Services in Kathmandu & Bhaktapur",
  description:
    "Leading physiotherapy center in Kathmandu and Bhaktapur offering expert rehabilitation services. Our certified physiotherapists provide personalized treatment for pain relief, injury recovery, and improved mobility.",
  keywords:
    "physiotherapy Kathmandu, physiotherapy Bhaktapur, rehabilitation center Kathmandu, sports injury rehabilitation Nepal, pain management Kathmandu, muscle relaxation Bhaktapur, pre and postnatal physiotherapy, neurological rehabilitation Kathmandu, best physiotherapist Nepal, mobility and flexibility exercises, physiotherapy clinic Kathmandu Valley",
  openGraph: {
    title:
      "Best Physiotherapy & Rehabilitation Services in Kathmandu & Bhaktapur",
    description:
      "Expert physiotherapy center in Kathmandu and Bhaktapur. Personalized rehabilitation for pain relief, post-surgical recovery, sports injuries, and chronic conditions. Book your physiotherapy consultation today.",
    type: "website",
    locale: "en_US",
    url: siteConfig.url + "/service/physiotherapy",
    images: [
      {
        url: `${siteConfig.url}/${ogImagePath.PhysioTherapyImage}`,
        width: 1200,
        height: 630,
        alt: "Best Physiotherapy and Rehabilitation Services in Kathmandu and Bhaktapur Nepal",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Top Physiotherapy & Rehabilitation Services in Kathmandu & Bhaktapur",
    description:
      "Get expert physiotherapy treatment for pain relief, injury recovery, and improved mobility in Kathmandu and Bhaktapur. Serving Kathmandu Valley and beyond.",
    images: [ogImagePath.PhysioTherapyImage],
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
    canonical: siteConfig.url + "/service/physiotherapy",
  },
};

const Layout = ({ children }: { children: React.ReactNode }) => {
  return <div>{children}</div>;
};

export default Layout;
