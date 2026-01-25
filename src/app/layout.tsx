import type { Metadata } from "next";
import { Geist, Geist_Mono, Outfit, Poppins } from "next/font/google";
import "./globals.css";
import IndexLayout from "@/components/layout";
import { keywords } from "@/const/meta";

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
  keywords: keywords,
  openGraph: {
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
      },
    ],
    title: "CLT Academy",
    description:
      "CLT Academy is a platform for learning trading and investing.",
    url: "https://clt-academy.com",
    siteName: "CLT Academy",
    locale: "uae",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CLT Academy",
    description:
      "CLT Academy is a platform for learning trading and investing.",
    images: ["/logo.png"],
  },
  icons: {
    icon: "/logo.png",
  },
  alternates: {
    canonical: "https://clt-academy.com",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  verification: {
    google: "google-site-verification=1234567890",
  },
  authors: [{ name: "CLT Academy", url: "https://clt-academy.com" }],
  creator: "CLT Academy",
  publisher: "CLT Academy",
  category: "education",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://unpkg.com/react-quill-new@1.0.2/dist/quill.snow.css"
        ></link>
      </head>
      <body
        className={`${geistSans.variable} ${poppins.variable} ${outfit.variable} relative ${geistMono.variable} antialiased overflow-x-hidden w-screen `}
      >
        <IndexLayout>{children}</IndexLayout>
      </body>
    </html>
  );
}
