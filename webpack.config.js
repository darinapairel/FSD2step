// webpack v4
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin= require('copy-webpack-plugin');
const fs = require('fs');

function generateHtmlPlugins(templateDir) {
  const templateFiles = fs.readdirSync(path.resolve(__dirname, templateDir));
  return templateFiles.map(item => {
    const parts = item.split('.');
    const name = parts[0];
    const extension = parts[1];
    return new HtmlWebpackPlugin({
      filename: `${name}.html`,
      template: path.resolve(__dirname, `${templateDir}/${name}.${extension}`),
      inject: false,
    })
  })
}

const htmlPlugins = generateHtmlPlugins('./src/html/views')

module.exports = {
  entry: { main: './src/index.js' },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[chunkhash].js'
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        include: path.resolve(__dirname, 'src/html/components'),
        use: ['raw-loader']
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract(
          {
            fallback: 'style-loader',
            use: ['css-loader', 'sass-loader', "clean-css-loader"]
          })
      },
      {
        test: /\.pug$/,
        loader: 'pug-loader',
        options:{
          pretty:true
        }
      },
      {
        test: /\.less$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
          },
          {
            loader: 'less-loader', 
          },
        ],
      },
    ]
  },
  plugins: [ 
    new ExtractTextPlugin({filename: 'style.css'}),
    new HtmlWebpackPlugin({
        inject: false,
        hash: true,
        template: './src/index.pug'
      }),
      new CopyWebpackPlugin([{
        from: './src/fonts',
        to: './fonts'
      },
      {
        from: './src/favicon',
        to: './favicon'
      },
      {
        from: './src/img',
        to: './img'
      },
      {
        from: './src/js',
        to: './js'
      },
      {
        from: './src/scss/',
        to: './styles'
      }
    ])
  ].concat(htmlPlugins)
  
};