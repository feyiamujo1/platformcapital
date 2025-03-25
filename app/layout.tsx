import type React from "react";
import "@/app/globals.css";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Platform Capital - Africa's Largest Glo-Cal Investment Firm",
  description:
    "Platform Capital is a leading global investment and advisory firm committed to bridging Africa with the world through strategic investments, value-driven partnerships, and game-changing innovation.",
  // generator: 'v0.dev'
  openGraph: {
    title: "Platform Capital - Africa's Largest Glo-Cal Investment Firm",
    description:
      "Platform Capital is a leading global investment and advisory firm committed to bridging Africa with the world through strategic investments, value-driven partnerships, and game-changing innovation.",
    // url: "https://platformcapital.com", // Replace with actual website URL
    type: "website",
    images: [
      {
        url: "/images/platform-capital-logo.png", // Ensure the path is correct
        width: 1200,
        height: 630,
        alt: "Platform Capital Logo"
      }
    ]
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          rel="icon"
          href="/images/platform-capital-logo.png"
          type="image/png"
        />
        <meta
          property="og:title"
          content="Platform Capital - Africa's Largest Glo-Cal Investment Firm"
        />
        <meta
          property="og:description"
          content="Platform Capital is a leading global investment and advisory firm committed to bridging Africa with the world through strategic investments, value-driven partnerships, and game-changing innovation."
        />
        <meta property="og:image" content="/images/platform-capital-logo.png" />
        {/* <meta property="og:url" content="https://platformcapital.com" /> */}
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange>
          {children}
        </ThemeProvider>
        <Tawk />
      </body>
    </html>
  );
}

import "./globals.css";import Tawk from "@/components/tawk";

