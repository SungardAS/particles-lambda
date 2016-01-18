var gulp = require('gulp'),
vfs = require('vinyl-fs'),
zip = require('gulp-zip');

module.exports.initialize = function(cb) {
  vfs.src('./helloworld/**')
  .pipe(zip('helloworld.zip'))
  .pipe(gulp.dest('./particles/assets'))
  .on('end', cb);
};
