"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const nextConfig = {
  /* config options here */
};

module.exports = {
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "http://localhost:5000/api/:path*", // Backend URL
      },
    ];
  },
};

exports.default = nextConfig;
