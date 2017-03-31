(function () {

  var gulp = require('gulp');
  var sass = require('gulp-sass');
  var del = require('del');
  var autoprefixer = require('gulp-autoprefixer');
  var debug = require('gulp-debug');
  var rename = require('gulp-rename');
  var concat = require('gulp-concat');
  var files=[
    'src/_variables.scss',
    'src/_mixins.scss',
    'src/_grid.scss',
    'src/webkit-sass-flexbox-grid.scss'
  ];


  gulp.task('clean', function () {
    return del('dist');
  });

  gulp.task('styles', function () {
    return gulp.src(files)
      .pipe(concat('webkit-sass-flexbox-grid.scss'))
      .pipe(gulp.dest('dist'))
      .pipe(sass({outputStyle:'expanded'}).on('error', sass.logError))
      .pipe(gulp.dest('dist'))
      .pipe(sass({outputStyle:'compressed'}).on('error', sass.logError))
      .pipe(rename({extname:'.min.css'}))
      .pipe(gulp.dest('dist'));
  });

  gulp.task('default', ['clean', 'styles']);


}());
