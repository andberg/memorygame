/*jslint browser:true */
/*global memory:false, $:false, alert: false, confirm: false, console: false, Debug: false, opera: false, prompt: false, WSH: false */

var audio, answer, playSound;
memoryGame.win = function() {
  'use strict';
  $('h1').text('Winner!');
  $('.bricks').css('background-image', 'url(images/sal.jpg)');
  audio = $('#win')[0];
  playSound = function() {
    audio.load();
    audio.play();
  };
  playSound();
  setTimeout(function() {
    answer = prompt('Would you like to play again?');
    if (answer === ('yes' || 'Yes')) {
      location.reload();
    } else {
      window.location =
        'http://31.media.tumblr.com/a24f9c3e32669500c669b23c2af75197/tumblr_mgj2rlUeQV1s16jdho1_400.gif';
    }
  }, 8000);
};
