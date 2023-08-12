const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const imagemin = require('gulp-imagemin')
const uglify = require('gulp-uglify')
const sourcemaps = require('gulp-sourcemaps');

function buildStyles() {
    return gulp.src('./src/styles/main.scss').pipe(sourcemaps.init())
    .pipe(sass({
        outputStyle: 'compressed'
    })).pipe(sourcemaps.write('./maps'))
    .pipe(gulp.dest('./build/styles'))
}

function uglifyJS() {
        return gulp.src('./src/scripts/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('./build/scripts'))
}

function compressImages() {
        return gulp.src('./src/images/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./build/images'))
}

exports.buildStyles = buildStyles

exports.default = function() {
    gulp.watch('./src/styles/*scss', {ignoreInitial: false}, gulp.series(buildStyles));
    gulp.watch('./src/scripts/*.js', {ignoreInitial: false}, gulp.series(uglifyJS));
    gulp.watch('./src/images/*', {ignoreInitial: false}, gulp.series(compressImages));
}