// Gulp is a task runner that allows you to automate various tasks ie. Sass complilation
const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));

// Compiles Sass file into CSS
function compileSass() {
    return gulp.src('./styles.sass')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./')); // output to root directory
}

// Watches for changes in Sass files and triggers 'compileSass'
function watchFiles() {
    gulp.watch('./styles.sass', compileSass);
}

// Register 'compileSass' and 'watchFiles' tasks
gulp.task('compileSass', compileSass);
gulp.task('watchFiles', watchFiles);

// Define 'default' task that runs 'compileSass' and 'watchFiles' in series
gulp.task('default', gulp.series('compileSass', 'watchFiles'));
