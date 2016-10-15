(function () {

  var gulp = require('gulp');
  var sass = require('gulp-sass');
  var del = require('del');
  var autoprefixer = require('gulp-autoprefixer');
  var debug = require('gulp-debug');
  var rename = require('gulp-rename');


  gulp.task('clean', function () {
    return del('dist');
  });

  gulp.task('sass', function () {
    return gulp.src('src/webkit-css-flex-grid.scss')
      .pipe(sass({outputStyle:'expanded'}).on('error', sass.logError))
      .pipe(gulp.dest('dist'))
        .pipe(sass({outputStyle:'compressed'}).on('error', sass.logError))
        .pipe(rename({extname:'.min.css'}))
        .pipe(gulp.dest('dist'));
  });

  gulp.task('default', ['clean', 'sass']);


}());
