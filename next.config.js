/** @type {import('next').NextConfig} */
const nextConfig = {
  outputFileTracingRoot: __dirname,
  async rewrites() {
    return [
      { source: '/load', destination: '/tools/container-load-calculator.html' },
      { source: '/vendor/three.min.js', destination: '/tools/vendor/three.min.js' },
      { source: '/vendor/OrbitControls.js', destination: '/tools/vendor/OrbitControls.js' },
    ];
  },
  async redirects() {
    return [{
      source: '/:path*',
      has: [{ type: 'host', value: 'sinolyg.com' }],
      destination: 'https://www.sinolyg.com/:path*',
      permanent: true,
    }];
  },
  async headers() {
    return [
      { source: '/api/:path*', headers: [{ key: 'X-Robots-Tag', value: 'noindex' }] },
      { source: '/en/:path*', headers: [{ key: 'Content-Language', value: 'en' }] },
    ];
  },
};

module.exports = nextConfig;
