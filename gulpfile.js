import gulp from 'gulp';
import gulpSass from 'gulp-sass';
import * as dartSass from 'sass';
import cleanCss from 'gulp-clean-css';
import terser from 'gulp-terser';
import sourcemaps from 'gulp-sourcemaps';

const sass = gulpSass(dartSass);

// Tarefa para compilar SCSS em CSS
function styles(){
    return gulp.src('src/styles/main.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({
            outputStyle: 'compressed'
        }).on('error', sass.logError))
        .pipe(cleanCss())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('./dist/styles'));
}

export function scripts() {
    return gulp.src('src/scripts/**/*.js')
        .pipe(sourcemaps.init())
        .pipe(terser())
        .pipe(sourcemaps.write('.')) // gera map junto
        .pipe(gulp.dest('./dist/scripts'));
}

// Tarefa para copiar imagens
function images(){
    return gulp.src('src/images/**/*', {nodir: true})// Seleciona todas as imagens
        .pipe(gulp.dest('./dist/images'));
}

//exporta a tarefa para ser executada via linha de comando
export default gulp.parallel(styles, scripts, images);

export function watch(){
    gulp.watch('src/styles/*.scss', gulp.parallel(styles, scripts));
}