import type { StorybookConfig } from '@storybook/angular'

const path = require('path')

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
  ],
  framework: {
    name: '@storybook/angular',
    options: {},
  },
  docs: {
    autodocs: 'tag',
  },
  core: {
    //@ts-ignore
    builder: '@storybook/builder-vite',
  },
  viteFinal: async (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@/app': path.resolve(__dirname, '../src/app'),
      '@/shared': path.resolve(__dirname, '../src/shared'),
      '@/entities': path.resolve(__dirname, '../src/entities'),
      '@/features': path.resolve(__dirname, '../src/features'),
      '@/widgets': path.resolve(__dirname, '../src/widgets'),
    }
    return config
  },
}
export default config
