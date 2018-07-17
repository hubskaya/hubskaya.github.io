var gulp = require('gulp');
var less = require('gulp-less');

gulp.task('less', function(){
  gulp.src('src/less/style.less')
    .pipe(less())
    .pipe(gulp.dest('assets/css'));
});

gulp.task('watch', ['less'], function(){
  gulp.watch('src/less/**/*.less', ['less']);
});