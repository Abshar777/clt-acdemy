import { Metadata } from "next";
import React from "react";
import { keywords } from "@/const/meta";

export const metadata: Metadata = {
  title: "Contact Us - CLT Academy",
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

const layout = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>;
};

export default layout;
