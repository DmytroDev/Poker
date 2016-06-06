var gulp = require("gulp"),//http://gulpjs.com/
    util = require("gulp-util"),//https://github.com/gulpjs/gulp-util
    sass = require("gulp-sass"),//https://www.npmjs.org/package/gulp-sass
    autoprefixer = require('gulp-autoprefixer'),//https://www.npmjs.org/package/gulp-autoprefixer
    minifycss = require('gulp-minify-css'),//https://www.npmjs.org/package/gulp-minify-css
    rename = require('gulp-rename'),//https://www.npmjs.org/package/gulp-rename
    babel = require('gulp-babel'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    log = util.log;

/* require = launch concrete js-plugin (f.e.: gulp-minify-css, gulp-rename, etc).
* */
var ngSRC = "node_modules/angular/angular.min.js",
    ngDEST = "src/main/resources/static/vendor/",
    jsSRC = "src/main/resources/js/",
    jsDEST = "src/main/resources/static/js";

gulp.task("default", ["compressJS"]);

gulp.task("copyAngularLib", function () {
    log("copyAngularLib (angular.min.js)");
    gulp.src(ngSRC)
        .pipe(gulp.dest(ngDEST))
});

gulp.task('compressJS', function () {
    log('Compessing JavaSript files');
    gulp.src([jsSRC + "**/module.js", jsSRC + "**/*.js"])
        .pipe(concat('all.js'))
        .pipe(gulp.dest(jsDEST))
        .pipe(rename('all.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest(jsDEST));
});

gulp.task("watch", function () {
    log("Watching js files for modifications");
    gulp.watch(jsSRC + "**/*.js", ["compressJS"]);
});

/*gulp.task('transform', () => {
 return gulp.src(jsSRC)
 .pipe(babel({
 presets: ['es2015']
 }))
 .pipe(gulp.dest(jsDEST));
 });*/
//gulp.task("default", ["sass"]);

/*gulp.task("sass", function () {
    log("Generating CSS files " + (new Date()).toString());
    gulp.src("src/main/resources/scss/all.scss")
        .pipe(sass({style: 'expanded'}))
        .pipe(autoprefixer("last 3 version", "safari 5", "ie 9"))
        .pipe(gulp.dest(cssTarget))
        .pipe(rename({suffix: '.min'}))
        .pipe(minifycss())
        .pipe(gulp.dest(cssTarget));
});*/








