'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var rename = require("gulp-rename");
var autoprefixer = require('gulp-autoprefixer');

gulp.task('sass', function (done) {
    gulp.src("scss/style.scss")
        .pipe(sass({
            outputStyle: 'compressed'
        }))
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(autoprefixer())
        .pipe(gulp.dest("css/"))
    done();
});
gulp.task('watch', function () {
    gulp.watch('scss/*.scss', gulp.series('sass'));
});

gulp.task('copy', function (done) {
    gulp.src(["**", "!scss/**", "!dist/**", "!node_modules/**", "!gulpfile.js", "!package.json", "!package-lock.json"])
        .pipe(gulp.dest("dist/"));

    done();
});

gulp.task("build", gulp.series(
    "sass",
    "copy"
));

gulp.task('default', gulp.series('build'));