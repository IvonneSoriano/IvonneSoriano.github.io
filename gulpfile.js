'use strict';
const {src, dest ,watch } = require('gulp');
var sass = require('gulp-sass');
 
sass.compiler = require('node-sass');
 
function sassSave() {
  return src('scss/*.scss')
    .pipe(sass())
    .pipe(dest('css/'));
}
 
function sassWatch() {
    watch('scss/**/*.scss', sassSave);
}

exports.sassWatch = sassWatch;