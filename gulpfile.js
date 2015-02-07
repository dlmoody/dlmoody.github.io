//this is the gulpfie that builds runs and reloads the project

var gulp = require('gulp');

var webserver = require('gulp-webserver');

gulp.task('webserver', function() {
  gulp.src('./')
      .pipe(webserver({
        livereload: true,
        fallback: 'index.html',
        directoryListing: true,
        open: 'http://localhost:8000/index.html'
      }));
});
