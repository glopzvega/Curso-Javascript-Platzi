// Framework de lado del servidor rutas, etc...
var express = require("express");

var app = express();

// Definiendo una ruta
app.get("/", function(req, res){
	res.send("Hola Mundo");
});

app.listen(3000, function(err){
	if(err != null) 
		return console.log("Hubo un error"), process.exit(1);
	console.log("Platzigram escucando en el puerto 3000");
});