
var winner = "";
var currentPlayer = 'X';
var scoreOfX = 0;
var scoreOfO = 0;
var boardArray = [null, null, null,
                  null, null, null,
                  null, null, null
                  ];
var cells = [ '#a1', '#b1', '#c1',
              '#d2', '#e2', '#f2',
              '#g3', '#h3', '#i3'
];

function addClickHandlerForCell(i) {
  var cell = cells[i];
  $(cell).click(function() {
    $(this).unbind('click');
    onClick( $(this) );
    onClickArray(i);
  });
}

function oneTime() {
  console.log('oneTime');
  $("#centerBoard > div.buttonBar > button.play").click(function() {
    playReset();
  });

  $("#centerBoard > div.buttonBar > button.reset").click(function() {
    window.location.reload();
  });

  for (var i = 0; i < cells.length; i++) {
    // setup our click handler for each cell in cells.
    addClickHandlerForCell(i);
  }

  $(".row").click(checkWinner);
}

// Initialize click handlers and other one-time stuff here.
$(function() {
  oneTime();
  playReset();
});

function playReset() {
  console.log('playReset');
  boardArray = [null, null, null,
                  null, null, null,
                  null, null, null
                  ];
  currentPlayer = 'X';
  winner = "";
  //$( ".row, #a1, #b1, #c1, #d2, #e2, #f2, #g3, #h3, #i3" ).bind("click");
  $( "#a1 > div > h2, #b1 > div > h2, #c1 > div > h2").removeClass( "shadowed" );
  $( "#d2 > div > h2, #e2 > div > h2, #f2 > div > h2").removeClass( "shadowed" );
  $( "#g3 > div > h2, #h3 > div > h2, #i3 > div > h2").removeClass( "shadowed" );
  //$(".spaceBox").replaceWith(' <div class="row rowTop"><div class="spaces" id="a1"></div><div class="spaces" id="b1"></div><div class="spaces" id="c1"></div></div><div class="row"><div class="spaces" id="d2"></div><div class="spaces" id="e2"></div><div class="spaces" id="f2"></div></div><div class="row"><div class="spaces" id="g3"></div><div class="spaces" id="h3"></div><div class="spaces" id="i3"></div></div>');
  //$("#s1-1 > h5, #s1-2 > h5, #s1-3 > h5, #s1-4 > h5, #s1-5 > h5").replaceWith('<h5>#</h5>');
  // $(".spaceBox").replaceWith(' <div class="row rowTop"><div class="spaces" id="a1"></div><div class="spaces" id="b1"></div><div class="spaces" id="c1"></div></div><div class="row"><div class="spaces" id="d2"></div><div class="spaces" id="e2"></div><div class="spaces" id="f2"></div></div><div class="row"><div class="spaces" id="g3"></div><div class="spaces" id="h3"></div><div class="spaces" id="i3"></div></div>');

  $(".spaces").empty();
  $(".row").removeClass("hidden");
}

function dropShadowABC(){
  $( "#a1 > div > h2, #b1 > div > h2, #c1 > div > h2").addClass( "shadowed" );
  console.log("dropShadow added?");
}

function dropShadowDEF(){
  $( "#d2 > div > h2, #e2 > div > h2, #f2 > div > h2").addClass( "shadowed" );
}

function dropShadowGHI(){
  $( "#g3 > div > h2, #h3 > div > h2, #i3 > div > h2").addClass( "shadowed" );
}

function dropShadowADG(){
  $( "#a1 > div > h2, #d2 > div > h2, #g3 > div > h2").addClass( "shadowed" );
}

function dropShadowBEH(){
  $( "#b1 > div > h2, #e2 > div > h2, #h3 > div > h2").addClass( "shadowed" );
}

function dropShadowCFI(){
  $( "#c1 > div > h2, #f2 > div > h2, #i3 > div > h2").addClass( "shadowed" );
}

function dropShadowAEI(){
  $( "#a1 > div > h2, #e2 > div > h2, #i3 > div > h2").addClass( "shadowed" );
}

function dropShadowCEG(){
  $( "#c1 > div > h2, #e2 > div > h2, #g3 > div > h2").addClass( "shadowed" );
}

// this code is meant to count the 3 of 5 winner - finish after declaring
// winner of each round and resetting the board, but need to keep talley
function declare3of5Winner(){
  console.log('declare3of5Winner');
  $(".spaceBox").replaceWith("<div class='rowWinner'><h1 class='shadowed'>" +  winner + winner + winner + '</h1></br><h4> is the grand champion!</h4></br></div>');
  console.log('Grand champion should be declared. Was it?');
}

//checks to see if either player has won three times. called after each play.
function check3of5winner(){
  console.log('check3of5winner');
  if(scoreOfX === 3){
    declare3of5Winner();
    console.log('<h2>X </h2></br>' + '<h4> is the grand champion!</h4>');
  }
  else if(scoreOfO === 3){
    declare3of5Winner();
    console.log('O is grand champion!');
  }
  else{
    console.log('Two letters enter, one letter leaves!');
  }
}

//switch case function to add the x/o icon to the scoreboard, triggered in the
//checkWinner function
function scoreBoard(){
    console.log("ScoreBoard switch statement in effect");
    switch (scoreOfX + scoreOfO) {
      case 1:
        $("#s1-1 > h5").replaceWith('<h6>' + winner + '</h6>');
        break;
      case 2:
        $("#s1-2 > h5").replaceWith('<h6>' + winner + '</h6>');
        break;
      case 3:
        $("#s1-3 > h5").replaceWith('<h6>' + winner + '</h6>');
        break;
      case 4:
        $("#s1-4 > h5").replaceWith('<h6>' + winner + '</h6>');
        break;
      case 5:
        $("#s1-5 > h5").replaceWith('<h6>' + winner + '</h6>');
        break;
      case 0:
        console.log('case 0 works');
    }
  }

//checks winner of the round, animates the winning moves.
//Need to make function for every row
function checkWinner(){
  console.log('checkWinner');
      if (boardArray[0] === 'X' && boardArray[1]  === "X"  && boardArray[2] === "X"){
        winner = "X";
        dropShadowABC();
        delayedAlert();
        scoreOfX += 1;
        scoreBoard();
        console.log('this round top row winner is ' + winner);
      }
      if (boardArray[0] === 'O' && boardArray[1]  === "O"  && boardArray[2] === "O"){
        winner = "O";
        dropShadowABC();
        delayedAlert();
        scoreOfO += 1;
        scoreBoard();
        console.log('this round top row winner is ' + winner);
      }
      if (boardArray[3] === 'X' && boardArray[4]  === "X"  && boardArray[5] === "X"){
        winner = "X";
        dropShadowDEF();
        delayedAlert();
        scoreOfX += 1;
        scoreBoard();
        console.log('middle row winner is ' + winner);
      }
      if (boardArray[3] === 'O' && boardArray[4]  === "O"  && boardArray[5] === "O"){
        winner = "O";
        dropShadowDEF();
        delayedAlert();
        scoreOfO += 1;
        scoreBoard();
        console.log('middle rox winner is ' + winner);
      }
      if (boardArray[6] === 'X' && boardArray[7]  === "X"  && boardArray[8] === "X"){
       winner = "X";
        dropShadowGHI();
        delayedAlert();
        scoreOfX += 1;
        scoreBoard();
        console.log('winner is ' + winner);
      }
      if (boardArray[6] === 'O' && boardArray[7]  === "O"  && boardArray[8] === "O"){
       winner = "O";
        dropShadowGHI();
        delayedAlert();
        scoreOfO += 1;
        scoreBoard();
        console.log('winner is ' + winner);
      }
      if (boardArray[0] === 'X' && boardArray[3]  === "X"  && boardArray[6] === "X"){
       winner = "X";
        dropShadowADG();
        delayedAlert();
        scoreOfX += 1;
        scoreBoard();
        console.log('first column winner is ' + winner);
      }
      if (boardArray[0] === 'O' && boardArray[3]  === "O"  && boardArray[6] === "O"){
       winner = "O";
        dropShadowADG();
        delayedAlert();
        scoreOfO += 1;
        scoreBoard();
        console.log('first column winner is ' + winner);
      }
      if (boardArray[1] === 'X' && boardArray[4]  === "X"  && boardArray[7] === "X"){
       winner = "X";
        dropShadowBEH();
        delayedAlert();
        scoreOfX += 1;
        scoreBoard();
        console.log('middle column winner is ' + winner);
      }
      if (boardArray[1] === 'O' && boardArray[4]  === "O"  && boardArray[7] === "O"){
       winner = "O";
        dropShadowBEH();
        delayedAlert();
        scoreOfO += 1;
        scoreBoard();
        console.log('middle column winner is ' + winner);
      }
      if (boardArray[2] === 'X' && boardArray[5]  === "X"  && boardArray[8] === "X"){
       winner = "X";
        dropShadowCFI();
        delayedAlert();
        scoreOfX += 1;
        scoreBoard();
        console.log('winner is ' + winner);
      }
      if (boardArray[2] === 'O' && boardArray[5]  === "O"  && boardArray[8] === "O"){
       winner = "O";
        dropShadowCFI();
        delayedAlert();
        scoreOfO += 1;
        scoreBoard();
        console.log('winner is ' + winner);
      }
      if (boardArray[0] === 'X' && boardArray[4]  === "X"  && boardArray[8] === "X"){
       winner = "X";
        dropShadowAEI();
        delayedAlert();
        scoreOfX += 1;
        scoreBoard();
        console.log('winner is ' + winner);
      }
      if (boardArray[0] === 'O' && boardArray[4]  === "O"  && boardArray[8] === "O"){
       winner = "O";
        dropShadowAEI();
        delayedAlert();
        scoreOfO += 1;
        scoreBoard();
        console.log('winner is ' + winner);
      }
      if (boardArray[2] === 'X' && boardArray[4]  === "X"  && boardArray[6] === "X"){
       winner = "X";
        dropShadowCEG();
        delayedAlert();
        scoreOfX += 1;
        scoreBoard();
        console.log('winner is ' + winner);
      }
      if (boardArray[2] === 'O' && boardArray[4]  === "O"  && boardArray[6] === "O"){
         winner = "O";
        dropShadowCEG();
        delayedAlert();
        scoreOfO += 1;
        scoreBoard();
        console.log('winner is ' + winner);
      }
      else{
        console.log('else statement reached!');
        console.log("boardArray: " +  boardArray[0]);
      }
}

var timeout3000;
var timeout3001;
var timeout5000;

function delayedAlert() {
  // debugger;
  console.log('delayedAlert');
  timeout3001 = window.setTimeout(declareRoundWinner, 3001);
  timeout3000 = window.setTimeout(clearFix, 3000);
  timeout2000 = window.setTimeout(check3of5winner, 5000);

  function clearFix() {
    $(".row").addClass("hidden");
    console.log('spaces hidden?');
  }

  function declareRoundWinner(){
    $(".spaceBox").prepend("<div class='rowWinner'><h1 class='shadowed'>" + winner + winner + winner +  "</h1><h4>won this  round</h4></div>");
    console.log('winner declared?');
  }
  check3of5winner();
}


function onClick(el) {
  el.append("<div class= 'xoPlay'><h2> " + currentPlayer + " </h2></div>");
  // use the ternary operator to toggle the currentPlayer.
  currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
}

//sets up the array used for score keeping in a round
function onClickArray(index) {
  boardArray[index] = currentPlayer === 'O' ? 'X' : 'O';
  console.log(boardArray);
  console.log("boardArray space " + boardArray[index]);
}


  // $("button.play").click(function() {
  //       alert("Handler for .click() called.");
  //   });

  // $("button.refresh").click(function() {
  //     console.log('reset button clicked');
  //     console.log('line 341');
  //     window.location.reload();
  // });


// Turns off an element after one click to prevent further action
// $( "#foo" ).one( "click", function() {
//   alert( "This will be displayed only once." );
// });
