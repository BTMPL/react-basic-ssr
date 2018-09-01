const path = require('path');

module.exports = (env) => ({
	devtool: env.NODE_ENV === "development" ? "source-maps" : false,
	mode: env.NODE_ENV,
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
				test: /\.js$/,
				loaders: ['babel-loader'],
				exclude: [/node_modules/]
			}
		]
	}
})
