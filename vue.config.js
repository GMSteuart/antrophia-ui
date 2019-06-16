const path = require('path')

module.exports = {
  devServer: {
    disableHostCheck: true,
    // matches lando config
    public: 'antrophia.lndo.site',
  },
  chainWebpack: config => {
    if (config.plugins.has('extract-css')) {
      const extractCSSPlugin = config.plugin('extract-css');
      extractCSSPlugin &&
        extractCSSPlugin.tap(() => [
          {
            filename: '[name].css',
            chunkFilename: '[name].css',
          },
        ]);
    }

    config.module
      .rule('fonts')
      .test(/\.(woff2?|eot|ttf|otf)(\?.*)?$/)
      .use('url-loader')
      .loader('url-loader')
      .end()
  },

  configureWebpack: {
    output: {
      filename: '[name].js',
      chunkFilename: '[name].js',
    },
    resolve: {
      alias: {
        scss: path.resolve(__dirname, 'src/scss'),
        // 'api-client': path.resolve(__dirname, 'src/api/client.js'),
        // 'api-client': process.env.NODE_ENV === 'production'
        //   ? path.resolve(__dirname, 'src/api/server/index.js')
        //   : path.resolve(__dirname, 'src/api/mock/index.js')
      },
    },
  },

  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'scss',
      patterns: ['/app/src/scss/abstracts/*.scss'],
    },
    i18n: {
      locale: 'en',
      fallbackLocale: 'en',
      localeDir: 'locales',
      enableInSFC: true,
    },
  },
}
