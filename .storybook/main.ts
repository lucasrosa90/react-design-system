import type { StorybookConfig } from "@storybook/react-webpack5";

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-onboarding",
    "@storybook/addon-interactions",
    {
      name: '@storybook/addon-styling',
      options: {
        postCss: {
          implementation: require.resolve('postcss'),
        },
      },
    },
  ],
  framework: {
    name: "@storybook/react-webpack5",
    options: {},
  },
  staticDirs: [
    "../dist"
  ],
  docs: {
    autodocs: "tag"
  },
  webpackFinal(config, options) {
    const fileLoaderRule: any = config.module?.rules?.find((rule: any) => rule?.test && rule?.test?.test('.svg'));
    fileLoaderRule.exclude = /\.(svg)$/;

    config.module?.rules?.push({
      test: /\.svg$/,
      // use: ['@svgr/webpack']
      enforce: 'pre',
      loader: require.resolve('@svgr/webpack'),
    });
    return config;
  },
};
export default config;
