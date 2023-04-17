let preload = document.querySelector('.preload');
let body = document.querySelector('body');

let noPreload = function() {
  preload.style.display = 'none';
}

let scroll = function() {
  body.style.overflow = 'visible';
}

window.onload = function(){
  setTimeout(noPreload, 5000);
  setTimeout(scroll, 4000);
}
