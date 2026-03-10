const { src, dest, watch, series, parallel } = require('gulp');
const sass = require('gulp-sass')(require('sass'));

// Tarea 1: Compilar SASS a CSS
function compilarCSS() {
    return src('src/scss/**/*.scss') // Busca todos los archivos SASS [cite: 125]
        .pipe(sass().on('error', sass.logError)) // Compila y avisa si hay errores [cite: 124]
        .pipe(dest('dist/css')); // Guarda el resultado en dist/css [cite: 124, 126]
}

// Tarea 2: Mover JavaScript a dist
function moverJS() {
    return src('src/js/**/*.js')
        .pipe(dest('dist/js')); // Copia los archivos JS a la carpeta de distribución [cite: 141]
}

// Tarea 3: Mover HTML a dist
function moverHTML() {
    return src('src/*.html')
        .pipe(dest('dist')); // Mueve el index.html a la raíz de dist [cite: 141]
}

// Tarea 4: Watch Mode (Escuchar cambios)
function watchArchivos() {
    watch('src/scss/**/*.scss', compilarCSS); // Si cambias el CSS, recompila [cite: 125]
    watch('src/js/**/*.js', moverJS);         // Si cambias el JS, muévelo
    watch('src/*.html', moverHTML);           // Si cambias el HTML, muévelo
}

// Exportar tareas para que se puedan ejecutar [cite: 124]
exports.default = series(
    parallel(compilarCSS, moverJS, moverHTML), 
    watchArchivos
);
