import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import SchemaScript from "./SchemaScriptNew";
import OrganizationSchema from "@/components/seo/OrganizationSchema";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Viewport settings for proper mobile rendering
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  viewportFit: 'cover',
  userScalable: false
};

export const metadata: Metadata = {
  title: "Айтишкино - Школа программирования для детей | Обучение с 8 лет",
  description: "Онлайн-школа программирования и робототехники для детей 8-17 лет. Учим создавать игры, приложения и сайты. Первое занятие бесплатно!",
  keywords: ["программирование для детей", "обучение детей программированию", "курсы по программированию", "робототехника для детей", "IT-школа для детей"],
  
  openGraph: {
    title: "Айтишкино - Школа программирования для детей",
    description: "Онлайн-обучение программированию и робототехнике для детей 8-17 лет. Первое занятие бесплатно!",
    url: "https://aitishkino.ru",
    siteName: "Айтишкино",
    images: [{
      url: "/images/og-image.jpg",
      width: 1200,
      height: 630,
    }],
    locale: 'ru_RU',
    type: 'website',
  },
  
  twitter: {
    card: 'summary_large_image',
    title: "Айтишкино - Школа программирования для детей",
    description: "Онлайн-обучение программированию и робототехнике для детей 8-17 лет",
    images: ["/images/og-image.jpg"], 
  },
  
  appleWebApp: {
    capable: true,
    statusBarStyle: 'black-translucent',
    title: 'Айтишкино',
  },
  
  formatDetection: {
    telephone: false,
  },
  
  metadataBase: new URL('https://aitishkino.ru'),
  alternates: {
    canonical: '/',
  },
  verification: {
    google: 'google-site-verification=your-verification-code',
    yandex: 'yandex-verification=your-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className="h-full">
      <body className={`${geistSans.variable} ${geistMono.variable} font-sans`}>
        {children}
        <OrganizationSchema />
        <SchemaScript />
      </body>
    </html>
  );
}
