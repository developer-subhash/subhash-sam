import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Contacts from "./components/Contacs";
import { Analytics } from "@vercel/analytics/react"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "subhash sam",
  description: "My public space to share my skills & knowledge",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} text-sm md:text-base antialiased`}>
        <>
        <Header />
        <br /><br />
        {children}
        <br /><br />
        <Contacts />
        <Analytics />
        </>
      </body>
    </html>
  );
}
