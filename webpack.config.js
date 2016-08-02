module.exports = {
	entry: "./app/App.js",
	output: {
		filename: "./public/bundle.js"
	},
	devServer: {
		inline: true,
		port: 3004
	},
	module: {
		loaders: [
			{
				test: /\.jsx?$/,
				exclude: /(node_modules)/,
				loader: "babel",
				query: {
					presets: ["es2015", "react"]
				}
			}
		]
	}
}