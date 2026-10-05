import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Codenovate 3.0 | Recurse × KMIT",
  description: "Codenovate is Recurse's flagship open hackathon at Keshav Memorial Institute of Technology. Code. Create. Conquer.",
  openGraph: {
    title: "Codenovate 3.0 | Recurse × KMIT",
    description: "India's most exciting student hackathon — 24 hours of innovation, collaboration & impact.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
