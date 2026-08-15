import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Islamorada Private Boat Charters | Islamorada Coastal Adventures",
  description:
    "Private Islamorada boat charters for fishing, snorkeling, sandbar trips, eco tours, and custom adventures throughout the Florida Keys.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};
const businessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Islamorada Coastal Adventures",
  url: "https://www.islamoradacoastaladventures.com/",
  logo: "https://www.islamoradacoastaladventures.com/logo.JPG",
  image: "https://www.islamoradacoastaladventures.com/logo.JPG",
  telephone: "+1-305-735-4070",
  email: "Matt@islamoradacoastaladventures.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "85920 Overseas Hwy",
    addressLocality: "Islamorada",
    addressRegion: "FL",
    postalCode: "33036",
    addressCountry: "US",
  },
  areaServed: {
    "@type": "Place",
    name: "Islamorada, Florida Keys",
  },
  sameAs: [
    "https://www.facebook.com/IslamoradaCoastalAdventures",
    "https://www.instagram.com/islamorada_coastal_adventures/",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
     <body className="min-h-full flex flex-col">
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema) }}
  />
  {children}
</body>
    </html>
  );
}
