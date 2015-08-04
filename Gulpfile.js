var gulp = require('gulp'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    cssMin = require('gulp-cssmin'),
    distJS = require('./dist-js')

gulp.task('dist-js', function(cb){
  return distJS()
})

gulp.task('dist-sass', function(cb){
  return gulp.src('src/sass/**/*.sass')
      .pipe(sass())
      .pipe(autoprefixer({
			browsers: ['last 40 versions'],
			cascade: false
		}))
      .pipe(cssMin())
      .pipe(gulp.dest('src/dist/css'))
})

gulp.task('dist', ['dist-js', 'dist-sass'], function(){
	console.log('dist ready')
})