module.exports = {
    entry: "./app/App.js",
    output: {
        filename: "./public/bundle.js"
    },
    module: {
        loaders: [
            {test: /\.css$/, loader: "style!css"},
            {
                test: /\.js?$/,
                loader: 'babel',
                query: {
                    presets: ['react']
                },
                exclude: /node_modules/
            },
            {
                test: /\.js?$/,
                exclude: /node_modules/,
                loaders: ['babel-loader']
            },
            {
                test: /\.jsx$/,
                exclude: /node_modules/,
                loaders: ['babel-loader']
            },
            {
                test: /\.html$/,
                loader: "file?name=[name].[ext]"
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                loaders: [
                'file?hash=sha512&digest=hex&name=[hash].[ext]',
                'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false']
            }
        ]
    }
};
