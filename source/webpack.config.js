var path=require('path');
var webpack=require('webpack');
var loaders=[
	{
		"test":    /\.js?$/,
		"exclude": /node_modules/,
		"loader":  "babel",
		"query":   {
			"presets": [
				"es2015", "react", "stage-0"
			]
		}
	}, {
		test:    /\.s[a|c]ss$/,
		loaders: ['style', 'css', 'sass']
	}, {
		test:    /\.css$/,
		loaders: ['style', 'css', 'sass']
	}
];
module.exports={
	// 	devtool: 'source-map',
	entry:   path.resolve('appjs', 'index.js'),
	output:  {
		path:       path.resolve('public', 'js'),
		filename:   'app.js',
		publicPath: '/'
	},
	resolve: {
		extensions:         ['', '.js', '.jsx', '.scss'],
		modulesDirectories: [
			'node_modules'
		]
	},
	module:  {
		loaders: loaders
	},
	sassLoader: {
		includePaths: [
			path.join(__dirname, 'appjs'),
		]
	}
};