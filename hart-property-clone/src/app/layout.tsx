import type { Metadata } from "next";
import { Inter, Open_Sans, Raleway } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const openSans = Open_Sans({ subsets: ["latin"], variable: "--font-open-sans" });
const raleway = Raleway({ subsets: ["latin"], variable: "--font-raleway" });

export const metadata: Metadata = {
  title: "Hart Property Development | Adelaide Property Developer",
  description:
    "Hart Property Development: Creating extraordinary spaces that inspire better living in Adelaide through innovative design, sustainable practices, and thoughtful development.",
  keywords:
    "property development, adelaide, sustainable design, real estate projects, creative developments, hart property",
  openGraph: {
    title: "Hart Property Development | Adelaide Property Developer",
    description:
      "Creating extraordinary spaces that inspire better living through innovative design and sustainability.",
    type: "website",
    url: "https://www.hartpropertydevelopment.com.au",
    siteName: "Hart Property Development",
    images: [
      {
        url: "https://ext.same-assets.com/3964215446/1041532962.png",
        width: 512,
        height: 512,
        alt: "Hart Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hart Property Development | Adelaide Property Developer",
    description: "Creating extraordinary spaces that inspire better living.",
    images: ["https://ext.same-assets.com/3964215446/1041532962.png"],
    site: "@hartpropertydevelopment",
  },
};

const orgStructuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Hart Property Development",
  url: "https://www.hartpropertydevelopment.com.au",
  logo: "https://ext.same-assets.com/3964215446/1041532962.png",
  sameAs: [
    "https://www.linkedin.com/company/hartpropertydevelopment/",
    "https://www.facebook.com/",
    "https://www.instagram.com/",
  ],
  description:
    "Creating extraordinary spaces that inspire better living through innovative design, sustainable practices, and thoughtful development.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta name="robots" content="index, follow" />
        <meta property="og:locale" content="en_AU" />
        <meta name="author" content="Hart Property Development" />
      </head>
      <body
        className={`${inter.variable} ${openSans.variable} ${raleway.variable} font-sans min-h-screen flex flex-col`}
      >
        <Header />
        <main className="flex-grow pt-24">{children}</main>
        <Footer />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgStructuredData) }}
        />
      </body>
    </html>
  );
}
