let sass = require('gulp-sass');
let gulp = require('gulp');

gulp.task('sass', () => {
    return gulp.src('scss/**/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('css/'));
})

gulp.task('watch', ()=> {
    gulp.watch('scss/**/*.scss',gulp.series('sass'));
})