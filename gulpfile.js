const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const del = require('del');
const path = require('path');
const pkgHeader = require('@jswork/gulp-pkg-header');
const SASS_INCLUDE_PATHS = [path.join(__dirname, '/node_modules/')];
const concat = require('gulp-concat');
const files = [
  'src/_variables.scss',
  'src/_mixins.scss',
  'src/_grid.scss',
  'src/index.scss',
];

gulp.task('clean', function() {
  return del('dist');
});

gulp.task('styles', function() {
  return gulp
    .src(files)
    .pipe(concat('index.scss'))
    .pipe(pkgHeader())
    .pipe(gulp.dest('dist'))
    .pipe(sass({ outputStyle: 'expanded', includePaths: SASS_INCLUDE_PATHS }))
    .pipe(gulp.dest('dist'));
});

gulp.task('default', gulp.series(['clean', 'styles']));
