/** @type {import('next').NextConfig} */

const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
    // If you use `MDXProvider`, uncomment the following line.
    providerImportSource: "@mdx-js/react",
  },
})

const nextConfig =  withMDX({
  // Append the default value with md extensions
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
  webpackDevMiddleware: config => {
    config.watchOptions = {
      poll: 1000,
      aggregateTimeout: 300,
    }
    return config
  },
  reactStrictMode: true,
})

// const nextConfig = {
//   webpackDevMiddleware: config => {
//     config.watchOptions = {
//       poll: 1000,
//       aggregateTimeout: 300,
//     }
//     return config
//   },
//   reactStrictMode: true,
// }

module.exports = nextConfig
