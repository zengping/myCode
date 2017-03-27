var gulp       = require('gulp');
var babel = require("gulp-babel");
var livereload = require('gulp-livereload'); // 网页自动刷新（服务器控制客户端同步刷新）
var proxyMiddleware = require('http-proxy-middleware');
var browserSync = require('browser-sync');

// 注册任务
gulp.task('reload1',['babel1'], browserSync.reload);
gulp.task("babel1", function () {
  return gulp.src(["analysis/scripts_map/app/analysis/**/*.js"])// ES6 源码存放的路径
    .pipe(babel()) 
    .pipe(gulp.dest("analysis/scripts/app/analysis/")); //转换成 ES5 存放的路径
});
gulp.task('browserSync1', function() {
    // 代理配置, 实现环境切换
    var middleware = proxyMiddleware(['/analysis'], {target: "http://172.17.225.146:8080", changeOrigin: true});
    browserSync({
        server: {
            baseDir: './analysis',
            // middleware: middleware,
            index: 'index.html'
        },
        port: 3002
    });

    gulp.watch('analysis/scripts_map/**/*.js',['reload1']);
    gulp.watch('analysis/scripts/lib/**/*.js',['reload1']);
    gulp.watch('analysis/scripts/plugins/**/*.js',['reload1']);
    gulp.watch('analysis/scripts/app/app.js',['reload1']);
    gulp.watch('analysis/scripts/app/appApi.js',['reload1']);
    gulp.watch('analysis/scripts/app/appController.js',['reload1']);
    gulp.watch('analysis/scripts/app/appData.js',['reload1']);
    gulp.watch('analysis/**/*.html',['reload1']);
    gulp.watch('analysis/**/*.css',['reload1']);
    gulp.watch('analysis/**/*.json',['reload1']);
});


// 注册任务
gulp.task('reload',['babel'], browserSync.reload);
gulp.task("babel", function () {
  return gulp.src(["access/scripts_map/app/collection/**/*.js"])// ES6 源码存放的路径
    .pipe(babel()) 
    .pipe(gulp.dest("access/scripts/app/collection/")); //转换成 ES5 存放的路径
});
gulp.task('browserSync', function() {
    // 代理配置, 实现环境切换
    var middleware = proxyMiddleware(['/access'], {target: "http://172.28.3.3:8080", changeOrigin: true});
    browserSync({
        server: {
            baseDir: './access',
            middleware: middleware,
            index: 'index.html'
        }
    });

    gulp.watch('access/scripts_map/**/*.js',['reload']);
    gulp.watch('access/scripts/lib/**/*.js',['reload']);
    gulp.watch('access/scripts/plugins/**/*.js',['reload']);
    gulp.watch('access/scripts/app/app.js',['reload']);
    gulp.watch('access/scripts/app/appApi.js',['reload']);
    gulp.watch('access/scripts/app/appController.js',['reload']);
    gulp.watch('access/scripts/app/appData.js',['reload']);
    gulp.watch('access/**/*.html',['reload']);
    gulp.watch('access/**/*.css',['reload']);
    gulp.watch('access/**/*.json',['reload']);
});
// 默认任务
gulp.task('default',['babel', 'browserSync']);
gulp.task('analysis',['babel1', 'browserSync1']);

