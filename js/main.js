

$(document).ready(function() {

var currentPlayer = 'X';

function onClick(el) {
  el.append("<div class= 'xoPlay'><h2> " + currentPlayer + " </h2></div>");
  // use the ternary operator to toggle the currentPlayer.
  currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
}

  $( "#centerBoard > div.buttonBar > button.play" ).click(function() {
    alert( "Handler for .click() called." );
  });

  $( "#a1" ).click(function() {
    var el = $("#a1");
    onClick(el);
  });

  $( "#b1" ).click(function() {
    var el = $("#b1");
    onClick(el);
  });

  $( "#c1" ).click(function() {
    var el = $("#c1");
    onClick(el);
  });

$( "#d2" ).click(function() {
    var el = $("#d2");
    onClick(el);
  });

  $( "#e2" ).click(function() {
    var el = $("#e2");
    onClick(el);
  });

  $( "#f2" ).click(function() {
    var el = $("#f2");
    onClick(el);
  });

$( "#g3" ).click(function() {
    var el = $("#g3");
    onClick(el);
  });

  $( "#h3" ).click(function() {
    var el = $("#h3");
    onClick(el);
  });

  $( "#i3" ).click(function() {
    var el = $("#i3");
    onClick(el);
  });

  onClick();

});

// Turns off an element after one click to prevent further action
// $( "#foo" ).one( "click", function() {
//   alert( "This will be displayed only once." );
// });
