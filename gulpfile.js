const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const cleanCss = require('gulp-clean-css');
const imagemin = require('gulp-imagemin');

// Tarefa para compilar SCSS em CSS

function styles(){
    return gulp.src('src/scss/**/*.scss') // Seleciona todos os arquivos SCSS
        .pipe(sass({outputStyle: 'compressed'}))
        .pipe(gulp.dest('./dist/css'));
}

//exporta a tarefa para ser executada via linha de comando

exports.default = gulp.parallel(styles);

exports.watch = function(){
    gulp.watch('src/scss/**/*.scss', gulp.parallel(styles));
}