'use strict';


var slides = document.querySelectorAll('.slide');

for (var i = 0; i < slides.length; i++) {
  var slide = slides[i];
  var nextBtn = slide.querySelector('.next');
  var prevBtn = slide.querySelector('.prev');
  if (nextBtn) {
    nextBtn.addEventListener('click', nextSlide.bind(null, i), false);
  }
  if (prevBtn) {
    prevBtn.addEventListener('click', prevSlide.bind(null, i), false);
  }
}

function nextSlide(i) {
  document.querySelectorAll('.slide')[i+1].classList.add('show');
}

function prevSlide(i) {
  document.querySelectorAll('.slide')[i].classList.remove('show');
}

// Avoid loosing focus on tab in contenteditable box
document.onkeydown = function(e) {
//document.querySelectorAll('.editable').onkeydown=function(e){
  console.log(e.keyCode);
  if(e.keyCode === 9){
    e.preventDefault();
  }
}