/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  env: {
    PGHOST: 'ep-hidden-grass-536062.us-east-2.aws.neon.tech',
    PGDATABASE: 'bookstore',
    PGUSER:'Sadiii',
    PGPASSWORD:'c2Syd1lUkxZu',
    ACCESS_TOKEN_GEN:'shhhhhh'
  }
}

module.exports = nextConfig
