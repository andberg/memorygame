/*jslint browser:true */
/*global $: false, memory: false, alert: false, confirm: false, console: false, Debug: false, opera: false, prompt: false, WSH: false */

$(function() {
  'use strict';
  var card1,
    div2,
    card2,
    div1,
    countClick = 0,
    points = 0,
    canIclick = true,
    hideWrongAnswer = function(div1, div2) {
      setTimeout(function() {
        div1.css('background-image', 'url(images/monster.jpg)');
        div2.css('background-image', 'url(images/monster.jpg)');
        canIclick = true;
      }, 1500);
    };

  $('.result p').text('Points: ' + points);
  $('.frame div').click(function() {
    if (canIclick) {
      var i = Number(
        $(this)
          .attr('id')
          .replace('div', ''),
      );
      $(this).css('background-image', 'url(' + memoryGame.array[i].url + ')');
      if (countClick === 0) {
        countClick = countClick + 1;
        div1 = $(this);
        card1 = memoryGame.array[i].url;
        if (card1 === 'images/jack.jpg') {
          memoryGame.jack();
        }
      } else {
        div2 = $(this);
        if (div2.attr('id') !== div1.attr('id')) {
          card2 = memoryGame.array[i].url;
          if (card2 === 'images/jack.jpg') {
            memoryGame.jack();
          } else {
            if (card1 !== card2) {
              canIclick = false;
              hideWrongAnswer(div1, div2);
            } else {
              points = points + 1;
              if (points === 4) {
                memoryGame.win();
              }
              $('.result p').text('Points ' + points);
            }
            countClick = 0;
          }
        }
      }
    }
  });
});
