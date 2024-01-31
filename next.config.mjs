/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['afu-1255830993.cos.ap-shanghai.myqcloud.com', 'cos.codefe.top','qny-aichat.kanzhua.com'],
  }
}

export default nextConfig
