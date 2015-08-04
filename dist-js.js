var gulp = require('gulp'),
	concat = require('gulp-concat'),
	uglify = require('gulp-uglify')

module.exports = function () {
	return gulp.src('src/js/**/*.js')
		.pipe(concat('main.min.js'))
		.pipe(uglify())
		.pipe(gulp.dest('src/dist/js'))
}