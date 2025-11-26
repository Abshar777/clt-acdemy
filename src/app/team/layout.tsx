import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Our Courses - CLT Academy",
  description: "CLT Academy is a platform for learning trading and investing.",
  keywords:[
    "CLT Academy",
    "Best Trading Academy in UAE",
    "Best Trading Academy in Dubai",
    "Best Online Trading Academy",
    "Best Online Trading Course",
    "Best Online Trading Course in UAE",
    "Best Online Trading Course in Dubai",
    "Best Online Trading Course in Sharjah",
    "Best Online Trading Course in Abu Dhabi",
    "Best Online Trading Course in Ajman",
    "Best Online Trading Course in Ras Al Khaimah",
    "Best Online Trading Course in Fujairah",
    "Best Forex Trading Academy",
    "Best Forex Trading Course",
    "Best Forex Trading Course in UAE",
    "Best Forex Trading Course in Dubai",
    "Best Forex Trading Course in Sharjah",
    "Best Forex Trading Course in Abu Dhabi",
    "Best Forex Trading Course in Ajman",
    "Best Forex Trading Course in Ras Al Khaimah",
    "Best Forex Trading Course in Fujairah",
    "clt trading academy",
    "clt trading course",
    "clt trading course in uae",
    "clt trading course in dubai",
    "clt trading course in sharjah",
    "clt trading course in abu dhabi",
    "clt trading course in ajman",
    "clt trading course in ras al khaimah",
    "clt trading course in fujairah",
    "clt forex trading academy",
    "CLT-ACADEMY",
    "CLT-TRADING-ACADEMY",
    "CLT-TRADING-COURSE",
    "CLT-TRADING-COURSE-IN-UAE",
    "CLT-TRADING-COURSE-IN-DUBAI",
    "CLT-TRADING-COURSE-IN-SHARJAH",
    "CLT-TRADING-COURSE-IN-ABU-DHABI",
    "CLT-TRADING-COURSE-IN-AJMAN",
    "CLT-TRADING-COURSE-IN-RAS-AL-KHAIMAH",
    "CLT-TRADING-COURSE-IN-FUJAIRAH",
  ],
  openGraph: {
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
      },
    ],
    title: "CLT Academy",
    description: "CLT Academy is a platform for learning trading and investing.",
    url: "https://clt-academy.com",
    siteName: "CLT Academy",
    locale: "uae",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CLT Academy",
    description: "CLT Academy is a platform for learning trading and investing.",
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
