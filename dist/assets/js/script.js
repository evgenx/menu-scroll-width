var positionHeight = 500;
var scrollPosition = 0;
window.onscroll = function() {
  var scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
  document.getElementById('showScroll').innerHTML = scrollPosition + ' px';
  if (scrollPosition > 0) {
    document.getElementById('nav').classList.add('menu-bg');
  }
  if (scrollPosition == 0) {
    document.getElementById('nav').classList.remove('menu-bg');
  }
  if (scrollPosition >= positionHeight) {
    document.getElementById('nav-wrapper').classList.add('menu-width');
  }
  if (scrollPosition < positionHeight) {
    document.getElementById('nav-wrapper').classList.remove('menu-width');
  }
}