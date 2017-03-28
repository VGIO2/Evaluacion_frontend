var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
//var rename = require('gulp-rename');
var notify = require('gulp-notify');
var jshint = require('gulp-jshint');
var sass = require('gulp-sass');
var minifyCSS = require('gulp-minify-css');


gulp.task('script', function(/*cb*/){
// tarea script
   return gulp.src('./node_modules/bootstrap/dist/js/bootstrap.js').pipe(gulp.dest('./src/js'));
});

gulp.task('jquery', function(/*cb*/){
// tarea script
   return gulp.src('./node_modules/jquery/dist/jquery.min.js').pipe(gulp.dest('./src/js'));
});

gulp.task('style', function() {
// tarea style
   return gulp.src('./node_modules/bootstrap/dist/css/bootstrap.css').pipe(gulp.dest('./src/css'));
});

gulp.task('images', function() {
// tarea images
});

gulp.task('sweetalertcss', function(){
// tarea sweetalert css
   return gulp.src('./node_modules/sweetalert/dist/sweetalert.css').pipe(gulp.dest('./src/css'));
});

gulp.task('sweetalertjs', function(){
// tarea sweetalert js
   return gulp.src('./node_modules/sweetalert/dist/sweetalert.min.js').pipe(gulp.dest('./src/js'));
});

gulp.task('default', ['images', 'style', 'script', 'jquery', 'sweetalertcss', 'sweetalertjs']);