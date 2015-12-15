  var winner = "";

  function dropShadowABC(){
     $( "#a1 > div > h2, #b1 > div > h2, #c1 > div > h2").addClass( " shadowed" );
     console.log("dropShadow added?");
    }
      function dropShadowDEF(){
     $( "#d2 > div > h2, #e2 > div > h2, #f2 > div > h2").addClass( " shadowed" );
    }

      function dropShadowGHI(){
     $( "#g3 > div > h2, #h3 > div > h2, #i3 > div > h2").addClass( " shadowed" );
    }

      function dropShadowADG(){
     $( "#a1 > div > h2, #d2 > div > h2, #g3 > div > h2").addClass( " shadowed" );
    }

      function dropShadowBEH(){
     $( "#b1 > div > h2, #e2 > div > h2, #h3 > div > h2").addClass( " shadowed" );
    }

    function dropShadowCFI(){
     $( "#c1 > div > h2, #f2 > div > h2, #i3 > div > h2").addClass( " shadowed" );
    }

    function dropShadowAEI(){
     $( "#a1 > div > h2, #e2 > div > h2, #i3 > div > h2").addClass( " shadowed" );
    }

    function dropShadowCEG(){
     $( "#c1 > div > h2, #e2 > div > h2, #g3 > div > h2").addClass( " shadowed" );
    }

    var score3of5 = [null, null, null, null, null];
    var scoreOfX = 0;
    var scoreOfO = 0;

     var boardArray = [null, null, null,
        null, null, null,
        null, null, null
    ];

     function checkWinner(){
      if (boardArray[0] === 'X' && boardArray[1]  === "X"  && boardArray[2] === "X"){
       winner = "X";
        dropShadowABC();
        delayedAlert();
        console.log('top row winner is ' + winner);
        //check3of5winner();
          //scoreOfX =+1;

      //append the winner
      }
      if (boardArray[0] === 'O' && boardArray[1]  === "O"  && boardArray[2] === "O"){
       winner = "O";
        console.log('top row winner is ' + winner);
        dropShadowABC();
      }
        if (boardArray[3] === 'X' && boardArray[4]  === "X"  && boardArray[5] === "X"){
       winner = "X";
        dropShadowDEF();
        console.log('middle row winner is ' + winner);
      }
      if (boardArray[3] === 'O' && boardArray[4]  === "O"  && boardArray[5] === "O"){
       winner = "O";
         dropShadowDEF();
        console.log('middle rox winner is ' + winner);
      }
      if (boardArray[6] === 'X' && boardArray[7]  === "X"  && boardArray[8] === "X"){
       winner = "X";
        dropShadowGHI();
        console.log('winner is ' + winner);
      }
      if (boardArray[6] === 'O' && boardArray[7]  === "O"  && boardArray[8] === "O"){
       winner = "O";
        dropShadowGHI();
        console.log('winner is ' + winner);
      }
      if (boardArray[0] === 'X' && boardArray[3]  === "X"  && boardArray[6] === "X"){
       winner = "X";
        dropShadowADG();
        console.log('first column winner is ' + winner);
      }
      if (boardArray[0] === 'O' && boardArray[3]  === "O"  && boardArray[6] === "O"){
       winner = "O";
        dropShadowADG();
        console.log('first column winner is ' + winner);
      }
      if (boardArray[1] === 'X' && boardArray[4]  === "X"  && boardArray[7] === "X"){
       winner = "X";
        dropShadowBEH();
        console.log('middle column winner is ' + winner);
      }
      if (boardArray[1] === 'O' && boardArray[4]  === "O"  && boardArray[7] === "O"){
       winner = "O";
        dropShadowBEH();
        console.log('middle column winner is ' + winner);
      }
      if (boardArray[2] === 'X' && boardArray[5]  === "X"  && boardArray[8] === "X"){
       winner = "X";
        dropShadowCFI();
        console.log('winner is ' + winner);
      }
      if (boardArray[2] === 'O' && boardArray[5]  === "O"  && boardArray[8] === "O"){
       winner = "O";
        dropShadowCFI();
        console.log('winner is ' + winner);
      }
      if (boardArray[0] === 'X' && boardArray[4]  === "X"  && boardArray[8] === "X"){
       winner = "X";
        dropShadowAEI();
        console.log('winner is ' + winner);
      }
      if (boardArray[0] === 'O' && boardArray[4]  === "O"  && boardArray[8] === "O"){
       winner = "O";
        dropShadowAEI();
        console.log('winner is ' + winner);
      }
      if (boardArray[2] === 'X' && boardArray[4]  === "X"  && boardArray[6] === "X"){
       winner = "X";
        dropShadowCEG();
        console.log('winner is ' + winner);
      }
      if (boardArray[2] === 'O' && boardArray[4]  === "O"  && boardArray[6] === "O"){
         winner = "O";
        dropShadowCEG();
        console.log('winner is ' + winner);
      }
      else{
        console.log('else statement reached!');
        console.log("boardArray: " +  boardArray[0]);
      }
    }

$(document).ready(function() {

    var currentPlayer = 'X';

    function onClick(el) {
        el.append("<div class= 'xoPlay'><h2> " + currentPlayer + " </h2></div>");
        // use the ternary operator to toggle the currentPlayer.
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    }

//sets up the array used for score keeping in a round

    function onClickArray(space) {
        if (space == "#a1") {
            console.log("a1: it works!");
            boardArray[0] = currentPlayer === 'O' ? 'X' : 'O';
            console.log(boardArray);
            console.log("boardArray space a1 = " + boardArray[0]);
            return boardArray[0];
        } else if (space == "#b1") {
            console.log("b1: it works!");
            boardArray[1] = currentPlayer === 'O' ? 'X' : 'O';
            return boardArray[1];
            console.log('boardArray space b1 = ' + boardArray[1]);
        } else if (space == "#c1") {
            console.log("c1: it works!");
            boardArray[2] = currentPlayer === 'O' ? 'X' : 'O';
            console.log(boardArray);
            return boardArray[2];
        } else if (space == "#d2") {
            console.log("it works!");
            boardArray[3] = currentPlayer === 'O' ? 'X' : 'O';
            return boardArray[3];
            console.log(boardArray);
        } else if (space == "#e2") {
            console.log("it works!");
            boardArray[4] = currentPlayer === 'O' ? 'X' : 'O';
            console.log(boardArray);
        } else if (space == "#f2") {
            console.log("it works!");
            boardArray[5] = currentPlayer === 'O' ? 'X' : 'O';
            console.log(boardArray);
        } else if (space == "#g3") {
            console.log("it works!");
            boardArray[6] = currentPlayer === 'O' ? 'X' : 'O';
            console.log(boardArray);
        } else if (space == "#h3") {
            console.log("it works!");
            boardArray[7] = currentPlayer === 'O' ? 'X' : 'O';
            console.log(boardArray);
        } else if (space == "#i3") {
            console.log("it works!");
            boardArray[8] = currentPlayer === 'O' ? 'X' : 'O';
            console.log(boardArray);
        } else {
            console.log("Tie");
        }
    }

    $("#centerBoard > div.buttonBar > button.play").click(function() {
        alert("Handler for .click() called.");
    });

    $("#a1").click(function() {
        var el = $("#a1");
        $(this).unbind('click');
        onClick(el);
    });

    $("#a1").click(function() {
        var space = "#a1";
        onClickArray(space);
    });

    $("#b1").click(function() {
        var el = $("#b1");
        $(this).unbind('click');
        onClick(el);
    });

    $("#b1").click(function() {
        var space = "#b1";
        onClickArray(space);
    });

    $("#c1").click(function() {
        var el = $("#c1");
        $(this).unbind('click');
        onClick(el);
    });

    $("#c1").click(function() {
        var space = "#c1";
        onClickArray(space);
    });

    $("#d2").click(function() {
        var el = $("#d2");
        $(this).unbind('click');
        onClick(el);
    });

    $("#d2").click(function() {
        var space = "#d2";
        onClickArray(space);
    });

    $("#e2").click(function() {
        var el = $("#e2");
        $(this).unbind('click');
        onClick(el);
    });

    $("#e2").click(function() {
        var space = "#e2";
        onClickArray(space);
    });

    $("#f2").click(function() {
        var el = $("#f2");
        $(this).unbind('click');
        onClick(el);
    });

    $("#f2").click(function() {
        var space = "#f2";
        onClickArray(space);
    });

    $("#g3").click(function() {
        var el = $("#g3");
        $(this).unbind('click');
        onClick(el);
    });

    $("#g3").click(function() {
        var space = "#g3";
        onClickArray(space);
    });

    $("#h3").click(function() {
        var el = $("#h3");
        $(this).unbind('click');
        onClick(el);
    });

    $("#h3").click(function() {
        var space = "#h3";
        onClickArray(space);
    });

    $("#i3").click(function() {
        var el = $("#i3");
        $(this).unbind('click');
        onClick(el);
    });

    $("#i3").click(function() {
        var space = "#i3";
        $(this).unbind('click');
        onClickArray(space);
    });



    $(".row").click(checkWinner);


// this code is meant to count the 3 of 5 winner - finish after declaring
// winner of each round and resetting the board, but need to keep talley
    // function check3of5winner(){
    //   if(scoreOfX = 3){
    //     console.log('X is grand champion!');
    //   }
    //   else if(scoreOfO = 3){
    //     console.log('X is grand champion!');
    //   }
    //   else{
    //     console.log('No winner yet!')
    //   }
    // }


    var timeout7000;
    var timeout7001;


    function delayedAlert() {
      timeout7001 = window.setTimeout(declareRoundWinner, 7001);
      timeout7000 = window.setTimeout(clearFix, 7000);
      function clearFix(){
      $(".row").addClass(" hidden");
      console.log('spaces hidden?');
      }
     function declareRoundWinner(){
      $(".spaceBox").prepend("<div class='rowWinner'></div><div class='rowWinner'><h4>the winner of this round is " + winner + ".</h4></div>");
       console.log('winner declared?');
      }
    }





      $( "#a1" ).one( "click", function() {
      });

    onClick();
    onClickArray();
    checkWinner();

});
console.log(winner);

// Turns off an element after one click to prevent further action
// $( "#foo" ).one( "click", function() {
//   alert( "This will be displayed only once." );
// });
