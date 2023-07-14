import { Configuration, RuleSetRule } from 'webpack';
import path from 'path';
import { BuildPaths } from '../build/types/config';
import { buildCssLoader } from '../build/loaders/buildCssLoader';

// eslint-disable-next-line no-restricted-exports
export default function ({ config }: { config: Configuration }) {
  const paths: BuildPaths = {
    build: '',
    html: '',
    entry: '',
    src: path.resolve(__dirname, '..', '..', 'src'),
  };

  config.resolve?.modules?.push(paths.src);

  config.resolve?.extensions?.push('.ts', '.tsx');

  if (config.module?.rules) {
    config.module.rules = config.module.rules.map((rule: RuleSetRule) => {
      // eslint-disable-next-line @typescript-eslint/prefer-includes
      if (/svg/u.test(rule.test as string)) {
        return { ...rule, exclude: /\.svg$/iu };
      }

      return rule;
    });

    config.module.rules.push({
      test: /\.svg$/u,
      use: ['@svgr/webpack'],
    });

    config.module.rules.push(buildCssLoader(true));
  }

  return config;
}
