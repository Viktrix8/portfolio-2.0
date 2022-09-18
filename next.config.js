/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["cdn.sanity.io"],
  }
}
this.i18n = {
  locales: ["en"],
}

module.exports = nextConfig
