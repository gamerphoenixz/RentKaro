// /** @type {import('next').NextConfig} */
// const nextConfig = {};

// export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      domains: ['pzkrlbszkxlbbauwakcg.supabase.co'],
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'pzkrlbszxklbbauwakcq.supabase.co',
          pathname: '/storage/v1/object/public/listingImages/**',
        },
        {
          protocol: 'https',
          hostname: 'img.clerk.com',
          pathname: '/**',
        },
      ],
    },
  };
  
  export default nextConfig;
  