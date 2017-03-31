
// Modularizando el proyecto, cada modulo se crea en una carpeta diferente dentro del src
// Se deben incluir las librerias necesarias para utilizarlo.
var page = require("page");
var empty = require('empty-element');

// ya que tenemos nuestro template lo podemos requerir en nuestra logica de rutas
// no es necesario indicar la extension js.
var template = require("./template");
var title = require('title');

var pictures = [
	{
		user : 
		{
			username : "glopzvega",
			avatar : "https://pbs.twimg.com/profile_images/512313121340264448/nTTArrmo_400x400.jpeg"
		},
		url : 'office.jpg',
		likes : 547,
		liked : true
	},
	{
		user : 
		{
			username : "glopzvega",
			avatar : "https://pbs.twimg.com/profile_images/512313121340264448/nTTArrmo_400x400.jpeg"
		},
		url : 'office.jpg',
		likes : 758,
		liked : true
	}
]

page("/", function(ctx, f){  
  title('Platzigram');
  var main = document.getElementById("main-container");
  empty(main).appendChild(template(pictures));	
});
