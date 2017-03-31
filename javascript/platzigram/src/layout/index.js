// Separamos la vista yo-yo de la logica de la ruta
var yo = require('yo-yo');
// var landing = require("../landing") // toma la funcion devuelta por ese archivo
// para poder incluir esta vista en otro archivo debe de usarse module.exports
// la cual es una variable disponible en javascript la cual nos devuelve un elemento.
// del DOM.

module.exports = function(content)
{
  return yo`<div><nav class="header">
    <div class="nav-wrapper">
      <div class="container">
        <div class="row">
          <div class="col s12 m6 offset-m1">
            <a href="/" class="brand-logo platzigram">Platzigram</a>
          </div>
          <div class="col s2 m6 push-s10 push-m10">
            <a href="" class="btn btn-large btn-flat dropdown-button" data-activates="drop-user">
              <i class="fa fa-user"></i>
            </a>
            <ul id="drop-user" class="dropdown-content">
              <li><a href="#">Salir</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </nav>
  <div class="content">
    ${content}
  </div></div>`;
}