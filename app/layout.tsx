import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { GeistSans } from 'geist/font/sans'
import "./globals.css";
import Navbar from "@/components/ui/Navbar/Navbar";
import { BackBlurColor, BackdropContainer } from "@/lib";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ProtoUI 🚀🚀",
  description: "A collection of UI components and backgrounds for your next project.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${GeistSans.variable}`}>
      <body className={inter.className}>
        <Navbar />
        <main className="relative h-max w-full bg-[#000]">
        {/* <BackBlurColor /> */}
        <BackdropContainer>
        {children}
        </BackdropContainer>
      </main>
        </body>
    </html>
  );
}
