const gulp = require('gulp');
const sass = require('gulp-dart-sass'); // 替换为 gulp-dart-sass
const del = require('del');
const pkgHeader = require('@jswork/gulp-pkg-header');
const concat = require('gulp-concat');

const sassOptions = {
  outputStyle: 'expanded',
  precision: 4,
  includePaths: ['./node_modules'],
  silenceDeprecations: ['legacy-js-api'],
};

gulp.task('clean', function() {
  return del('dist');
});

// 新增 css 任务
gulp.task('styles', function() {
  return gulp
    .src('src/index.scss')
    .pipe(pkgHeader())
    .pipe(gulp.dest('dist'))
    .pipe(sass(sassOptions).on('error', sass.logError))
    .pipe(concat('style.css'))
    .pipe(gulp.dest('docs'))
    .pipe(gulp.dest('dist'));
});


gulp.task('build', gulp.series(['clean', 'styles']));
gulp.task('dev', gulp.series(['clean', 'styles', function watch () {
    gulp.watch('src/**/*.scss', gulp.series('styles'));
  }]),
);
