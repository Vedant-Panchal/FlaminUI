import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { GeistSans } from "geist/font/sans";
import "./globals.css";
import Navbar from "@/components/ui/Navbar/Navbar";
import Footer from "@/components/ui/Footer/Footer";


export const metadata: Metadata = {
  title: "FlaminUI 🚀🚀",
  description:
    "A collection of UI components and backgrounds for your next project.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${GeistSans.variable}`}>
      <body className="w-screen h-max overflow-x-hidden"> 
        <Navbar />
        <main className="h-full max-h-max w-screen bg-noise/30 bg-repeat ">
        {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
