import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Footer, Header } from "@/components/layout";

const plus_jakarta_sans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
  weight: ["500", "700"],
});

export const metadata: Metadata = {
  title: "Single Page Design Portfolio",
  description: "Single Page Design Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${plus_jakarta_sans.variable}  antialiased`}>
        <div className="bg-custom-light-cream min-h-dvh grid">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
