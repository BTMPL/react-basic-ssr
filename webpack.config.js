const path = require('path');

module.exports = (env) => {
	const e = env || process.env;
	return {
		devtool: (e.NODE_ENV || !e.NODE_ENV) === "development" ? "source-maps" : false,
		mode: e.NODE_ENV,
		entry: {
			main: [path.join(__dirname, 'src', 'index.js')]
		},
		output: {
			filename: 'bundle.js',
			path: path.join(__dirname, 'dist')
		},
		module: {
			rules: [
				{
					test: /\.mdx?$/,
					use: [
						'babel-loader',
						'@mdx-js/loader'
					]
				},			
				{
					test: /\.js$/,
					loaders: ['babel-loader'],
					exclude: [/node_modules/]
				}
			]
		}
	}
}