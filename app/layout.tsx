import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header/Header";

import "modern-normalize";

export const metadata: Metadata = {
  title: "Rental Car",
  description: "Car rental app",
  openGraph: {
    title: `Rental Car`,
    description: "Car rental app",
    url: `https://rental-cars-beta.vercel.app/`,
    siteName: "Rental Car",
    images: [
      {
        url: "https://rental-cars-beta.vercel.app/OpenGraph.jpg",
        width: 1200,
        height: 630,
        alt: "og notehub",
      },
    ],
    type: "article",
  },
};

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-inter",
  display: "swap",
});
const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-manrope",
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={` ${manrope.variable} ${inter.variable}`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
