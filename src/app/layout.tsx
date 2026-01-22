import type { Metadata } from "next";
import { Inter, Syne } from "next/font/google";
import Script from "next/script";
import SmoothScroll from "@/components/SmoothScroll";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "zenvic | Web3 Content Creator & Designer",
  description: "Portfolio of zenvic - Web3 Content Creator, Community Moderator, and Graphic Designer.",
};

import { SettingsProvider } from "@/components/SettingsProvider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${syne.variable} antialiased selection:bg-white selection:text-black transition-colors duration-300`}
      >
        <SettingsProvider>
          <SmoothScroll>
            {children}
          </SmoothScroll>
        </SettingsProvider>
      </body>
    </html>
  );
}
