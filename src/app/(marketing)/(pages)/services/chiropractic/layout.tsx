import { siteConfig } from "@/app/(marketing)/_config/seo.config";
import { Metadata } from "next";
import { ogImagePath } from "../../../../../../public";

export const metadata: Metadata = {
  title:
    "Best Chiropractic Care for Pain Relief & Wellness in Kathmandu & Bhaktapur",
  description:
    "Leading chiropractic clinic in Kathmandu and Bhaktapur. Our certified chiropractors provide expert spinal adjustments to relieve pain, improve posture, and enhance overall body function. Book your consultation for a non-invasive, drug-free path to wellness.",
  keywords:
    "chiropractic Kathmandu, chiropractic Bhaktapur, back pain relief Nepal, neck pain treatment, headache and migraine relief, improved posture, joint health, non-invasive pain management, spinal adjustment Kathmandu, chiropractor near me, scoliosis treatment Nepal",
  openGraph: {
    title:
      "Best Chiropractic Care for Pain Relief & Wellness in Kathmandu & Bhaktapur",
    description:
      "Expert chiropractic clinic in Kathmandu and Bhaktapur. Personalized spinal adjustments for pain relief, improved posture, and enhanced mobility. Find lasting relief from back pain, headaches, and more.",
    type: "website",
    locale: "en_US",
    url: siteConfig.url + "/service/chiropractic",
    images: [
      {
        url: `${siteConfig.url}/${ogImagePath.ChiropracticImage}`,
        width: 1200,
        height: 630,
        alt: "Best Chiropractic Care and Spinal Adjustment in Kathmandu and Bhaktapur, Nepal",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Top Chiropractic Clinic in Kathmandu for Pain Relief & Posture",
    description:
      "Get expert chiropractic treatment for back pain, neck pain, and headaches in Kathmandu and Bhaktapur. We offer a non-surgical, drug-free approach to health and wellness.",
    images: [ogImagePath.ChiropracticImage],
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
    canonical: siteConfig.url + "/service/chiropractic",
  },
};

const Layout = ({ children }: { children: React.ReactNode }) => {
  return <div>{children}</div>;
};

export default Layout;
