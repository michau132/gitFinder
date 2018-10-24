// Konfiguracja Webpack

module.exports = {
  entry: './src/index',
  output: {
    filename: './out.js',
    path: __dirname,
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
      query: {
        presets: ['env', 'react', 'stage-2'],
      },
    },
    {
      test: /\.css$/,
      loaders: [
        'style-loader?sourceMap',
        'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]',
      ],
    },
    ],

  },
};
