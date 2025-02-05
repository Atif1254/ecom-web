import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata: Metadata = {
  title: "Ecommerce Website",
  description: "Ecommerce Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}

        {/* Snipcart API Script */}
      
      </body>
    </html>
  );
}
