// Gulp es un automatizador de tareas, se ejecuta antes de correr tu server
// para tener todo listo, ej. transformar tu archivo sass en el css que utilizaras
// o mover los archivos necesarios a la carpeta publica ej. materialize.js
var gulp = require('gulp');
var sass = require('gulp-sass');
var rename = require('gulp-rename');

gulp.task('styles', function () {
  gulp
    .src('index.scss')
    .pipe(sass())
    .pipe(rename('app.css'))
    .pipe(gulp.dest('public'));
})

gulp.task('scripts', function () {
  gulp
    .src('node_modules/materialize-css/dist/js/materialize.min.js')    
    .pipe(gulp.dest('public'));
})

// Aqui se le dice que tareas se ejecutan cuando mandas a llamar el comando 
// gulp desde consola
// previamente debe de instalarse gulp de manera global
// sudo npm i --save gulp
gulp.task('default', ['styles', 'scripts'])