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
  title: "Made by Kane | Website & Mobile App Development Atlanta | Local SEO",
description: "Atlanta developer specializing in custom websites, mobile apps, business automation, and local SEO for small businesses in Atlanta and Athens, GA.",
  openGraph: {
    title: "Made by Kane | Website & Mobile App Development Atlanta | Local SEO",
description: "Atlanta developer specializing in custom websites, mobile apps, business automation, and local SEO for small businesses in Atlanta and Athens, GA.",
    images: [
      {
        url: "https://madebykane.com/icon.png",
        width: 1200,
        height: 630,
        alt: "Made by Kane Banner",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
