'use strict';

const gulp = require('gulp');
const esLint = require('gulp-eslint');
const sassLint = require('gulp-sass-lint');
const del = require('del');
const scssLintConfig = {
  rules: {
    'no-misspelled-properties': [1, { 'extra-properties': ['composes'] }]
  }
};

gulp.task('clean', function() {
  return del(['build']);
});

gulp.task('lintScripts', () => {
  return gulp.src(['gulpfile.js', '{src,__tests__}/**/*.js'])
    .pipe(esLint())
    .pipe(esLint.format())
    .pipe(esLint.failAfterError());
});

gulp.task('lintStyles', () => {
  return gulp.src(['{src}/**/*.scss'])
    .pipe(sassLint(scssLintConfig))
    .pipe(sassLint.format())
    .pipe(sassLint.failOnError());
});

gulp.task('validate', ['lintScripts', 'lintStyles']);
