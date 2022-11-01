import CaseSensitivePathsPlugin from 'case-sensitive-paths-webpack-plugin';
import CopyPlugin from 'copy-webpack-plugin';
import CssMinimizerPlugin from 'css-minimizer-webpack-plugin';
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import TerserPlugin from 'terser-webpack-plugin';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import { Configuration, IgnorePlugin } from 'webpack';
import { version as babelVersion } from '@babel/runtime/package.json';
import { version } from './package.json';
import * as path from 'path';

// Environment Variables
const IS_PRODUCTION = process.env.NODE_ENV === 'production';
const IS_DEVELOPMENT = process.env.NODE_ENV === 'development';
const USE_ANALYZER = process.env.ANALYZE === 'true';
const USE_PROFILING = process.env.USE_PROFILING === 'true';
const REMOVE_CONSOLE = process.env.REMOVE_CONSOLE === 'true';
const USE_UNSAFE_MINIFICATION = process.env.USE_UNSAFE_MINIFICATION !== 'false';

console.table([
  { option: 'Env', value: IS_PRODUCTION ? 'production' : IS_DEVELOPMENT ? 'development' : 'test' },
  { option: 'Use analyzer', value: USE_ANALYZER },
  { option: 'Use profiling', value: USE_PROFILING },
  { option: 'Remove console.*', value: REMOVE_CONSOLE },
  { option: 'Unsafe minification', value: USE_UNSAFE_MINIFICATION }
]); //prettier-ignore

export default {
  entry: './src/index.tsx',
  mode: IS_PRODUCTION ? 'production' : 'development',
  stats: 'errors-warnings',
  bail: IS_PRODUCTION,
  devtool: IS_PRODUCTION ? false : 'source-map',
  output: {
    filename: IS_PRODUCTION ? `${version}.min.js` : 'dev.js',
    assetModuleFilename: '[name][ext]',
    pathinfo: IS_DEVELOPMENT,
    publicPath: '',
    devtoolModuleFilenameTemplate: IS_DEVELOPMENT
      ? (info: any) => path.resolve(info.absoluteResourcePath).replace(/\\/g, '/')
      : undefined,
  },
  optimization: {
    minimize: IS_PRODUCTION,
    minimizer: [
      new TerserPlugin({
        extractComments: false,
        terserOptions: {
          compress: {
            arguments: true,
            drop_console: REMOVE_CONSOLE,
            ecma: 2020,
            passes: 3,
            pure_getters: true,
            unsafe: USE_UNSAFE_MINIFICATION,
            warnings: false,
          },
          format: { comments: false, ecma: 2020, wrap_func_args: false },
          keep_classnames: USE_PROFILING,
          keep_fnames: USE_PROFILING,
        },
      }),
      new CssMinimizerPlugin(),
    ],
  },
  module: {
    rules: [
      IS_DEVELOPMENT && {
        enforce: 'pre',
        exclude: /@babel(?:\/|\\{1,2})runtime/,
        test: /\.(js|mjs|jsx|ts|tsx|css)$/i,
        loader: 'source-map-loader',
      },
      {
        oneOf: [
          { test: /\.(?:bmp|gif|jpe?g|png|avif)$/i, type: 'asset' },
          { test: /\.svg$/, type: 'asset/resource', use: 'svgo-loader' },
          {
            test: /\.(js|mjs|jsx|ts|tsx)$/i,
            include: path.resolve(__dirname, 'src'),
            loader: 'babel-loader',
            options: {
              presets: [
                [
                  '@babel/preset-env',
                  {
                    useBuiltIns: 'entry',
                    corejs: require('core-js/package.json').version,
                    loose: true,
                    bugfixes: true,
                    debug: USE_PROFILING, // Shows list of polyfills being added
                  },
                ],
                ['@babel/preset-react', { runtime: 'automatic' }],
                '@babel/preset-typescript',
              ],
              plugins: [
                ['@babel/plugin-transform-runtime', { version: babelVersion }],
                IS_PRODUCTION && [
                  'babel-plugin-transform-react-remove-prop-types',
                  { removeImport: true },
                ],
              ].filter(Boolean),
              cacheDirectory: true,
              cacheCompression: false,
              compact: IS_PRODUCTION,
              sourceMaps: IS_DEVELOPMENT,
              inputSourceMap: IS_DEVELOPMENT,
            },
          },
          {
            test: /\.css$/i,
            use: [
              IS_DEVELOPMENT ? 'style-loader' : MiniCssExtractPlugin.loader,
              {
                loader: 'css-loader',
                options: { sourceMap: IS_DEVELOPMENT, importLoaders: 1, modules: { mode: 'icss' } },
              },
              {
                loader: 'postcss-loader',
                options: {
                  postcssOptions: {
                    ident: 'postcss',
                    config: false,
                    plugins: [
                      'postcss-flexbugs-fixes',
                      ['postcss-preset-env', { autoprefixer: { flexbox: false }, stage: 3 }],
                    ],
                  },
                  sourceMap: IS_DEVELOPMENT,
                },
              },
            ],
            sideEffects: true,
          },
          {
            test: /\.(scss|sass)$/i,
            use: [
              IS_DEVELOPMENT ? 'style-loader' : MiniCssExtractPlugin.loader,
              {
                loader: 'css-loader',
                options: { sourceMap: IS_DEVELOPMENT, importLoaders: 3, modules: { mode: 'icss' } },
              },
              {
                loader: 'postcss-loader',
                options: {
                  postcssOptions: {
                    ident: 'postcss',
                    config: false,
                    plugins: [
                      'postcss-flexbugs-fixes',
                      ['postcss-preset-env', { autoprefixer: { flexbox: false }, stage: 3 }],
                    ],
                  },
                  sourceMap: IS_DEVELOPMENT,
                },
              },
              { loader: 'resolve-url-loader', options: { sourceMap: IS_DEVELOPMENT } },
              { loader: 'sass-loader', options: { sourceMap: true } },
            ],
            sideEffects: true,
          },
          {
            exclude: /(?:^$)|(?:\.(?:js|mjs|jsx|ts|tsx|html|json)$)/i, // Exclude JS, so CSS Loader injects CSS
            type: 'asset/resource', // ^ Also exclude html & json so they get processed by webpack internal loaders
          },
        ],
      },
    ].filter(Boolean),
  },
  resolve: {
    extensions: ['.js', '.mjs', '.jsx', '.ts', '.tsx'],
    alias: {
      react: 'preact/compat',
      'react-dom': 'preact/compat',
      'react/jsx-runtime': 'preact/jsx-runtime',
    }, // secretly swaps react out for preact/compat *shhh*
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      minify: IS_PRODUCTION
        ? {
            collapseWhitespace: true,
            keepClosingSlash: true,
            removeComments: true,
            removeRedundantAttributes: true,
            removeStyleLinkTypeAttributes: true,
            removeEmptyAttributes: true,
            useShortDoctype: true,
            minifyJS: true,
            minifyCSS: true,
            minifyURLs: true,
          }
        : false,
    }),
    IS_DEVELOPMENT && new CaseSensitivePathsPlugin(),
    IS_PRODUCTION && new MiniCssExtractPlugin(),
    new IgnorePlugin({ resourceRegExp: /^\.\/locale$/, contextRegExp: /moment$/ }),
    new ForkTsCheckerWebpackPlugin({
      async: IS_DEVELOPMENT,
      typescript: {
        configOverwrite: {
          compilerOptions: {
            sourceMap: IS_DEVELOPMENT,
            skipLibCheck: true,
            inlineSourceMap: false,
            declarationMap: false,
            noEmit: true,
            incremental: true,
            tsBuildInfoFile: './node_modules/.cache/tsconfig.tsbuildinfo',
          },
        },
        context: '.',
        diagnosticOptions: { syntactic: true },
        mode: 'write-references',
      },
      issue: { include: [{ file: '../**/src/**/*.tsx?' }] },
    }),
    IS_PRODUCTION &&
      new CopyPlugin({ patterns: [{ from: 'public/*.{ico,png,webp,js}', to: '[name][ext]' }] }),
    USE_ANALYZER && new BundleAnalyzerPlugin(),
  ].filter(Boolean),
} as Configuration;
