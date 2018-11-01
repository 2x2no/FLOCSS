var gulp = require("gulp");
var sass = require("gulp-sass");
var sourcemaps = require("gulp-sourcemaps");
var autoprefixer = require("gulp-autoprefixer");

gulp.task("sass", function() {
  gulp
    .src("sass/**/*scss")
    .pipe(sourcemaps.init())
    .pipe(sass().on("error", sass.logError))
    .pipe(sourcemaps.write({ includeContent: false }))
    .pipe(sourcemaps.init({ loadMaps: true }))
    .pipe(autoprefixer(["last 2 versions", "ie >= 11"]))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest("css/"));
});

gulp.task("watch", function() {
  gulp.watch("sass/**/*scss", ["sass"]);
});

gulp.task("default", ["watch"]);
