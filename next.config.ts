import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // reactCompiler: true,
  typescript:{
    ignoreBuildErrors: true,
  },
  images:{
    domains:["*"],
  },
};

export default nextConfig;
