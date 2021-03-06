const helpers = require('./helpers');
// const webpackMerge = require('webpack-merge');
// const commonConfig = require('./webpack.common.js');

const ENV = process.env.ENV = process.env.NODE_ENV = 'development';
const HOST = process.env.HOST || 'localhost';
const PORT = process.env.PORT || 8000;
// const HMR = helpers.hasProcessFlag('hot');
// const METADATA =webpackMerge(commonConfig({env: ENV}).metadata, {
// 	host: HOST,
// 	port: PORT,
// 	ENV: ENV,
// 	HMR: HMR
// });

module.exports = {
	debug: true,
	devtool: 'inline-source-map',
	noInfo: false,
	entry: helpers.root('src/index'),
	target: 'web',
	output: {
		path: helpers.root('src'),
		publicPath: '/',
		filename: 'bundle.js'
	},
	plugins: [],
	module: {
		rules: [
			{ test: /\.js$/, exclude: /node_modules/, loaders: ['ts-loader'] },
			{ test: /\.css$/, loaders: ['style', 'css'] }
		]
	}
};
