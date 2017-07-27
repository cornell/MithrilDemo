const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const StyleLintPlugin = require('stylelint-webpack-plugin')

module.exports = {
  entry: {
    'app': './src/index.js'
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist',
    port: 9000
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new ExtractTextPlugin('main.scss'),
    new HtmlWebpackPlugin({
      title: 'My Ortho-calendrier 2017',
      template: './src/index.ejs',
      inject: 'body'
    }),
    new StyleLintPlugin({
      configFile: '.stylelintrc.json',
      context: 'src',
      files: '**/*.scss',
      failOnError: true,
      quiet: false
    })
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.join(__dirname, './dist')
  },
  module: {
    rules: [{
      test: /\.scss$/,
      use: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: [{
          loader: 'css-loader',
          options: {
            importLoaders: 1
          }
        },
        {
          loader: 'sass-loader'
        },
        {
          loader: 'postcss-loader',
          options: {
            ident: 'postcss',
            plugins: () => [require('autoprefixer')({
              browsers: ['last 2 versions']
            })]
          }
        }
        ]
      })
    },
    {
      test: /\.(woff|woff2|eot|ttf|otf)$/,
      use: [
        'file-loader'
      ]
    }
    ]
  }
}
