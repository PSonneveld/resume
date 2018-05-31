var gulp   = require('gulp');
var deploy = require('gulp-gh-pages');

gulp.task('deploy', function () {
  return gulp.src("./docs/**/*")
    .pipe(deploy({
      remoteUrl: "https://github.com/PSonneveld/resume.git",
      branch: "master"
    }))
});
