var gulp       = require('gulp');
var livereload = require('gulp-livereload'), // 网页自动刷新（服务器控制客户端同步刷新）
  webserver = require('gulp-webserver'); // 本地服务器
var babel = require("gulp-babel");
var proxy = require('http-proxy-middleware');
var connect = require('gulp-connect');

// 注册任务
// gulp.task('webserver', function() {
//   gulp.src( 'analysis/' ) // 服务器目录（./代表根目录）
//   .pipe(webserver({ // 运行gulp-webserver
//     livereload: true, // 启用LiveReload
//     open: true // 服务器启动时自动打开网页
//   }));
// });
// // 监听任务
// gulp.task('watch',function(){
//   //gulp.watch( '*.html', ['html']) // 监听根目录下所有.html文件
//   gulp.watch('analysis/scripts_bak/app/**/*.js',['reload']);
//   gulp.watch('analysis/**/*.html',['reload']);
//   gulp.watch('analysis/**/*.css',['reload']);
// });
// gulp.task('reload',['babel'], function(){
//   gulp.src('')
//   .pipe(livereload());
// });
// gulp.task("babel", function () {
//   return gulp.src(["analysis/scripts_bak/app/**/*.js"])// ES6 源码存放的路径
//     .pipe(babel()) 
//     .pipe(gulp.dest("analysis/scripts/app/")); //转换成 ES5 存放的路径
// });
// gulp.task("babel1", function () {
//   return gulp.src(["access/scripts/lib/libs.js"])// ES6 源码存放的路径
//     .pipe(babel()) 
//     .pipe(gulp.dest("dist")); //转换成 ES5 存放的路径
// });


// 注册任务
gulp.task('webserver', function() {
  gulp.src( 'access/' ) // 服务器目录（./代表根目录）
  .pipe(webserver({ // 运行gulp-webserver
    livereload: true, // 启用LiveReload
    open: true // 服务器启动时自动打开网页
  }));
});
gulp.task('watch',function(){
  gulp.watch('access/scripts_bak/app/**/*.js',['reload']);
  gulp.watch('access/**/*.html',['reload']);
  gulp.watch('access/**/*.css',['reload']);
});
gulp.task('reload',['babel'], function(){
  gulp.src('')
  .pipe(livereload());
});
gulp.task("babel", function () {
  return gulp.src(["access/scripts_bak/app/**/*.js"])// ES6 源码存放的路径
    .pipe(babel()) 
    .pipe(gulp.dest("access/scripts/app/")); //转换成 ES5 存放的路径
});


gulp.task('server', function() {
    connect.server({
        root: ['access'],
        port: 8000,
        livereload: true,
        middleware: function(connect, opt) {
            return [
                proxy('/access', {
                    target:'http://172.28.3.3:8080/',
                    changeOrigin:true
                })
            ]
        }
    });
});
// 默认任务
gulp.task('default',['babel', 'webserver', 'watch']);