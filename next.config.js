// eslint-disable-next-line @typescript-eslint/no-var-requires
const { withContentlayer } = require("next-contentlayer");

/**
 * @type {import('next').NextConfig}
 */
module.exports = withContentlayer({
  reactStrictMode: true,
  images: {
    domains: [
      "avatars.githubusercontent.com", // Github Avatars
      "opengraph.githubassets.com", // Github OpenGraph,
      "i.scdn.co", // Spotify Album Art
      "img.foreverblog.cn", // Forever Blog
      "img.cdn.whexy.com", // gallery
    ],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**.mzstatic.com", // Apple music
      },
      {
        hostname: "**.hdslb.com", // bilibili
      },
    ],
  },
});
