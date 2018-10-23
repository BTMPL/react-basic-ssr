const path = require('path');
const webpack = require('webpack');
const rehypePrism = require('@mapbox/rehype-prism');

module.exports = (env) => {
	const e = env || process.env;
	const plugins = [];

	const mainEntryPoint = [		
		path.join(__dirname, '..', 'src', 'index.js')
	];
	if (e.NODE_ENV === "development") {
		plugins.push(new webpack.HotModuleReplacementPlugin());
		mainEntryPoint.unshift('webpack-hot-middleware/client');
	}
	
	return {
		devtool: (e.NODE_ENV || !e.NODE_ENV) === "development" ? "source-maps" : false,
		mode: e.NODE_ENV,
		entry: {
			main: mainEntryPoint
		},
		output: {
			filename: 'bundle.js',
			path: path.join(__dirname, '..', 'dist'),
			publicPath: '/'
		},
		plugins: plugins,
		module: {
			rules: [
				{
					test: /\.css$/,
					use: ['style-loader', 'css-loader']
				},
				{
					test: /\.mdx?$/,
					use: ['babel-loader', 'mdx-loader']
				},			
				{
					test: /\.js$/,
					use: [
						'babel-loader'
					],
					exclude: [/node_modules/]
				}
			]
		}
	}
}