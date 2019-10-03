module.exports = {
  chainWebpack: config => {
    const svgRule = config.module.rule('svg');
    svgRule.uses.clear();
    svgRule.use('vue-svg-loader').loader('vue-svg-loader');
  },
  css: {
    loaderOptions: {
      less: {
        modifyVars: {
          'primary-color': '#F05D37',
          'link-color': '#F05D37',
        },
        javascriptEnabled: true,
      },
    },
  },
};
