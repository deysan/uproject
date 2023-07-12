import HtmlWebpackPlugin from 'html-webpack-plugin';
import webpack, { WebpackPluginInstance } from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import { BuildOptions } from './types/config';

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
      __SERVER_DELAY_MS__: 1500,
    }),
    ...(isDev
      ? [
          new ReactRefreshWebpackPlugin(),
          new webpack.HotModuleReplacementPlugin(),
        ]
      : []),
    new BundleAnalyzerPlugin({
      openAnalyzer: false,
    }),
  ];
}
