var gulp = require("gulp"),//http://gulpjs.com/
    util = require("gulp-util"),//https://github.com/gulpjs/gulp-util
    //sass = require("gulp-sass"),//https://www.npmjs.org/package/gulp-sass
    //autoprefixer = require('gulp-autoprefixer'),//https://www.npmjs.org/package/gulp-autoprefixer
    minifycss = require('gulp-minify-css'),//https://www.npmjs.org/package/gulp-minify-css
    //rename = require('gulp-rename'),//https://www.npmjs.org/package/gulp-rename
    //babel = require('gulp-babel'), // added
    log = util.log;

/* require = launch concrete js-plugin (f.e.: gulp-minify-css, gulp-rename, etc).
* */
var jsSRC = "node_modules/angular/angular.min.js",  //"src/main/resources/js/main.js",
    jsDEST = "src/main/resources/static/";    //  "src/main/webapp/resources/js/";

gulp.task("default", ["copyResources"]);

gulp.task("copyResources", function () {
    log("copyResources (angular.min.js)");
    gulp.src(jsSRC)
        .pipe(gulp.dest(jsDEST))
});

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

/*gulp.task("watch", function () {
    log("Watching scss files for modifications");
    gulp.watch(sassFiles, ["sass"]);
});*/

/*gulp.task('transform', () => {
    return gulp.src(jsSRC)
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(gulp.dest(jsDEST));
});*/




