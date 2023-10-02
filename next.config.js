/** @type {import('next').NextConfig} */

// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require("path")

const nextConfig = {
  output: "export",
  sassOptions: {
    includePaths: [path.join(__dirname, "styles", "sass")],
    prependData: `
      @import 'abstracts/_index.scss';
    `
  }
}

module.exports = nextConfig
