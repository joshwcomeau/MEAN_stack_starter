var gulp        = require('gulp'),     
    sass        = require('gulp-ruby-sass') ,
    autoprefix  = require('gulp-autoprefixer') ,
    notify      = require("gulp-notify") ,
    bower       = require('gulp-bower');

var config = {
  sassPath: './resources/sass',
  bowerDir: './public/libs'
}

gulp.task('default', function() {
  // place code for your default task here
});