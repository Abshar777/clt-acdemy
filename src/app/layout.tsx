import type { Metadata } from "next";
import { Geist, Geist_Mono, Outfit, Poppins } from "next/font/google";
import "./globals.css";
import Nav from "@/components/layout/nav";
import Footer from "@/components/layout/footer";
import WhatsappButton from "@/components/global/whatsapp";
import { Suspense } from "react";
import NextTopLoader from "nextjs-toploader";
import { Toaster } from "sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "CLT Academy",
  description: "CLT Academy is a platform for learning trading and investing.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${poppins.variable} ${outfit.variable} relative ${geistMono.variable} antialiased overflow-x-hidden w-screen `}
      >
        <Toaster position="bottom-right" richColors />
        <NextTopLoader
          color="#DC2626"
          shadow="0 0 10px 5px #DC2626"
          showSpinner={false}
        />
        <Nav />
        <WhatsappButton />
        <Suspense fallback={<div></div>}>{children}</Suspense>
        <Footer />
      </body>
    </html>
  );
}
