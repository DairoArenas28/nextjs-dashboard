/** @type {import('next').NextConfig} */

const nextConfig = {
    experimental: {
        ppr: 'incremental',
        nftTracing: true
    },
};

export default nextConfig;

