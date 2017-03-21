//Plugin para agregar navegacion a nuestra app
// npm i --save page
// Se deben definir las rutas en el server hacia este archivo.
// app.get(["/", "/signin", "/signup"], function(req, res){ ...
 
var page = require('page');
var yo = require('yo-yo');

var main = document.getElementById("main-container");

page("/", function(ctx, f){
	main.innerHTML = "Home";
})

page("/signup", function(ctx, f){
	var main = document.getElementById("main-container");

	
})

page();
// tambien se puede ejecutar con:
// page.start();