const HtmlWebpackPlugin = require('html-webpack-plugin')
const HtmlWebpackPartialsPlugin = require('html-webpack-partials-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')

const webpack = require('webpack')
const path = require('path')

module.exports = {
  entry: {
    index: './src/index.js',
    searchVanilla: './src/javascripts/search-vanilla.js'
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'docs'),
    clean: true
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/i,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
            plugins: ['@babel/plugin-proposal-class-properties']
          }
        }
      },
      {
        test: /\.(sa|sc|c)ss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [['postcss-preset-env']]
              }
            }
          },
          'sass-loader'
        ]
      },
      {
        test: /\.html$/i,
        loader: 'html-loader'
      },
      {
        resourceQuery: /raw/,
        type: 'asset/source'
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg|webp)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'images/[hash][ext][query]'
        }
      },
      {
        test: /\.(ttf|otf|woff|woff2)$/i,
        loader: 'file-loader',
        options: {
          name: 'fonts/[name].[ext]'
        }
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css'
    }),

    // Landing page
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: './index.html'
    }),

    // Страницы разделов
    new HtmlWebpackPlugin({
      template: './src/therapy.html',
      filename: './therapy.html'
    }),

    new HtmlWebpackPlugin({
      template: './src/articles.html',
      filename: './articles.html'
    }),

    new HtmlWebpackPlugin({
      template: './src/thoughts.html',
      filename: './thoughts.html'
    }),

    new HtmlWebpackPlugin({
      template: './src/tests.html',
      filename: './tests.html'
    }),

    // Страница с тестом
    new HtmlWebpackPlugin({
      template: './src/tests/test.html',
      filename: './test.html'
    }),

    // Страница со статьей
    new HtmlWebpackPlugin({
      template: './src/articles/article.html',
      filename: './article.html'
    }),

    // Страница с днями
    new HtmlWebpackPlugin({
      template: './src/days/day.html',
      filename: './day.html'
    }),

    // Страница с тизером
    new HtmlWebpackPlugin({
      template: './src/tizer.html',
      filename: './tizer.html'
    }),

    // Страница с стайлгайдом
    new HtmlWebpackPlugin({
      template: './src/styleguide.html',
      filename: './styleguide.html'
    }),

    // Страница с новыми статьями
    new HtmlWebpackPlugin({
      template: './src/newarticles.html',
      filename: './newarticles.html'
    }),

    // Страница с новыми тестами
    new HtmlWebpackPlugin({
      template: './src/newtest.html',
      filename: './newtest.html'
    }),
    // Страница с новой терапией
    new HtmlWebpackPlugin({
      template: './src/newtherapy.html',
      filename: './newtherapy.html'
    }),

    // Страница с новыми мыслями
    new HtmlWebpackPlugin({
      template: './src/newthoughts.html',
      filename: './newthoughts.html'
    }),
    // Страницы со статьями:
    new HtmlWebpackPlugin({
      template: './src/new_articles/article1.html',
      filename: './article1.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/new_articles/article2.html',
      filename: './article2.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/new_articles/article3.html',
      filename: './article3.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/new_articles/article4.html',
      filename: './article4.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/new_articles/article5.html',
      filename: './article5.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/new_articles/article6.html',
      filename: './article6.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/new_articles/article7.html',
      filename: './article7.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/new_articles/article8.html',
      filename: './article8.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/new_articles/article9.html',
      filename: './article9.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/new_articles/article10.html',
      filename: './article10.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/new_articles/article11.html',
      filename: './article11.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/new_articles/article12.html',
      filename: './article12.html'
    }),
    // дни
    new HtmlWebpackPlugin({
      template: './src/newdays/day1.html',
      filename: './day1.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/newdays/day2.html',
      filename: './day2.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/newdays/day3.html',
      filename: './day3.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/newdays/day4.html',
      filename: './day4.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/newdays/day5.html',
      filename: './day5.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/newdays/day6.html',
      filename: './day6.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/newdays/day7.html',
      filename: './day7.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/newdays/day8.html',
      filename: './day8.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/newdays/day9.html',
      filename: './day9.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/newdays/day10.html',
      filename: './day10.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/newdays/day11.html',
      filename: './day11.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/newdays/day12.html',
      filename: './day12.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/newdays/day13.html',
      filename: './day13.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/newdays/day14.html',
      filename: './day14.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/newdays/day15.html',
      filename: './day15.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/newdays/day16.html',
      filename: './day16.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/newdays/day17.html',
      filename: './day17.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/newdays/day18.html',
      filename: './day18.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/newdays/day19.html',
      filename: './day19.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/newdays/day20.html',
      filename: './day20.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/newdays/day21.html',
      filename: './day21.html'
    }),
    //поиск
    new HtmlWebpackPlugin({
      template: './src/search.html',
      filename: './search.html',
      chunks: ['index', 'searchVanilla']
    }),
    // Internal pages
    // new HtmlWebpackPlugin({
    //   hash: true,
    //   scriptLoading: 'blocking',
    //   template: './src/pages/page.html',
    //   filename: './pages/page.html',
    //   chunks: ['page']
    // }),

    // Partials
    new HtmlWebpackPartialsPlugin([
      {
        path: path.join(__dirname, './src/partials/analytics.html'),
        location: 'analytics',
        template_filename: '*',
        priority: 'replace'
      }
    ])
  ],
  optimization: {
    minimizer: [new CssMinimizerPlugin()]
  }
}
