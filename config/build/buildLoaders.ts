import { RuleSetRule } from 'webpack';
import { BuildOptions } from './types/config';
import { buildCssLoader } from './loaders/buildCssLoader';

export function buildLoaders({ isDev }: BuildOptions): RuleSetRule[] {
  const babelLoader = {
    test: /\.(js|jsx)$/u,
    exclude: /node_modules/u,
    use: {
      loader: 'babel-loader',
      options: {
        presets: [['@babel/preset-env', { targets: 'defaults' }]],
      },
    },
  };

  const typescriptLoader = {
    test: /\.tsx?$/u,
    use: 'ts-loader',
    exclude: /node_modules/u,
  };

  const cssLoader = buildCssLoader(isDev);

  const svgLoader = {
    test: /\.svg$/u,
    use: ['@svgr/webpack'],
  };

  const fileLoader = {
    test: /\.(png|jpe?g|gif|woff2|woff)$/iu,
    use: [
      {
        loader: 'file-loader',
      },
    ],
  };

  return [babelLoader, typescriptLoader, cssLoader, svgLoader, fileLoader];
}
