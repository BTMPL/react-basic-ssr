const path = require('path');
const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');



module.exports = (env) => {
	const e = env || process.env;

	return {
		devtool: "source-maps",
    mode: e.NODE_ENV,
    target: 'node',
    externals: [nodeExternals()],    
		entry: {
			main: [		
				path.join(__dirname, '..', 'src', 'server.js')
			]
		},
		output: {
			filename: 'server.js',
      path: path.join(__dirname, '..', 'dist'),
      libraryTarget: 'commonjs2'
		},
		plugins: [
			
		],
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
					use: [
						'babel-loader'
					],
					exclude: [/node_modules/]
				}
			]
		}
	}
}