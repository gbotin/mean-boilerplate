import gulp from 'gulp';
import del from 'del';
import browserify from 'browserify';
import babelify from 'babelify';
import babel from 'gulp-babel';
import watch from 'gulp-watch';
import rename from 'gulp-rename';
import nodemon from 'gulp-nodemon';
import imagemin from 'gulp-imagemin';
import source from 'vinyl-source-stream';
import buffer from 'vinyl-buffer';
import size from 'gulp-size';
import uglify from 'gulp-uglify';
import htmlmin from 'gulp-htmlmin';
import sourcemaps from 'gulp-sourcemaps';
import livereload from 'gulp-livereload';
import sass from 'gulp-sass';
import bower from 'main-bower-files';

gulp.task("clean", () => {
  del("dist/**");
});

gulp.task("server", () => {
  gulp.src("server/bin/www")
    .pipe(gulp.dest("dist/server/bin"));

  gulp.src("server/**/*.js")
    .pipe(babel())
    .pipe(gulp.dest("dist/server"));
});

gulp.task("scripts", () => {
  browserify("client/src/app.js", { debug: true })
    .transform(babelify)
    .bundle()
    .pipe(source('app.js'))
    .pipe(buffer())
    .pipe(rename({suffix: '.min'}))
    .pipe(sourcemaps.init())
      .pipe(uglify())
    .pipe(sourcemaps.write('../maps'))
    .pipe(gulp.dest("dist/client/js"));
});

gulp.task("sass", () => {
  gulp.src("client/assets/style/**/*.{sass,scss}")
    .pipe(rename({suffix: '.min'}))
    .pipe(sourcemaps.init())
      .pipe(sass({outputStyle: 'compressed'}))
    .pipe(sourcemaps.write('../maps'))
    .pipe(gulp.dest("dist/client/css"));
});

gulp.task("images", () => {
  gulp.src("client/assets/**/*.{jpg,jpeg,png,gif}")
    .pipe(imagemin())
    .pipe(gulp.dest('dist/client/images'));
});

gulp.task("fonts", () => {
  gulp.src([
    "bower_components/font-awesome/fonts/fontawesome-webfont.*",
    "client/assets/fonts/**/*"])
    .pipe(gulp.dest('dist/client/fonts/'));
});

gulp.task("html", () => {
  gulp.src("client/**/*.html")
    .pipe(htmlmin())
    .pipe(gulp.dest('dist/client'));
});

gulp.task("bower", () => {
  gulp.src(bower())
    .pipe(gulp.dest('dist/client/vendor'));
});

gulp.task("build", ["server", "scripts", "bower", "fonts", "html", "sass", "images"]);

gulp.task("watch", () => {
  livereload.listen();

  gulp.watch("client/src/**/*.js", ["scripts"]);
  gulp.watch("client/assets/**/*.sass", ["sass"]);
  gulp.watch("client/**/*.html", ["html"]);

  gulp.watch("dist/client/**/*", (file) => {
    livereload.changed(file.path);
  });
});

gulp.task("serve", () => {
  nodemon({
    script: 'dist/server/bin/www',
    watch: 'server',
    ext: 'js',
    tasks: ["server"],
    env: { 'NODE_ENV': 'development' }
  }).on('restart', () => {
    setTimeout(() => { livereload.reload('/') }, 1000);
  });
});

gulp.task("default", ["build", "serve", "watch"]);
