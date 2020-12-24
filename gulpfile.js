var gulp = require('gulp');
var rename = require('gulp-rename');

gulp.task('css', function () {
  const postcss = require('gulp-postcss');

  return (
    gulp
      .src(['src/styles/tailwind.css'])
      // ...
      .pipe(
        postcss([
          // ...
          require('postcss-import'),
          require('postcss-nested'),
          require('tailwindcss'),
          require('autoprefixer'),
          // ...
        ])
      )
      // ...
      .pipe(rename('default.css'))

      .pipe(gulp.dest('src/styles/'))
  );
});

function watcher() {
  setTimeout(() => {
    gulp.watch(
      ['src/styles/tailwind.css', 'src/styles/components/*.css', 'src/styles/modules/*.css', 'src/styles/pages/*.css'],
      gulp.series('css')
    );
  }, 1500);
}

exports.watch = gulp.series('css', watcher);
exports.default = gulp.series('css');
