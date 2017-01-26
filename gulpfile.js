const source = require('vinyl-source-stream')
const browserify = require('browserify')
const gulp = require('gulp');
const babel = require('gulp-babel');
const del = require('del')
const livereload = require('gulp-livereload');
 
gulp.task('babelify', () => {
    return gulp.src('src/views/**/*.js')
        .pipe(babel({
            presets: ['es2015', 'react']
        }))
        .pipe(gulp.dest('src/static/temp/'))
});

gulp.task('browserify',['babelify'], function(){
	return browserify('./src/static/temp/index.js')
			.bundle()
			.pipe(source('app.js'))
			.pipe(gulp.dest('./src/static/js/'))
      .pipe(livereload({
      }));
});

gulp.task('del', function () {
  return del(['./src/static/temp']);
});

gulp.task('build', ['browserify'], function(){
  gulp.start('del')
})

gulp.task('watch', function() {      
  gulp.watch('./src/views/**/*.js', function() {    
    gulp.start('build')
  });
});

gulp.task('default', ['build'], function(){  
  gulp.start('watch')
  livereload.listen();
});
