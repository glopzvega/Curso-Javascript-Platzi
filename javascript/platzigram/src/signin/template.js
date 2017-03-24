// Separamos la vista yo-yo de la logica de la ruta
var yo = require('yo-yo');
var landing = require("../landing") // toma la funcion devuelta por ese archivo
// para poder incluir esta vista en otro archivo debe de usarse module.exports
// la cual es una variable disponible en javascript la cual nos devuelve un elemento.
// del DOM.

var signinForm = yo`<div class="col s12 m7">
              <div class="row">
                <div class="signup-box">
                  <h1 class="platzigram">Platzigram</h1>
                  <form class="signup-form">                    
                    <div class="section">
                      <a class="btn btn-fb hide-on-small-only">Iniciar sesión con Facebook</a>
                      <a class="btn btn-fb hide-on-med-and-up"><i class="fa fa-facebook-official"></i> Iniciar sesión</a>
                    </div>
                    <div class="divider"></div>
                    <div class="section">
                      <input type="text" name="username" placeholder="Nombre de usuario"/>
                      <input type="password" name="password" placeholder="Contraseña"/>
                      <button class="btn waves-effect waves-light btn-signup" type="submit">Inicia Sesión</button>
                    </div>
                  </form>
                </div>
              </div>
              <div class="row">
                <div class="login-box">
                  ¿No tienes una cuenta? <a href="/signup">Registrate</a>
                </div>
              </div>
            </div>`;

// El template debe devolver una vista la cual logramos construir al incluir 
// landing como funcion y llamarla dentro de nuestra vista pero mandando el 
// box que la va a complementar. (Formulario);
module.exports = landing(signinForm);