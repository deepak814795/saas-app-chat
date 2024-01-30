/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        serverActions: true,
    },
    images:{
        domains: ["github.com", "lh3.googleusercontent.com"],
    },
};

export default nextConfig;
