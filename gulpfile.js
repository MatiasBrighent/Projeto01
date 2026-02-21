import gulp from 'gulp';
import gulpSass from 'gulp-sass';
import * as dartSass from 'sass';
import cleanCss from 'gulp-clean-css';

const sass = gulpSass(dartSass);

// Tarefa para compilar SCSS em CSS
function styles(){
    return gulp.src('src/styles/*.scss') // Seleciona todos os arquivos SCSS
        .pipe(sass({
            outputStyle: 'compressed',
            sourceMap: false
        }).on('error', sass.logError))
        .pipe(cleanCss())
        .pipe(gulp.dest('./dist/css'));
}

// Tarefa para copiar imagens
function images(){
    return gulp.src('src/images/**/*', {nodir: true})// Seleciona todas as imagens
        .pipe(gulp.dest('./dist/images'));
}

//exporta a tarefa para ser executada via linha de comando
export default gulp.parallel(styles, images);

export function watch(){
    gulp.watch('src/styles/*.scss', gulp.parallel(styles));
}