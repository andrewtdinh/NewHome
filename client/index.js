'use strict';

$(document).ready(init);

function init(){
  // $('.card').hover(flipForth, flipBack);
  $('.flipper').hover(flipForth, flipBack);
}

function flipForth(){
  $(this).addClass('flipped');
}

function flipBack(){
  $(this).removeClass('flipped');
}
