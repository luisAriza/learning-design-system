var gulp = require("gulp");
var sass = require("gulp-dart-sass");
var minifyCSS = require("gulp-minify-css");
var concat = require("gulp-concat");

//npm install gulp --save --only=dev
gulp.task("saludar", async () => {
  console.log("Hello World");
});

//npm install gulp-dart-sass -D
gulp.task("sass", async () => {
  return gulp
    .src("scss/**/*.scss")
    .pipe(sass()) // Converts Sass to CSS with gulp-dart-sass
    .pipe(gulp.dest("public/stylesheets"));
});

//npm install gulp-minify-css -D
//npm install gulp-concat -D
gulp.task("style_min", () => {
  return gulp
    .src("scss/**/*.scss")
    .pipe(sass())
    .pipe(minifyCSS())
    .pipe(concat("style_main.min.css"))
    .pipe(gulp.dest("public/stylesheets"));
});

gulp.task("watch", () => {
  gulp.watch("scss/**/*.scss", gulp.series("style_min"));
});
