var gulp          = require('gulp'),
    sass          = require('gulp-ruby-sass'),
    autoprefixer  = require('gulp-autoprefixer'),
    minifycss     = require('gulp-minify-css'),
    jshint        = require('gulp-jshint'),
    uglify        = require('gulp-uglify'),
    imagemin      = require('gulp-imagemin'),
    rename        = require('gulp-rename'),
    concat        = require('gulp-concat'),
    notify        = require('gulp-notify'),
    cache         = require('gulp-cache'),
    livereload    = require('gulp-livereload'),
    sourcemaps    = require('gulp-sourcemaps'),
    del           = require('del');

// var config = {
//   sassPath: './resources/sass',
//   bowerDir: './public/libs'
// }

gulp.task('default', function() {
    gulp.start('styles', 'scripts');
});

gulp.task('clean', function(cb) {
    // del(['public/assets/css/', 'public/assets/js', 'public/assets/img'], cb)
});

gulp.task('styles', function() {
  return gulp.src('public/assets/css/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass({ style: 'expanded' }))
    .pipe(sourcemaps.write("./"))    
    
    .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1'))
    // Throw our production version
    .pipe(concat('style.css'))
    .pipe(gulp.dest('public/assets/css/'))
    .pipe(rename({suffix: '.min'}))
    .pipe(minifycss())
    .pipe(gulp.dest('public/assets/css/'))
    .pipe(notify({ message: 'Styles task complete' }));
});


gulp.task('scripts', function() {
  return gulp.src('public/assets/js/*.js')
    .pipe(concat('main.js'))
    .pipe(gulp.dest('public/assets/js'))
    .pipe(rename({suffix: '.min'}))
    .pipe(uglify())
    .pipe(gulp.dest('public/assets/js'))
    .pipe(notify({ message: 'Scripts task complete' }));
});

// gulp.task('watch', function() {
//   gulp.watch('')
// });