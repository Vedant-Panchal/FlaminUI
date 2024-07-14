import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { GeistSans } from "geist/font/sans";
import "./globals.css";
import Navbar from "@/components/ui/Navbar/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ProtoUI 🚀🚀",
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
      <body className="w-screen min-h-screen h-screen max-h-max overflow-x-hidden"> 
        <Navbar />
        <main className="h-full max-h-max w-screen bg-noise/30 bg-repeat ">
        {children}
        </main>
      </body>
    </html>
  );
}
