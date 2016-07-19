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
    ngRouteSRC = "node_modules/angular-route/angular-route.min.js",
    jQuerySRC = "node_modules/jquery-custom/jquery.2/dist/jquery.min.js",
    ngDEST = "src/main/resources/static/vendor/",
    jsSRC = "src/main/resources/js/",
    jsDEST = "src/main/resources/static/js",
    jsES6SRC = "src/main/resources/jsES6/**"
    cssSRC = "src/main/resources/css/**",
    cssDEST = "src/main/resources/static/css";

gulp.task("default", ["transfromFromES6", "compressJS", "copyCssFiles"]);

gulp.task('copyJSLibs', function () {
    log('Copying js files (vendor) ');
    gulp.src([ngSRC, ngRouteSRC, jQuerySRC])
        .pipe(gulp.dest(ngDEST));
});

gulp.task('copyCssFiles', function () {
    log('copy css-files to folder static');
    gulp.src(cssSRC)
        .pipe(gulp.dest(cssDEST));
});

gulp.task('compressJS', function () {
    log('Compessing JavaSript files');
    gulp.src([jsSRC + "**/*module.js", jsSRC + "**/*.js"])
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

gulp.task('transfromFromES6', () => {
    return gulp.src(jsES6SRC)
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(gulp.dest(jsSRC));
});









