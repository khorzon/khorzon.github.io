let gulp = require('gulp');
let sass = require('gulp-sass');
let browserSync = require('browser-sync').create();







gulp.task('sass', () => {
return gulp.src('app/scss/**/*.scss')
.pipe(sass())
.pipe(gulp.dest('app/css'));
});
gulp.task('watch',['browserSync', 'sass'], () => {
gulp.watch(`app/scss/**/*.scss`, gulp.series(`sass`));
});



