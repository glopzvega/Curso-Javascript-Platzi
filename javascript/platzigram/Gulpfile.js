// Gulp es un automatizador de tareas, se ejecuta antes de correr tu server
// para tener todo listo, ej. transformar tu archivo sass en el css que utilizaras
// o mover los archivos necesarios a la carpeta publica ej. materialize.js
var gulp = require('gulp'); // automatizador de tareas
var sass = require('gulp-sass'); // compilar estilos con sass
var rename = require('gulp-rename'); // Cambiar nombre archivo
var babel = require('babelify') //  utilizar ecma2015
var browserify = require('browserify') // lets you require('modules') 
var source = require('vinyl-source-stream') // convert from babel to use in gulp
var watchify = require("watchify") // Permite observar cambios en un archivo(s)

// Esta tarea compila un archivo .scss a un archivo css llamado app.css y lo mete en la carpeta public
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

// mueve todos los archivos dentro de nuestra carpeta assets a la carpeta public
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

// Lo que se ejecutaba con la tarea scripts la vamos a ejecutar ahora con esta funcion
function compile(watch)
{
	// obtiene una instancia watchify de el archivo por medio de browserify
	// sirve para posteriormente ligarlo al evento update para observar los
	// cambios al archivo y hacer algo.
	var bundle = watchify(browserify('./src/index.js'));


	// Esta funcion toma nuestros scripts en el archivo src/index.js 
	// lo procesa con babel 
	// posteriormente lo renombra con app.js y lo mete al directorio public
	function rebundle() {
		bundle
			.transform(babel, {presets: ["es2015"]})
		    .bundle()
		    .pipe(source('index.js'))
		    .pipe(rename('app.js'))
		    .pipe(gulp.dest('public'));
	}

	// en caso de llamar la funcion compile con el parametro watch = true se va a quedar activo el 
	// siguiente evento update con el cual se manda a llamar la funcion rebundle con la que se actualizan
	// los scripts
	if(watch)
	{
		bundle.on('update', function()
		{
			console.log('--> Bundling...');
			rebundle();
		})
	}

	// Si no esta definida watch = true cuando se llama la funcion compile, la funcion rebundle se ejecuta solo una vez 
	rebundle();
}

// se define la tarea build la cual manda a llamar la funcion compile sin enviar parametros
gulp.task('build', function(){
	return compile();
})

// se define la funcion watch la cual manda a llamar la funcion compile enviando 1 parametro
gulp.task('watch', function(){
	return compile(1);
})

// Aqui se le dice que tareas se ejecutan cuando mandas a llamar el comando 
// gulp desde consola
// previamente debe de instalarse gulp de manera global
// sudo npm i --save gulp
// la tarea default se ejecuta solo escribiendo gulp, las otras tareas deben llamarse "gulp task"
// en este caso la tarea default ejecuta a su vez la tarea "styles", "assets" y "build"
gulp.task('default', ['styles', 'assets', 'build'])