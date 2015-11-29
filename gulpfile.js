var gulp = require('gulp');
var gulpSequence = require('gulp-sequence');//按顺序执行
var uglify = require('gulp-uglify');        //压缩JS
var sass = require('gulp-ruby-sass');       //编译sass/scss文件，，不会编译_开头的scss/sass文件
var minifyCss = require('gulp-minify-css'); //压缩CSS
var imagemin = require('gulp-imagemin');    //压缩图片
var htmlmin = require('gulp-htmlmin');      //压缩HTML
var del = require('del');                   //删除文件
var fs = require('fs');                     //文件操作
var walk = require('./walk')('./assets');
var paths = {
    js: walk.js,
    css: walk.css,
    image: walk.image,
    html: walk.html,
    other: walk.other,
    build: 'build'
};
gulp.task('clean', function (callback) {
    del(paths.build, callback);
});

gulp.task('js', function () {
    return gulp.src(paths.js)
        .pipe(uglify())
        .pipe(gulp.dest(function(file){
            var base = file.base,
                cwd = file.cwd;
            return paths.build + '/' + base.substring(cwd.length + 1);
        }));
});
gulp.task('css', function () {
    return sass(paths.css)
        .pipe(minifyCss())
        .pipe(gulp.dest(function(file){
            var base = file.base,
                cwd = file.cwd;
            if(base.indexOf(cwd) === -1){
                return paths.build + '/' + base; 
            }
            return paths.build + '/' + base.substring(cwd.length + 1);
        }));
});
gulp.task('image', function () {
    return gulp.src(paths.image)
        .pipe(imagemin())
        .pipe(gulp.dest(function(file){
            var base = file.base,
                cwd = file.cwd;
            return paths.build + '/' + base.substring(cwd.length + 1);
        }));
});
gulp.task('html', function () {
    return gulp.src(paths.html)
        .pipe(htmlmin())
        .pipe(gulp.dest(function(file){
            var base = file.base,
                cwd = file.cwd;
            return paths.build + '/' + base.substring(cwd.length + 1);
        }));
});
gulp.task('other', function () {
    return gulp.src(paths.other)
        .pipe(gulp.dest(function(file){
            var base = file.base,
                cwd = file.cwd;
            return paths.build + '/' + base.substring(cwd.length + 1);
        }));
});
gulp.task('watch', function() {
    gulp.watch(paths.js, ['js']);
    gulp.watch(paths.css, ['css']);
    gulp.watch(paths.image, ['image']);
    gulp.watch(paths.html, ['html']);
    gulp.watch(paths.other, ['other']);
});
gulp.task('default', ['js', 'css', 'image', 'html', 'other']);
// gulp.task('default', gulpSequence('clean', ['js', 'css', 'image', 'html']));
gulp.task('test1', function(callback){
    console.log(1);//执行了
    gulp.run('build');
});
gulp.task('test2',['clean'], function(callback){
    console.log(2);//没有执行
    gulp.run('build');
});