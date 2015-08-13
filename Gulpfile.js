var gulp = require('gulp'),
sass = require('gulp-sass'),
autoprefixer = require('gulp-autoprefixer'),
cssMin = require('gulp-cssmin'),
browserSync =  require('browser-sync').create(),
distJS = require('./dist-js')(browserSync)

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
  .pipe(browserSync.stream())
})

gulp.task('browser-sync', function() {
  browserSync.init({
    server: {
      baseDir: "./src/"
    }
  });
})

gulp.task('watch', function () {
  gulp.watch('src/js/**/*.js', ['dist-js'])
  gulp.watch('src/sass/**/*.sass', ['dist-sass'])
})

gulp.task('dist', ['dist-js', 'dist-sass'], function(){
  console.log('dist ready')
})

gulp.task('default', ['browser-sync', 'dist', 'watch'] , function () {})
