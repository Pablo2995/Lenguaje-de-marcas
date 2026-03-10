
const { src, dest, watch, series } = require('gulp');
const sass = require('gulp-sass')(require('sass'));

function compilarCSS() {
    return src('src/scss/style.scss') 
        .pipe(sass().on('error', sass.logError)) 
        .pipe(dest('dist/css')); 
}

function dev() {
    watch('src/**/*.scss', compilarCSS);
}

exports.compilarCSS = compilarCSS;
exports.default = series(compilarCSS, dev);