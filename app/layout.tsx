import type { Metadata } from "next";
import {
  Playfair_Display,
  Source_Sans_3,
  IBM_Plex_Mono,
} from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const sourceSans = Source_Sans_3({
  variable: "--font-source-sans",
  subsets: ["latin"],
  display: "swap",
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-ibm-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Meera Samuh — Global Mobility & Business Solutions",
  description:
    "Meera Samuh — providing end-to-end Global Mobility, HR Solutions, and Business Consulting services since 2008.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${sourceSans.variable} ${ibmPlexMono.variable}`}
    >
      <body className="min-h-screen flex flex-col">
        <Navbar />
        {/* Orange gradient overlay */}
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            height: "400px",
            background: "linear-gradient(to bottom, rgba(226, 151, 51, 0.15) 0%, rgba(226, 151, 51, 0.08) 30%, rgba(226, 151, 51, 0) 100%)",
            pointerEvents: "none",
            zIndex: 0,
          }}
        />
        <main className="flex-1 pt-0 relative z-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
