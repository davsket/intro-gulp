var gulp = require('gulp'),
	concat = require('gulp-concat'),
	uglify = require('gulp-uglify'),
	webpack = require('gulp-webpack')

module.exports = function (browserSync) {
	return function(){
		return gulp.src('src/js/main.js')
			.pipe(webpack({
				output: {
					filename: 'main.js',
				},
				module: {
					loaders: [
						{ test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader?experimental' }
					]
				}
			}))
			// .pipe(uglify())
			.pipe(gulp.dest('src/dist/js'))
			.pipe(browserSync.stream())
	}
}
