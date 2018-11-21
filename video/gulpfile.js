var gulp       = require('gulp');
var babel = require("gulp-babel");
// var livereload = require('gulp-livereload'); // 网页自动刷新（服务器控制客户端同步刷新）
var proxyMiddleware = require('http-proxy-middleware');
var browserSync = require('browser-sync');

gulp.task('browserSync', function() {
    // 代理配置, 实现环境切换
    // var middleware = proxyMiddleware(['/access'], {target: "http://172.17.225.125:8080", changeOrigin: true});
    // var middleware = proxyMiddleware(['/api'], {target: "http://localhost:8888", changeOrigin: true});
    browserSync({
        server: {
            baseDir: './',
            // middleware: middleware,
            index: 'vipvideo.html'
        }
    });
});
// 默认任务
gulp.task('default',['browserSync']);