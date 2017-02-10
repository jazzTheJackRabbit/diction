var gulp = require('gulp');
var browserify = require('browserify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');
const livereload = require('gulp-livereload');

gulp.task('build', function () {
  livereload.listen();  
    return browserify({entries: './src/views/index.js', extensions: ['.js'], debug: true})
        .transform(babelify.configure({
          presets : ["es2015", "react"]
        }))
        .bundle()
        .pipe(source('app.js'))
        .pipe(gulp.dest('./src/static/js/'))
        .pipe(livereload({}));
});

gulp.task('watch', ['build'], function () {
    gulp.watch('./src/views/**/*.js', ['build']);
});

gulp.task('default', ['watch']);