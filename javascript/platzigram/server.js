// npm init "para generar el package.json"
// 
// npm install --save express "Descarga e Incluye esta 
// libreria en nuestro proyecto"
//
// node server.js "Ejecutar Archivo JS con node"
// 
// Express - Generar Servidores Web 
// Framework de lado del servidor rutas, etc...
// 
// Gestores de paquetes, son repositorios de 
// librerias o modulos que se pueden descargar 
// para utilizarlos dentro de tu aplicacion
var express = require("express");

var app = express();

app.use(express.static("public"))

// Indica a la aplicacion Node que utilizara un motor de vistas en este caso "pug"
app.set("view engine", "pug");

// Definiendo una ruta
app.get("/", function(req, res){
	// Sin Jade / Pug
	// res.send("Hola Mundo");
	// Con Jade / Pug
	res.render("index")
});

app.listen(3000, function(err){
	if(err != null) 
		return console.log("Hubo un error"), process.exit(1);
	console.log("Platzigram escucando en el puerto 3000");
});