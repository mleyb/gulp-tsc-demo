var gulp = require('gulp');
var typescript = require('gulp-tsc');
var less = require('gulp-less');
var rename = require('gulp-rename');
var minifyCSS = require('gulp-minify-css');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var concatCss = require('gulp-concat-css');
  
gulp.task('styles', function() {
  return gulp.src('styles/*.less')
    .pipe(less())
    .pipe(gulp.dest('build/styles'))
    .pipe(concatCss("bundle.css"))
    .pipe(gulp.dest('build/styles'))
    .pipe(minifyCSS())
    .pipe(rename('styles.min.css'))
    .pipe(gulp.dest('dist/'));
});
 
gulp.task('typescript', function(){
  return gulp.src('src/*.ts')
    .pipe(typescript())
    .pipe(gulp.dest('build/js/'))
    .pipe(concat("scripts.js"))
    .pipe(gulp.dest('build/js/'))
    .pipe(rename('scripts.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('dist/'));
});

gulp.task('default', ['typescript','styles']);

gulp.task('watch', function() {
    gulp.watch('styles/*.less', ['styles']);
    gulp.watch('src/*.ts', ['typescript']);
});


