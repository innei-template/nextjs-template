/*
 * @Author: Innei
 * @Date: 2020-04-18 16:00:58
 * @LastEditTime: 2021-01-10 19:18:37
 * @LastEditors: Innei
 * @FilePath: /next-template/next.config.js
 * @MIT
 */

const configs = {
  webpack: (config, options) => {
    return config
  },
  env: {
    PORT: 2323,
  },
  // assetPrefix: isProd ? env.ASSETPREFIX || '' : '',
  async rewrites() {
    return [
      // {
      //   source: '/service-worker.js',
      //   destination: '/_next/static/service-worker.js',
      // },
    ]
  },
  experimental: {
    granularChunks: true,
    modern: true,
  },
}

module.exports = configs
