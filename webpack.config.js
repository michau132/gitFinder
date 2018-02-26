
//Konfiguracja Webpack
module.exports = {
    entry: "./src/index.jsx",
    output: {
        filename: "./out.js"
    },
    devServer: {
        inline: true,
        contentBase: './',
        port: 3001
    },
    watch: true,
    module: {
        loaders: [ {
            test: /\.jsx$/,
            exclude: /node_modules/,
            loader: "babel-loader",
            query: {
                presets: ["env", "react", "stage-2"]
            }
        },
                {
                    test: /\.css$/,
                    use: [ 'style-loader', 'css-loader' ]
                }
        ],

    }
}