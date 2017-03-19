var gulp       = require('gulp');
var babel = require("gulp-babel");
var livereload = require('gulp-livereload'); // 网页自动刷新（服务器控制客户端同步刷新）
var proxyMiddleware = require('http-proxy-middleware');
var browserSync = require('browser-sync');

// 注册任务
// gulp.task('watch',function(){
//   gulp.watch('analysis/scripts/app_bak/**/*.js',['reload']);
//   gulp.watch('analysis/**/*.html',['reload']);
//   gulp.watch('analysis/**/*.css',['reload']);
// });
// gulp.task('reload',['babel'], function(){
//   gulp.src('')
//   .pipe(livereload());
// });
// gulp.task("babel", function () {
//   return gulp.src(["analysis/scripts/app_bak/**/*.js"])// ES6 源码存放的路径
//     .pipe(babel()) 
//     .pipe(gulp.dest("analysis/scripts/app/")); //转换成 ES5 存放的路径
// });
// gulp.task('browserSync', function() {
//     // 代理配置, 实现环境切换
//     var middleware = proxyMiddleware(['/analysis'], {target: "http://172.28.3.3:8080", changeOrigin: true});
//     browserSync({
//         server: {
//             baseDir: './analysis',
//             index: 'index.html',
//             middleware: middleware
//         }
//     });
// });


// 注册任务
gulp.task('watch',function(){
  gulp.watch('access/scripts/app_bak/**/*.js',['reload']);
  gulp.watch('access/**/*.html',['reload']);
  gulp.watch('access/**/*.css',['reload']);
});
gulp.task('reload',['babel'], function(){
  gulp.src('')
  .pipe(livereload());
});
gulp.task("babel", function () {
  return gulp.src(["access/scripts/app_bak/**/*.js"])// ES6 源码存放的路径
    .pipe(babel()) 
    .pipe(gulp.dest("access/scripts/app/")); //转换成 ES5 存放的路径
});
gulp.task('browserSync', function() {
    // 代理配置, 实现环境切换
    var middleware = proxyMiddleware(['/access'], {target: "http://172.28.3.3:8080", changeOrigin: true});
    browserSync({
        server: {
            baseDir: './access',
            index: 'index.html',
            middleware: middleware
        }
    });
});
// 默认任务
gulp.task('default',['babel', 'browserSync', 'watch']);