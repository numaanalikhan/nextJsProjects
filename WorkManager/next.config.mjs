/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
        {
        hostname: "uxwing.com",
        },
        {hostname:"img.freepik.com"}
        ],
        },
};

export default nextConfig;
