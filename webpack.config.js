const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");
const ReactRefreshTypeScript = require("react-refresh-typescript");
module.exports = {
	entry: {
		hello: "./src/index.tsx",
	},
	output: {
		filename: "[name].js",
		path: path.join(__dirname, "dist"),
	},
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				use: {
					loader: "ts-loader",
					options: {
						getCustomTransformers: () => ({
							before: [ReactRefreshTypeScript()],
						}),
						transpileOnly: true,
					},
				},
			},
			{
				test: /.s?css$/,
				use: ["style-loader", "css-loader", "sass-loader"],
			},
			{
				test: /\.(jpg|png|jpeg)$/i,
				type: "asset/resource", //file-loader
			},
			{
				test: /\.(jpg|png|jpeg)$/i,
				type: "asset/inline",
				parser: {
					dataUrlCondition: {
						maxSize: 1024, //url-loader
					},
				},
			},
			{
				test: /\.(jpg|png|jpeg)$/i,
				type: "asset/source", //raw-loader
			},
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: "./public/index.html",
		}),
		new ReactRefreshWebpackPlugin(),
	],
	mode: "production",
	devServer: {
		static: {
			directory: path.join(__dirname, "public"),
		},
		compress: true,
		port: 9000,
		open: true,
	},
	performance: {
		// 关闭性能提示
		hints: false,
	},
	resolve: {
		extensions: [".tsx", ".ts", ".js", ".jsx"],
		alias: {
			utils: path.resolve(__dirname, "./src/utils"),
			src: path.resolve(__dirname, "./src"),
		},
	},
	externals: {
		react: "React",
		"react-dom": "ReactDOM",
	},
	cache: {
		type: "filesystem",
	},
};
