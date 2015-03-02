var gulp = require('gulp'),
    typescript = require('gulp-tsc'),
    less = require('gulp-less'),
    rename = require('gulp-rename'),
    minifyCSS = require('gulp-minify-css'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    concatCss = require('gulp-concat-css'),
    notify = require('gulp-notify');
  
gulp.task('styles', function() {
  return gulp.src('styles/*.less')
    .pipe(less())
    .pipe(gulp.dest('build/styles'))
    .pipe(concatCss("bundle.css"))
    .pipe(gulp.dest('build/styles'))
    .pipe(minifyCSS())
    .pipe(rename('styles.min.css'))
    .pipe(gulp.dest('dist/'))
    .pipe(notify({ message: "Styles task complete." }))
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


