const rootPath = __dirname;

const
    webpack = require('webpack'),
    ExtractTextPlugin = require("extract-text-webpack-plugin"),
    CommonsChunkPlugin = webpack.optimize.CommonsChunkPlugin;

//webpack配置
module.exports = {
    //入口文件路径配置
    entry: {
        common: `${rootPath}/src/scripts/common/common.js`,
        vendor: `${rootPath}/src/scripts/common/vendor.js`,
        employee: `${rootPath}/src/scripts/employee/index.js`,
        department: `${rootPath}/src/scripts/department/index.js`
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
            //css加载器
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
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
        //踢出一个或多个公共js
        new CommonsChunkPlugin('common.js', ['common']),
        new CommonsChunkPlugin('vendor.js', ['vendor']),
        //踢出公共css
        new ExtractTextPlugin('common.css', {allChunks: true})
    ]
};