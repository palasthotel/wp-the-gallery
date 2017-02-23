module.exports = {
	entry: {
		galleries: './src/galleries.jsx',
	},
	output: {
		path: './bundle/.',
		filename: '[name].js',
		sourceMapFilename: '[name].map',
	},
	devtool: 'source-map',
	module: {
		loaders: [
			{
				test: /\.jsx$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
				query: {
					presets: [
						"es2015"
					],
					plugins: [
						"transform-object-rest-spread"
					],
				}
			}
		]
	},
	watch: true,
};
