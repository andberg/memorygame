/*jslint browser:true */
/*global $:false, memory:false, alert: false, confirm: false, console: false, Debug: false, opera: false, prompt: false, WSH: false */

var i = 0,
    audio,
    playSound,
    canIclick,
    answer,
    jack, jackArray = ["A", "l", "l ", "w", "o", "r", "k ", "a", "n", "d ", "n", "o ", "p", "l", "a", "y ", "m", "a", "k", "e", "s ", "J", "a", "c", "k ", "a ", "d", "u", "l", "l ", "b", "o", "y. ", "A", "l", "l ", "w", "o", "r", "k ", "a", "n", "d ", "n", "o ", "p", "l", "a", "y ", "m", "a", "k", "e", "s ", "J", "a", "c", "k ", "a ", "d", "u", "l", "l ", "b", "o", "y. ", "A", "l", "l ", "w", "o", "r", "k ", "a", "n", "d ", "n", "o ", "p", "l", "a", "y ", "m", "a", "k", "e", "s ", "J", "a", "c", "k ", "a ", "d", "u", "l", "l ", "b", "o", "y. ", "A", "l", "l ", "w", "o", "r", "k ", "a", "n", "d ", "n", "o ", "p", "l", "a", "y ", "m", "a", "k", "e", "s ", "J", "a", "c", "k ", "a ", "d", "u", "l", "l ", "b", "o", "y. ", "A", "l", "l ", "w", "o", "r", "k ", "a", "n", "d ", "n", "o ", "p", "l", "a", "y ", "m", "a", "k", "e", "s ", "J", "a", "c", "k ", "a ", "d", "u", "l", "l ", "b", "o", "y. ", "A", "l", "l ", "w", "o", "r", "k ", "a", "n", "d ", "n", "o ", "p", "l", "a", "y ", "m", "a", "k", "e", "s ", "J", "a", "c", "k ", "a ", "d", "u", "l", "l ", "b", "o", "y. ", "A", "l", "l ", "w", "o", "r", "k ", "a", "n", "d ", "n", "o ", "p", "l", "a", "y ", "m", "a", "k", "e", "s ", "J", "a", "c", "k ", "a ", "d", "u", "l", "l ", "b", "o", "y. ", "A", "l", "l ", "w", "o", "r", "k ", "a", "n", "d ", "n", "o ", "p", "l", "a", "y ", "m", "a", "k", "e", "s ", "J", "a", "c", "k ", "a ", "d", "u", "l", "l ", "b", "o", "y. ", "A", "l", "l ", "w", "o", "r", "k ", "a", "n", "d ", "n", "o ", "p", "l", "a", "y ", "m", "a", "k", "e", "s ", "J", "a", "c", "k ", "a ", "d", "u", "l", "l ", "b", "o", "y.", "A", "l", "l ", "w", "o", "r", "k ", "a", "n", "d ", "n", "o ", "p", "l", "a", "y ", "m", "a", "k", "e", "s ", "J", "a", "c", "k ", "a ", "d", "u", "l", "l ", "b", "o", "y.", " "],
    stopJack = 0;
memory.jack = function () {
    "use strict";
    if (stopJack < 220) {
        $("h1").text("GameOver");
        $("#points").hide();
        $(".frame").hide();
        setTimeout(function () {
            $("h2").text($("h2").text() + jackArray[i]);
            i = i + 1;
            memory.jack();
        }, 40);
        stopJack = stopJack + 1;
    } else {
        answer = prompt("Would you like to play again?");
        if (answer === ("yes" || "Yes")) {
            location.reload();
        } else {
            $("h2").hide();
            $("#points").show();
            $(".frame").show();
            $(".bricks").css("background-image", "url(images/jack.jpg)");
            audio = $("audio")[0];
            playSound = function () {
                audio.load();
                audio.play();
            };
            playSound();
            setTimeout(function () {
                window.location = "http://24.media.tumblr.com/f4a1ae4af719fde1a3c09ddbd1418eb6/tumblr_mnl942xI9r1snnccgo1_500.gif";
            }, 4000);
        }
    }
};