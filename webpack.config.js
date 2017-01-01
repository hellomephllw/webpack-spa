let rootPath = __dirname;

module.exports = {
    entry: {
        main: `${rootPath}/src/scripts/main.js`
    },
    output: {
        path: `${rootPath}/assets/`,
        filename: '[name].bundle.js'
    },
    module: {
        loaders: [{
            test: /\.js[x]?$/,
            exclude: /node_modules/,
            loader: 'babel',
            query: {
                presets: ['es2015', 'react']
            }
        }]
    }
};