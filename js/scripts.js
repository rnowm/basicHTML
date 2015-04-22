'use strict';

// Navigation
var currentURL = window.location.pathname;
var currentPage = currentURL.split('/').pop().slice(0, -5);
currentPage = parseInt(currentPage);



// Avoid loosing focus on tab in contenteditable box
// Move slides with keyboard
document.onkeydown = function(e) {
  //console.log(e.keyCode);
  //console.log(e.target.nodeName);
  if (e.keyCode === 9){
    e.preventDefault();
  }
  if (e.target.nodeName != 'STYLE') {
    if (e.keyCode === 39) {
      e.preventDefault();
      if (currentPage < 10) {
        window.location.replace((currentPage + 1) + '.html');
      }
    }
    if(e.keyCode === 37){
      e.preventDefault();
      if (currentPage > 1) {
        window.location.replace((currentPage - 1) + '.html');
      }
    }
  }
}
