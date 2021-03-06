var yo = require("yo-yo");

module.exports = function picture_card(pic) {
  
  var el;

  var render = function(picture){
      return yo`<div class="card ${picture.liked ? 'liked' : ''}">
          <div class="card-image">
            <img class="activator" src="${picture.url}">
          </div>
          <div class="card-content">
            <a href="/user/${picture.user.username}" class="card-title">
              <img src="${picture.user.avatar}" class="avatar" />
              <span class="username">${picture.user.username}</span>
            </a>
            <small class="right time">Hace 1 día</small>
            <p>
              <a class="left" href="#" onclick=${like.bind(null, true)}><i class="fa fa-heart-o" aria-hidden="true"></i></a>
              <a class="left" href="#" onclick=${like.bind(null, false)}><i class="fa fa-heart" aria-hidden="true"></i></a>
              <span class="left likes">${picture.likes} me gusta</span>
            </p>
          </div>    
        </div>`;
      }

      function like(liked)
      {
        pic.liked = liked;
        pic.likes += liked ? 1 : -1;
        var newEl = render(pic);
        yo.update(el, newEl);
        return false;
      } 

      // function dislike()
      // {
      //   pic.liked = false;
      //   pic.likes--;
      //   var newEl = render(pic);
      //   yo.update(el, newEl);
      //   return false;
      // } 

      el = render(pic);
      return el;
}
         