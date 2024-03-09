/** @type {import("next").NextConfig} */
const nextConfig = {
  basePath: '/octopi',
  output: "export",
  images: {
    unoptimized: true
  }
};

module.export = nextConfig;
