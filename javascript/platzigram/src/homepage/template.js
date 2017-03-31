// Separamos la vista yo-yo de la logica de la ruta
var yo = require('yo-yo');
// var landing = require("../landing") // toma la funcion devuelta por ese archivo
// para poder incluir esta vista en otro archivo debe de usarse module.exports
// la cual es una variable disponible en javascript la cual nos devuelve un elemento.
// del DOM.
var layout = require("../layout");
var picture = require("../picture");

module.exports = function(pictures){
	var el = yo`<div class="container timeline">
	  <div class="row">
	    <div class="col s12 m10 offset-m1 l6 offset-l3">	      
	      ${pictures.map(function(pic){
			return picture(pic);
	      })}
	    </div>
	  </div>
	</div>`

	return layout(el);
}

// var content = yo`<div class="container timeline">
//   <div class="row">
//     <div class="col s12 m10 offset-m1 l6 offset-l3">
//       ${picture}
//     </div>
//   </div>
// </div>`;

// El template debe devolver una vista la cual logramos construir al incluir 
// landing como funcion y llamarla dentro de nuestra vista pero mandando el 
// box que la va a complementar. (Formulario);
// module.exports = layout(content);