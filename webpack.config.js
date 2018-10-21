// Konfiguracja Webpack

module.exports = {
  entry: './src/index',
  output: {
    filename: './out.js',
    path: __dirname,
  },
  devServer: {
    inline: true,
    contentBase: './',
    port: 3000,
    open: true,
  },
  watch: true,
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
      use: ['style-loader', 'css-loader'],
    },
    ],

  },
};
