

$(document).ready(function() {

var currentPlayer = 'X';

function onClick(el) {
  el.append("<div class= 'xoPlay'><h2> " + currentPlayer + " </h2></div>");
  // use the ternary operator to toggle the currentPlayer.
  currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
}

var boardArray = [null, null, null,
                  null, null, null,
                  null, null, null];

//need to add the ability to add x/o to the 2d array
//continue to add the rest of the space positions
//figure out how to parse the array for winner - refer to prework
function onClickArray(space) {
  if(space == "#a1"){
  console.log("it works!");
  boardArray[0] = currentPlayer === 'O' ? 'X' : 'O';
  console.log(boardArray);
  }
  else if(space == "#b1"){
  console.log("it works!");
  boardArray[1] = currentPlayer === 'O' ? 'X' : 'O';
  console.log(boardArray);
  }
 else if(space == "#c1"){
  console.log("it works!");
  boardArray[2] = currentPlayer === 'O' ? 'X' : 'O';
  console.log(boardArray);
  }
  else if(space == "#d2"){
  console.log("it works!");
  boardArray[3] = currentPlayer === 'O' ? 'X' : 'O';
  console.log(boardArray);
  }
  else if(space == "#e2"){
  console.log("it works!");
  boardArray[4] = currentPlayer === 'O' ? 'X' : 'O';
  console.log(boardArray);
  }
  else if(space == "#f2"){
  console.log("it works!");
  boardArray[5] = currentPlayer === 'O' ? 'X' : 'O';
  console.log(boardArray);
  }
  else if(space == "#g3"){
  console.log("it works!");
  boardArray[6] = currentPlayer === 'O' ? 'X' : 'O';
  console.log(boardArray);
  }
  else if(space == "#h3"){
  console.log("it works!");
  boardArray[7] = currentPlayer === 'O' ? 'X' : 'O';
  console.log(boardArray);
  }
  else if(space == "#i3"){
  console.log("it works!");
  boardArray[8] = currentPlayer === 'O' ? 'X' : 'O';
  console.log(boardArray);
  }
  else{
    console.log("Tie");
  }
}

  $( "#centerBoard > div.buttonBar > button.play" ).click(function() {
    alert( "Handler for .click() called." );
  });

  $( "#a1" ).click(function() {
    var el = $("#a1");
    onClick(el);
  });

  $( "#a1" ).click(function() {
  var space = "#a1";
  onClickArray(space);
  });

  $( "#b1" ).click(function() {
    var el = $("#b1");
    onClick(el);
  });

  $( "#b1" ).click(function() {
  var space = "#b1";
  onClickArray(space);
  });

  $( "#c1" ).click(function() {
    var el = $("#c1");
    onClick(el);
  });

  $( "#c1" ).click(function() {
  var space = "#c1";
  onClickArray(space);
  });

$( "#d2" ).click(function() {
    var el = $("#d2");
    onClick(el);
  });

  $( "#d2" ).click(function() {
  var space = "#d2";
  onClickArray(space);
  });

  $( "#e2" ).click(function() {
    var el = $("#e2");
    onClick(el);
  });

    $( "#e2" ).click(function() {
  var space = "#e2";
  onClickArray(space);
  });

  $( "#f2" ).click(function() {
    var el = $("#f2");
    onClick(el);
  });

    $( "#f2" ).click(function() {
  var space = "#f2";
  onClickArray(space);
  });

$( "#g3" ).click(function() {
    var el = $("#g3");
    onClick(el);
  });

  $( "#g3" ).click(function() {
  var space = "#g3";
  onClickArray(space);
  });

  $( "#h3" ).click(function() {
    var el = $("#h3");
    onClick(el);
  });

 $( "#h3" ).click(function() {
  var space = "#h3";
  onClickArray(space);
  });


  $( "#i3" ).click(function() {
    var el = $("#i3");
    onClick(el);
  });

 $( "#i3" ).click(function() {
  var space = "#i3";
  onClickArray(space);
  });

  onClick();
  onClickArray();

});

// Turns off an element after one click to prevent further action
// $( "#foo" ).one( "click", function() {
//   alert( "This will be displayed only once." );
// });
