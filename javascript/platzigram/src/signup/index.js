// Modularizando el proyecto, cada modulo se crea en una carpeta diferente dentro del src
// Se deben incluir las librerias necesarias para utilizarlo.
var page = require("page");
var empty = require('empty-element');

// ya que tenemos nuestro template lo podemos requerir en nuestra logica de rutas
// no es necesario indicar la extension js.
var template = require("./template");

page("/signup", function(ctx, f){  
  var main = document.getElementById("main-container");
  empty(main).appendChild(template);	
});
