import type { Metadata } from "next";
import "./globals.css";
import ErrorReporter from "@/components/ErrorReporter";
import Script from "next/script";

export const metadata: Metadata = {
  title: "First Order - A New Order Begins | Startup Community for Founders",
  description: "Join First Order, a revolutionary startup community building clarity in chaos. We help founders think from first principles, ship fast, and build businesses that matter. Formerly frag.club.",
  keywords: [
    "startup community",
    "founders",
    "first principles thinking",
    "startup ecosystem",
    "entrepreneur network",
    "startup accelerator",
    "founder community",
    "startup mentor",
    "business building",
    "startup resources",
    "founder support",
    "startup advice",
    "first order thinking",
    "startup principles",
    "founder network",
    "Hyderabad startups",
    "Indian startup ecosystem",
    "frag.club",
    "building startups",
    "startup methodology"
  ],
  authors: [{ name: "First Order Team" }],
  creator: "First Order",
  publisher: "First Order",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://firstorder.co'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "First Order - A New Order Begins",
    description: "Revolutionary startup community building clarity in chaos. Join founders who think from first principles and build businesses that matter.",
    url: 'https://firstorder.co',
    siteName: 'First Order',
    images: [
      {
        url: '/firstbox.png',
        width: 1200,
        height: 630,
        alt: 'First Order - A New Order Begins',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "First Order - A New Order Begins",
    description: "Revolutionary startup community building clarity in chaos. Join founders who think from first principles.",
    images: ['/firstbox.png'],
    creator: '@firstorder',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "First Order",
    "alternateName": "frag.club",
    "url": "https://firstorder.co",
    "logo": "https://firstorder.co/firstbox.png",
    "description": "Revolutionary startup community building clarity in chaos. We help founders think from first principles and build businesses that matter.",
    "foundingLocation": {
      "@type": "Place",
      "name": "Hyderabad, India"
    },
    "sameAs": [
      "https://linkedin.com/company/firstorder",
      "https://twitter.com/firstorder"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-9515018018",
      "contactType": "customer service",
      "availableLanguage": ["English"]
    }
  };

  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://firstorder.co" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className="antialiased">
        <ErrorReporter />
        <Script
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/scripts//route-messenger.js"
          strategy="afterInteractive"
          data-target-origin="*"
          data-message-type="ROUTE_CHANGE"
          data-include-search-params="true"
          data-only-in-iframe="true"
          data-debug="true"
          data-custom-data='{"appName": "YourApp", "version": "1.0.0", "greeting": "hi"}'
        />{children}</body>
    </html>
  );
}
