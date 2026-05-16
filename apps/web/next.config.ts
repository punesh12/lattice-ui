import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  transpilePackages: ['@lattice-ui/ui', '@lattice-ui/tokens'],
  serverExternalPackages: ['react-day-picker'],
}

export default nextConfig
