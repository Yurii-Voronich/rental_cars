import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  title: "Rental Car",
  description: "Car rental app",
  openGraph: {
    title: `Rental Car`,
    description: "Car rental app",
    url: `https://08-zustand-three-nu.vercel.app/`,
    siteName: "Rental Car",
    images: [
      {
        url: "https://ac.goit.global/fullstack/react/notehub-og-meta.jpg",
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
  weight: ["400", "700"],
  variable: "--font-inter",
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${manrope.variable}`}>
        {children}
      </body>
    </html>
  );
}
