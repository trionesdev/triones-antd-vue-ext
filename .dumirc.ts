import { defineConfig } from 'dumi';

export default defineConfig({
  outputPath: 'docs-dist',
  themeConfig: {
    name: '@trionesdev/antd-vue-ext',
  },
  presets: ['@dumijs/preset-vue'],
  vue: {
    checkerOptions: {
      ignore: ['InternalType'],
    },
    compiler: {
      babelStandaloneCDN: 'https://cdn.bootcdn.net/ajax/libs/babel-standalone/7.22.17/babel.min.js'
    },
  },
});
