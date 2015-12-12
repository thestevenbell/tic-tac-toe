$(document).ready(function() {

    var currentPlayer = 'X';

    function onClick(el) {
        el.append("<div class= 'xoPlay'><h2> " + currentPlayer + " </h2></div>");
        // use the ternary operator to toggle the currentPlayer.
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    }

    var boardArray = [null, null, null,
        null, null, null,
        null, null, null
    ];

    //need to add the ability to add x/o to the 2d array
    //continue to add the rest of the space positions
    //figure out how to parse the array for winner - refer to prework
    function onClickArray(space) {
        if (space == "#a1") {
            console.log("a1: it works!");
            boardArray[0] = currentPlayer === 'O' ? 'X' : 'O';
            console.log(boardArray);
            console.log("boardArray space a1 = " + boardArray[0]);
            // var stringConversion = String(boardArray[0]);
            // console.log("type: " + boardArray[0].type);
            // console.log("stringConversion type: " + stringConversion.type);
            // console.log("stringConversion " + stringConversion);
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
        onClick(el);
    });

    $("#a1").click(function() {
        var space = "#a1";
        onClickArray(space);
    });

    $("#b1").click(function() {
        var el = $("#b1");
        onClick(el);
    });

    $("#b1").click(function() {
        var space = "#b1";
        onClickArray(space);
    });

    $("#c1").click(function() {
        var el = $("#c1");
        onClick(el);
    });

    $("#c1").click(function() {
        var space = "#c1";
        onClickArray(space);
    });

    $("#d2").click(function() {
        var el = $("#d2");
        onClick(el);
    });

    $("#d2").click(function() {
        var space = "#d2";
        onClickArray(space);
    });

    $("#e2").click(function() {
        var el = $("#e2");
        onClick(el);
    });

    $("#e2").click(function() {
        var space = "#e2";
        onClickArray(space);
    });

    $("#f2").click(function() {
        var el = $("#f2");
        onClick(el);
    });

    $("#f2").click(function() {
        var space = "#f2";
        onClickArray(space);
    });

    $("#g3").click(function() {
        var el = $("#g3");
        onClick(el);
    });

    $("#g3").click(function() {
        var space = "#g3";
        onClickArray(space);
    });

    $("#h3").click(function() {
        var el = $("#h3");
        onClick(el);
    });

    $("#h3").click(function() {
        var space = "#h3";
        onClickArray(space);
    });

    $("#i3").click(function() {
        var el = $("#i3");
        onClick(el);
    });

    $("#i3").click(function() {
        var space = "#i3";
        onClickArray(space);
    });

    var winner = "";

    $(".row").click(checkWinner);


    function checkWinner(){
      console.log('var boardArray on click to checkWinner: ' + boardArray);
      if (boardArray[0] === 'X' && boardArray[1]  === "X"  && boardArray[2] === "X"){
        var winner = "X";
        console.log('winner is ' + winner);
      }
      if (boardArray[0] === 'O' && boardArray[1]  === "O"  && boardArray[2] === "O"){
        var winner = "O";
        console.log('winner is ' + winner);
      }
        if (boardArray[3] === 'X' && boardArray[4]  === "X"  && boardArray[5] === "X"){
        var winner = "X";
        console.log('winner is ' + winner);
      }
      if (boardArray[3] === 'O' && boardArray[4]  === "O"  && boardArray[5] === "O"){
        var winner = "O";
        console.log('winner is ' + winner);
      }
      else{
        console.log('else statement reached!');
        console.log("boardArray: " +  boardArray[0]);
      }
    }

    onClick();
    onClickArray();
    checkWinner();

});

// Turns off an element after one click to prevent further action
// $( "#foo" ).one( "click", function() {
//   alert( "This will be displayed only once." );
// });
