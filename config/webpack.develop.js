const path = require('path');
const webpack = require('webpack');
const rehypePrism = require('@mapbox/rehype-prism');
const iframe = require('remark-iframes');


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
					use: [
						{ 
							loader: 'babel-loader' 
						},
						{
							loader: '@mdx-js/loader',
							options: {
								mdPlugins:[
									[iframe, {
										'codesandbox.io': {
											tag: 'iframe',
											append: '?autoresize=1&codemirror=1&hidenavigation=1&editorsize=50&fontsize=12&runonclick=1',
											disabled: false,
										}}
									]
								],
								hastPlugins: [rehypePrism]
							}
						}
					]
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