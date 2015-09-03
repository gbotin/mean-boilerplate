import gulp from 'gulp';
import babel from 'gulp-babel';
import watch from 'gulp-watch';
import nodemon from 'gulp-nodemon';
import livereload from 'gulp-livereload';
import sass from 'gulp-sass';

gulp.task("build", () => {
  gulp.src("./server/bin/www")
    .pipe(gulp.dest("dist/server/bin"));

  gulp.src("./server/**/*.js")
    .pipe(babel())
    .pipe(gulp.dest("dist/server"));
});

gulp.task("html", () => {
  gulp.src("./client/**/*.html")
    .pipe(gulp.dest('./dist/client'));
});

gulp.task("sass", () => {
  gulp.src("./client/style/**/*.sass")
    .pipe(sass())
    .pipe(gulp.dest("dist/client/css"));
});

gulp.task("watch", () => {
  livereload.listen();

  // gulp.watch("./dist/server/**/*.js", ["build"]);

});

gulp.task("serve", () => {
  nodemon({
    script: './dist/server/bin/www',
    watch: './server',
    ext: 'js',
    tasks: ["build"],
    env: { 'NODE_ENV': 'development' }
  }).on('restart', () => {
    setTimeout(() => { livereload.reload() }, 1000);
  });
});

gulp.task("default", ["build", "sass", "html", "serve", "watch"]);
