const gulp = require('gulp');
const deploy = require('gulp-gh-pages');
const exec = require('child_process').exec;
const rimraf = require('rimraf');

gulp.task('clean', (cb) => {
  rimraf('./public', cb);
});

gulp.task('build', gulp.series('clean', (cb) => {
  exec('hugo', function (err, stdout, stderr) {
    console.log('\n-------- Hugo output--------\n');
    console.log(stdout);
    console.log('----------------------------\n');

    cb(err);
  });
}));

gulp.task('deploy', gulp.series('build', () => {
  return gulp.src("./public/**/*")
    .pipe(deploy({
      remoteUrl: "https://github.com/PSonneveld/resume.git",
      branch: "master"
    }))
}));
