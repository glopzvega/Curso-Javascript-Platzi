// Gulp es un automatizador de tareas, se ejecuta antes de correr tu server
// para tener todo listo, ej. transformar tu archivo sass en el css que utilizaras
// o mover los archivos necesarios a la carpeta publica ej. materialize.js
var gulp = require('gulp');
var sass = require('gulp-sass');
var rename = require('gulp-rename');
var babel = require('babelify')
var browserify = require('browserify')
var source = require('vinyl-source-stream')
var watchify = require("watchify")

gulp.task('styles', function () {
  gulp
    .src('index.scss')
    .pipe(sass())
    .pipe(rename('app.css'))
    .pipe(gulp.dest('public'));
})

// gulp.task('scripts', function () {
//   gulp
//     .src('node_modules/materialize-css/dist/js/materialize.min.js')    
//     .pipe(gulp.dest('public'));
// })

gulp.task('assets', function(){
	gulp
		.src('assets/*')
		.pipe(gulp.dest("public"))
})

// Con Watchify vamos a observar los cambios en los archivos.
// gulp.task('scripts', function () {
//   browserify('./src/index.js')
//     .transform(babel, {presets: ["es2015"]})
//     .bundle()
//     .pipe(source('index.js'))
//     .pipe(rename('app.js'))
//     .pipe(gulp.dest('public'));
// });

// Lo que se ejecutaba con la tarea scripsts la vamos a ejecutar ahora con esta funcion
function compile(watch)
{
	var bundle = watchify(browserify('./src/index.js'));

	function rebundle() {
		bundle
			.transform(babel, {presets: ["es2015"]})
		    .bundle()
		    .pipe(source('index.js'))
		    .pipe(rename('app.js'))
		    .pipe(gulp.dest('public'));
	}

	if(watch)
	{
		bundle.on('update', function()
		{
			console.log('--> Bundling...');
			rebundle();
		})
	}

	// Si no esta definida watch se ejecuta solo una vez 
	rebundle();

}

gulp.task('build', function(){
	return compile();
})

gulp.task('watch', function(){
	return compile(1);
})
// Aqui se le dice que tareas se ejecutan cuando mandas a llamar el comando 
// gulp desde consola
// previamente debe de instalarse gulp de manera global
// sudo npm i --save gulp
gulp.task('default', ['styles', 'assets', 'build'])