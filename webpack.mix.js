let mix = require('laravel-mix');
const ImageminPlugin = require('imagemin-webpack-plugin').default;
const CopyWebpackPlugin = require('copy-webpack-plugin');
const imageminMozjpeg = require('imagemin-mozjpeg');
const webpack         = require('webpack');
/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/assets/js/app.js', 'public/js')
	.sass('resources/assets/sass/app.scss', 'public/css')
	// .copy('node_modules/font-awesome/fonts', 'public/fonts')
	// .copy('node_modules/bootstrap-vue/dist/bootstrap-vue.css','public/css')
	.options({
		processCssUrls: false,
	})
	.sourceMaps()
	.version()
	.browserSync({
		proxy: '127.0.0.1:8000'
	})

	.webpackConfig({
		module: {
			rules: [
			// With the `import-glob-loader` we can use globs in our import
			// statements in css.
				{
					test: /\.css/,
					loader: 'import-glob-loader',
					enforce: 'pre',
				},
			],
		},

		plugins: [
			new CopyWebpackPlugin([{ from: 'resources/assets/images', to: 'img' }]),
			new ImageminPlugin({
				test: /\.(jpe?g|png|gif)$/i,
				plugins: [ imageminMozjpeg({ quality: 70 }) ]
			})
		]
	});
