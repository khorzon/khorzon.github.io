let gulp = require('gulp');
let sass = require('gulp-sass');
let browserSync = require('browser-sync').create();

gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: 'app'
    },
  })
})


gulp.task('sass', () => {
  return gulp.src('app/scss/**/*.scss')
  .pipe(sass())
  .pipe(gulp.dest('app/css'))
  .pipe(browserSync.reload({
    stream: true
  }))
  });



  
  gulp.task('watch', () => {
  gulp.watch(`app/scss/**/*.scss`, gulp.series(`sass`));
  });
  