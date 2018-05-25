// 配置webpack相关的模块，本地安装在node_modules

var webpack = require('webpack');		// 引入webpack模块
var path = require('path');				// 引入path模块
var OpenBrowserPlugin = require('open-browser-webpack-plugin');			// 自动打开浏览器 http://localhost:1234

module.exports = {
	entry: [
	    'webpack-dev-server/client?http://localhost:1234',
	    path.resolve(__dirname, './app/index.jsx')
	],
	output: {
		path: path.resolve(__dirname, './build'),		// 导出文件路径
		filename: 'bundle.js',							// 导出文件名
	},
	plugins: [
		new webpack.ProvidePlugin({
		     jQuery: "jquery",
		     $: "jquery"
		}),
	  	new webpack.HotModuleReplacementPlugin(),			// 热更新
		new OpenBrowserPlugin({
			url: 'http://localhost:1234/webpack-dev-server/'
		})
 	],
	module: {
		loaders:[										// 使用特定的loader处理特定的文件
			{
				test: /\.jsx?$/,	// 文件过滤规则
				exclude: /node_modules/,
				loader: 'babel-loader',		
				query: {
          			presets: ['es2015', 'react'] // es2015 处理 ES6 语法，react 处理 jsx 语法
          		}
			},
			{
		        test: /\.css$/,
		        loader: 'style-loader!css-loader'	// 处理CSS文件
		    },
		    {
		        test: /\.sass$/,
		        loader: 'style-loader!css-loader!sass-loader?outputStyle=expanded&indentedSyntax'	// 处理sass文件
		    },
		    {
		        test: /\.scss$/,
		        loader: 'style-loader!css-loader!sass-loader?outputStyle=expanded'	// 处理scss文件
		    },
		    {
		        test: /\.less$/,
		        loader: 'style-loader!css-loader!less-loader'	// 处理less文件
		    },
		    {
		        test: /\.styl$/,
		        loader: 'style-loader!css-loader!stylus-loader'		// 处理stylus文件
		    },
		    {
		        test: /\.(png|jpg|gif|woff|woff2)$/,
		        loader: 'url-loader?limit=8192'					// 处理图片
		    },
		    {
		        test: /\.(mp4|ogg|eot|ttf|svg)$/,				// 处理文件
		        loader: 'file-loader'
		    }
		]
	},
	resolve: {
		alias: {
			jquery: path.resolve(__dirname, './app/config/jquery-vendor.js')		// 将其指向jquery-vendor位置，提高node寻址效率
		}
	}
};