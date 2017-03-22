// Modularizando el proyecto, cada modulo se crea en una carpeta diferente dentro del src
// Se deben incluir las librerias necesarias para utilizarlo.
var page = require("page");
var empty = require('empty-element');

// Se crea la ruta para esta pagina posteriormente se incluyen en el index principal
page("/", function(ctx, f){
	var main = document.getElementById("main-container");
	empty(main).innerHTML = "<a href='/signup'>Signup</a>";
});