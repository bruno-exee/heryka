import type { NextConfig } from "next";

const isGitHubPages = process.env.GITHUB_ACTIONS === "true";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath: isGitHubPages ? "/heryka" : "",
  assetPrefix: isGitHubPages ? "/heryka/" : "",
  images: { unoptimized: true },
};

export default nextConfig;
