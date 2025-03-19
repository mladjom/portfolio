/** @type {import('next').NextConfig} */
const path = require('path');

const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'src/styles')],
    prependData: `@use "variables.scss"; @use "mixins.scss";`,
    sourceMap: true
  }
}

module.exports = nextConfig