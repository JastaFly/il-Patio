'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var rename = require("gulp-rename");

gulp.task('sass', function (done) {
    gulp.src("scss/style.scss")
        .pipe(sass({outputStyle: 'compressed'}))
    .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest("css/"))
    done();
});
gulp.task('watch', function () {
    gulp.watch('scss/*.scss', gulp.series('sass'));
});
gulp.task('default', gulp.series('watch'));