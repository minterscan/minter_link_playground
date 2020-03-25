module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/minter_link_playground/' : '/',
  outputDir: 'docs',
  chainWebpack: (config) => {
    config.resolve.symlinks(false)
  }
}