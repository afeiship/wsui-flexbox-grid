const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const del = require('del');
const path = require('path');
const pkgHeader = require('@jswork/gulp-pkg-header');
const SASS_INCLUDE_PATHS = [path.join(__dirname, '/node_modules/')];
const concat = require('gulp-concat');
const files = ['src/index.scss'];

gulp.task('clean', function () {
  return del('dist');
});

gulp.task('styles', function () {
  return gulp
    .src(files)
    .pipe(concat('index.scss'))
    .pipe(pkgHeader())
    .pipe(gulp.dest('dist'));
});

// 新增 css 任务
gulp.task('css', function () {
  return gulp
    .src('src/index.scss')
    .pipe(sass({ outputStyle: 'expanded', includePaths: SASS_INCLUDE_PATHS }).on('error', sass.logError))
    .pipe(concat('styles.css'))
    .pipe(gulp.dest('dist'));
});

// 默认任务串联
gulp.task('default', gulp.series(['clean', 'styles', 'css']));
