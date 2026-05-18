import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  transpilePackages: ['@punesh12/lattice-ui', '@punesh12/lattice-ui-tokens'],
  serverExternalPackages: ['react-day-picker'],
}

export default nextConfig
