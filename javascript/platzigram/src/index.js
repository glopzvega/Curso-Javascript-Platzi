//Plugin para agregar navegacion a nuestra app
// npm i --save page
// Se deben definir las rutas en el server hacia este archivo.
// app.get(["/", "/signin", "/signup"], function(req, res){ ...
// 
var page = require('page');

var main = document.getElementById("main-container");

page("/", function(ctx, f){
	main.innerHTML = "Home";
})

page("/signup", function(ctx, f){
	main.innerHTML = "signup";
})

page();
// page.start();