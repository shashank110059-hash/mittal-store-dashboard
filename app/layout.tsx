import type { Metadata } from "next";
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
  title: "Mittal Store | Laddu Gopal Poshak, Mata Rani Poshak & Puja Items",
  description:
    "Mittal Store, since 1985, is your trusted destination for premium Laddu Gopal Ji poshak, Mata Rani poshak, beautiful murtis, puja samagri, brass diyas, temple accessories, and all essential religious items. Discover high-quality devotional products at affordable prices for every festival and daily worship.",
  keywords: [
    "Mittal Store",
    "Laddu Gopal Poshak",
    "Mata Rani Poshak",
    "Puja Items",
    "Puja Samagri",
    "Hindu Religious Items",
    "Murti Store",
    "Brass Diyas",
    "Temple Accessories",
    "God Idol Shop",
    "Janmashtami Poshak",
    "Navratri Poshak",
    "Devotional Products",
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
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
