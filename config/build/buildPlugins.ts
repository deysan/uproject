import HtmlWebpackPlugin from 'html-webpack-plugin';
import type { WebpackPluginInstance } from 'webpack';
import webpack from 'webpack';
import type { BuildOptions } from './types/config';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';

export function buildPlugins(props: BuildOptions): WebpackPluginInstance[] {
  const { paths, isDev } = props;

  return [
    new HtmlWebpackPlugin({
      template: paths.html,
    }),
    new webpack.ProgressPlugin(),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash:8].css',
      chunkFilename: 'css/[name].[contenthash:8].css',
    }),
    new webpack.DefinePlugin({
      __IS_DEV__: JSON.stringify(isDev),
    }),
    ...(isDev
      ? [
          new ReactRefreshWebpackPlugin(),
          new webpack.HotModuleReplacementPlugin(),
        ]
      : []),
  ];
}
