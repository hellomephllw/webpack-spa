const rootPath = __dirname;

const
    webpack = require('webpack'),
    UglifyJsPlugin = webpack.optimize.UglifyJsPlugin;

//webpack配置
module.exports = {
    //入口文件路径配置
    entry: {
        main: `${rootPath}/src/scripts/main.js`
    },
    //输出文件路径配置
    output: {
        path: `${rootPath}/assets/`,
        filename: '[name].bundle.js'
    },
    //模块加载器配置
    module: {
        loaders: [
            //babel加载器
            {
                test: /\.js[x]?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'react']
                }
            },
            //sass加载器
            {
                test: /\.scss$/,
                loader: 'style-loader!css-loader!sass-loader?sourceMap'
            }
        ]
    },
    //插件配置
    plugins: [
        //压缩js
        new UglifyJsPlugin({
            compress: {
                warnings: false
            }
        })
    ]
};