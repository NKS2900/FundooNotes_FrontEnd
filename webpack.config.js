
module.exports = {
    entry: './src/index.js',
    module: {
        rules: [
            {
                test:/\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },
            {
              test: /\.css$/i,
              use: ["style-loader", "css-loader"],
            },
            {
              test: /\.s[ac]ss$/i,
              use: [
                // Creates `style` nodes from JS strings
                "style-loader",
                // Translates CSS into CommonJS
                "css-loader",
                // Compiles Sass to CSS
                "sass-loader",
              ],
            },
            {
                test: /\.(png|jpe?g|gif|svg)$/i,
                use: [
                  {
                    loader: 'file-loader',
                  },
                ],
              },
              {
                test: /\.svg$/,
                use: [
                  {
                    loader: 'svg-url-loader',
                    options: {
                      limit: 10000,
                    },
                  },
                ],
              },
        ],

        // plugins: [
        //     new webpack.DefinePlugin({
        //         "process.env.REACT_APP_BASE_URL": JSON.stringify(process.env.REACT_APP_BASE_URL)
        //     }),
        //     new webpack.EnvironmentPlugin(['REACT_APP_BASE_URL']) // <--This is shorthand, does the same thing as the DefinePlugin
        // ],
    },
    resolve:{
        extensions: ['*', '.js', '.jsx']
    },

    output: {
        path: __dirname + '/dist',
        publicPath: '/',
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: './dist',
        historyApiFallback:true
    }
};