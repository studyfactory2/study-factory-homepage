import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ["ko", "en"],
    defaultLocale: "ko",
  },
};

export default nextConfig;
