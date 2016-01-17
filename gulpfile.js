var gulp = require('gulp'),
    concat = require('gulp-concat'),
    rename = require("gulp-rename"),
    minifyCSS = require('gulp-minify-css'),
    less = require('gulp-less'),
    notify = require("gulp-notify"),
    autoprefixer = require('gulp-autoprefixer'),
    bower = require('gulp-bower'),
    sourcemaps = require('gulp-sourcemaps');



/*compelater less*/
gulp.task('less', function(){
	gulp.src(['./less/*.less'])
	.pipe(less())
    .pipe(autoprefixer('last 60 versions'))
    .pipe(gulp.dest('./app/components/normalize-css/'))
});

/*Работа с css*/
gulp.task('css',function(){
     gulp.src(['./app/components/normalize-css/*.css'])
        .pipe(concat('style.css'))
        .pipe(gulp.dest('./css/'));
});

gulp.task('minicss', function(){
     gulp.src(['./css/*.css'])
        .pipe(rename('style.mini.css'))
        .pipe(minifyCSS('style.mini.css'))
        .pipe(gulp.dest('./css/'))
        .pipe(notify("ОК!"));
});


/*работа с html*/
gulp.task('html',function(){
});

/*Отслеживания файлов*/
gulp.task('watch',function(){
    gulp.watch('./less/*.less',['less'])
    gulp.watch('./app/components/normalize-css/*.css',['css'])
    gulp.watch('./css/*.css',['css'])
    gulp.watch('./*.html',['html'])
    
});



gulp.task('bower', function() {
  return bower(['./app/jquery/dist/jquery.min.js'])
    .pipe(rename(['./app/jquery/dist/jquery.min2.js']))
    .pipe(gulp.dest('libew/'))
});


/*Запуск стилей */
gulp.task('default',['less','css','minicss', 'html', 'watch']);