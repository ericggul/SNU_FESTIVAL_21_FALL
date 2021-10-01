const path = require('path');

module.exports = {
  stories: ['../src/**/*.stories.js'],
  addons: [
    '@storybook/preset-create-react-app',
    '@storybook/addon-actions',
    '@storybook/addon-links',
  ],
  babel: {
    plugins: [
      ['@babel/plugin-proposal-decorators', { legacy: true }],
    ],
  },

  webpackFinal: async (config, { configType }) => {
    config.resolve.alias = {
      '@': path.resolve(__dirname, '../src'),
      '@C': path.resolve(__dirname, '../src/containers'),
      '@P': path.resolve(__dirname, '../src/pages'),
      '@F': path.resolve(__dirname, '../src/foundations'),
      '@I': path.resolve(__dirname, '../src/static/image'),
      '@S': path.resolve(__dirname, '../src/static/style'),
      '@U': path.resolve(__dirname, '../src/utils'),
    };

    return config;
  },
};
