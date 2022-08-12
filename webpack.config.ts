import { Configuration } from 'webpack';

const config: Configuration = {
	entry: {
		'bundle': ["./src/main.ts"]
	},
	externals: {
		leaflet: "L"
	},
	output: {
		filename: 'bundle.js',
		library: {
			type: "umd",
		},
		globalObject: 'this'
	},
	module: {
		rules: [
			{
				test: /\.ts$/,
				use: 'ts-loader',
			}
		],
	},
	mode: "production",
	resolve: {
		extensions: ['.ts', '.js'],
	}
};

export default config;
