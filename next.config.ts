import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  // experimental:{
  //   ppr:"incremental",
  //   after:true
  // },
  devIndicators:{
    appIsrStatus:true,
    buildActivity:true,
    buildActivityPosition:"bottom-right",
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '*',
      },
    ],
  },
};

export default nextConfig;
