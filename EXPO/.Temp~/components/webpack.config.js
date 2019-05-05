
var path = require('path');

module.exports = {
	entry: "_wr_root",
	resolve: {
		root: [
			path.join(__dirname, "src"),
			
				"C:\\WebRatio\\WebRatio Mobile Platform Community 8.10.3\\WebRatio\\plugins\\com.webratio.generator.mobile_8.10.3.201902120438\\BuiltinComponents\\src"
			,
				"C:\\WebRatio\\WebRatio Mobile Platform Community 8.10.3\\WebRatio\\plugins\\com.webratio.components.mobile.content_8.10.3.201902120438\\src"
			,
				"C:\\WebRatio\\WebRatio Mobile Platform Community 8.10.3\\WebRatio\\plugins\\com.webratio.components.mobile.validation_8.10.3.201902120438\\src"
			,
				"C:\\WebRatio\\WebRatio Mobile Platform Community 8.10.3\\WebRatio\\plugins\\com.webratio.components.mobile.utility_8.10.3.201902120438\\src"
			,
				"C:\\WebRatio\\WebRatio Mobile Platform Community 8.10.3\\WebRatio\\plugins\\com.webratio.components.mobile.operation_8.10.3.201902120438\\src"
			
		]
	},
	module: {
		loaders: [{
			test: /\.js$/,
			exclude: [ /node_modules/ ],
			loader: "babel-loader",
			query: {
				whitelist: "es6.modules"
			}
		}]
	},
	resolveLoader: {
		root: [
			path.join("C:\\WebRatio\\WebRatio Mobile Platform Community 8.10.3\\WebRatio\\Nodejs", "node_modules")
		]
	}
};
