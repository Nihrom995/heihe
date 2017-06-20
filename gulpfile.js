/**
 * Created by Nihrom on 20.06.2017.
 */
const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const pug = require('gulp-pug');


// Static server
gulp.task('server', function() {
    browserSync.init({
        server: {
            port: 8000,
            baseDir: "build"
        }
    });

    gulp.watch('build/**/*').on('change', browserSync.reload);

});

gulp.task('templates:compile', function buildHTML() {
    return gulp.src('source/template/*.pug')
        .pipe(pug({
            // Your options in here.
            pretty:true
        }))
        .pipe(gulp.dest('build'));
});