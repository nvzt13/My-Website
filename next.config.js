/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActionsBodySizeLimit: '5mb', 
    serverActions: true,
    runtime: 'nodejs',
  },
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'plus.unsplash.com',
          port: '',
          pathname: '/**',
        },
        {
          protocol: 'https',
          hostname: "images.unsplash.com",
          port: '',
          pathname: '/**',
        },
        {
          protocol: 'https',
          hostname: 'images.pexels.com',
          port: '',
          pathname: '/**',
        },
        {
          protocol: 'https',
          hostname: 'www.pexels.com',
          port: '',
          pathname: '/**',
        },
      ],
    },
  };
  
  module.exports = nextConfig;
  
