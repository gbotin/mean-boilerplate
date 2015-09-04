import gulp from 'gulp';
import babel from 'gulp-babel';
import watch from 'gulp-watch';
import concat from 'gulp-concat';
import rename from 'gulp-rename';
import nodemon from 'gulp-nodemon';
import uglify from 'gulp-uglify';
import sourcemaps from 'gulp-sourcemaps';
import livereload from 'gulp-livereload';
import sass from 'gulp-sass';

gulp.task("server", () => {
  gulp.src("./server/bin/www")
    .pipe(gulp.dest("dist/server/bin"));

  gulp.src("./server/**/*.js")
    .pipe(babel())
    .pipe(gulp.dest("./dist/server"));
});

gulp.task("scripts", () => {
  gulp.src("./client/src/**/*.js")
    .pipe(concat('app.js'))
    .pipe(rename({suffix: '.min'}))
    .pipe(sourcemaps.init())
      .pipe(babel())
      .pipe(uglify())
    .pipe(sourcemaps.write('../maps'))
    .pipe(gulp.dest("./dist/client/js"))
});

gulp.task("sass", () => {
  gulp.src("./client/style/**/*.{sass,scss}")
    .pipe(rename({suffix: '.min'}))
    .pipe(sourcemaps.init())
      .pipe(sass({outputStyle: 'compressed'}))
    .pipe(sourcemaps.write('../maps'))
    .pipe(gulp.dest("./dist/client/css"))
});

gulp.task("html", () => {
  gulp.src("./client/**/*.html")
    .pipe(gulp.dest('./dist/client'))
});

gulp.task("build", ["server", "scripts", "html", "sass"]);

gulp.task("watch", () => {
  livereload.listen();

  gulp.watch("./client/src/**/*.js", ["scripts"]);
  gulp.watch("./client/style/**/*.sass", ["sass"]);
  gulp.watch("./client/**/*.html", ["html"]);

  gulp.watch("./dist/client/**/*", (file) => {
    livereload.changed(file.path);
  });
});

gulp.task("serve", () => {
  nodemon({
    script: './dist/server/bin/www',
    watch: './server',
    ext: 'js',
    tasks: ["server"],
    env: { 'NODE_ENV': 'development' }
  }).on('restart', () => {
    setTimeout(() => { livereload.reload() }, 1000);
  });
});

gulp.task("default", ["build", "serve", "watch"]);
