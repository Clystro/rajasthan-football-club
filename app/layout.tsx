import type { Metadata } from "next";
import { Inter, Oswald, Bebas_Neue } from "next/font/google";
import "./globals.css";
import { CLUB_INFO } from "@/constants/clubInfo";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const oswald = Oswald({
  subsets: ["latin"],
  variable: "--font-oswald",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const bebasNeue = Bebas_Neue({
  subsets: ["latin"],
  variable: "--font-bebas",
  display: "swap",
  weight: ["400"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://rajasthanfootballclub.com"),
  title: {
    default: "Rajasthan Football Club | The Desert Royals of Football",
    template: "%s | Rajasthan Football Club",
  },
  description:
    "Official portal of Rajasthan Football Club (RFC). Experience the pride of the desert — season passes, youth academy enrollments, VIP hospitality suites, and matchday action at Sawai Mansingh Stadium, Jaipur.",
  keywords: [
    "Rajasthan Football Club",
    "Rajasthan FC",
    "Desert Royals",
    "Jaipur Football Club",
    "Sawai Mansingh Stadium",
    "Football Academy Jaipur",
    "Rajasthan FC Season Pass",
    "VIP Hospitality Football",
    "Indian Football League",
    "AIFF Youth Academy Rajasthan",
  ],
  authors: [{ name: "Rajasthan Football Club" }],
  creator: "Rajasthan Football Club",
  publisher: "Clystro Sports Network",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://rajasthanfootballclub.com",
    siteName: "Rajasthan Football Club",
    title: "Rajasthan Football Club | The Desert Royals of Football",
    description:
      "Join the Desert Royals. Book season passes, register for AIFF youth academy trials, and access VIP matchday hospitality at SMS Stadium, Jaipur.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?w=1200&auto=format&fit=crop&q=80",
        width: 1200,
        height: 630,
        alt: "Rajasthan Football Club - SMS Stadium Matchday",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rajasthan Football Club | The Desert Royals of Football",
    description:
      "The Desert Royals of Football. Memberships, Academy Trials, and VIP Hospitality in Jaipur.",
    images: ["https://images.unsplash.com/photo-1508098682722-e99c43a406b2?w=1200&auto=format&fit=crop&q=80"],
    creator: "@rajasthanfc",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SportsTeam",
    name: CLUB_INFO.name,
    alternateName: ["RFC", "The Desert Royals"],
    url: "https://rajasthanfootballclub.com",
    logo: "https://rajasthanfootballclub.com/crest.png",
    sport: "Football (Soccer)",
    foundingDate: `${CLUB_INFO.founded}`,
    location: {
      "@type": "StadiumOrArena",
      name: CLUB_INFO.stadium.name,
      address: {
        "@type": "PostalAddress",
        streetAddress: "SMS Stadium Complex, Tonk Road",
        addressLocality: "Jaipur",
        addressRegion: "Rajasthan",
        postalCode: "302015",
        addressCountry: "IN",
      },
    },
    memberOf: {
      "@type": "SportsOrganization",
      name: "All India Football Federation",
    },
    telephone: CLUB_INFO.contact.phone,
    email: CLUB_INFO.contact.email,
  };

  return (
    <html
      lang="en"
      className={`${inter.variable} ${oswald.variable} ${bebasNeue.variable} scroll-smooth`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-navy-pitch text-white antialiased pitch-grid flex flex-col selection:bg-gold selection:text-navy-pitch">
        {children}
      </body>
    </html>
  );
}
