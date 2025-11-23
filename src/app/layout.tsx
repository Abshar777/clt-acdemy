import type { Metadata } from "next";
import { Geist, Geist_Mono, Outfit, Poppins } from "next/font/google";
import "./globals.css";
import IndexLayout from "@/components/layout";

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
        <IndexLayout>{children}</IndexLayout>
      </body>
    </html>
  );
}
