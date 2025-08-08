interface NavItem {
  name: string;
  href: string;
  description?: string;
  subItems?: NavItem[];
}

export const marketingNavigationMenu: NavItem[] = [
  {
    name: "HOME",
    href: "/",
  },
  {
    name: "ABOUT US",
    href: "/about-us",
    subItems: [
      { name: "NPWC", href: "/about-us" },
      { name: "Our Team", href: "/our-team" },
    ],
  },
  {
    name: "SERVICES",
    href: "/services",
    subItems: [
      { name: "Physiotherapy", href: "/services/physiotherapy" },
      { name: "Naturopathy", href: "/services/naturopathy" },
      { name: "Osteopathy", href: "/services/osteopathy" },
      { name: "Yogic Therapy", href: "/services/yogic-therapy" },
      { name: "L & B Therapy", href: "/services/lb-therapy" },
      { name: "Chiropractic", href: "/services/chiropractic" },
      { name: "Ayurvedic Therapy", href: "/services/ayurvedic-therapy" },
    ],
  },
  { name: "BENEFITS", href: "/benefits" },
  { name: "CONDITIONS TREATED", href: "/conditions-treated" },
  { name: "MEMBERSHIP", href: "/membership" },
  { name: "BLOGS", href: "/blogs" },
  { name: "GALLERY", href: "/gallery" },
  { name: "BOOK AN APPOINTMENT", href: "/book-an-appointment" },
];
