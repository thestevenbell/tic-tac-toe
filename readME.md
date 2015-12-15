#Tic Tac Toe
## Steven Bell - WDI5@GA@ATL

###User Stories
- on page load :
  - TTT board is displayed center screen
  - players are identified by x and o, left and right of screen
  - start game button and reset game button centered on top of page above board
  - diplay directions under the buttons above the board
    directions:
      The champion will be the first player to win 3 games out of 5.
      Choose which player will start.  First player is X.
      Player X, it's your turn, select a square to begin the game.
- on click to start game
  - first player is X,
  - palyer move is indicated by highlighting the x or o
- on click to select position
  - appropriate player mark (x or o) appears in the selected square
  - next player clicks a square
  - squares selected until a player wins
- on winning 1 game
  - game indicates visually the winner -  winning row is highlighted
  - board is reset
  - winner gets a tally icon
- on winning 3 games
  - winner is highlighted,
  - message displays on screen that game will reset
  - game resets after 5 seconds
#TO DO
##JS TO DO
- add i (instruction) icon with dropdown
- highlight winner for 3 seconds with winner banner
  and highlight the winning x/o icons
-add x/o winner tally to the players side
-reset the game board after single game win
-reset the game tally after 3 wins
-restart game witout force page reload by click on reset button
-deal with tie in game - reset the round?
-DRY up code
##JS DONE
- add x/o to selected square
- must prevent the square from being selected
- switch to the next player icon
- add the selected space by player to array
- check the array after the 5th move and every other after for winner
-diasble action on div after 1st click

##UX/UI TO DO:
-make mediaquuery to force aspect ratio
-animate win
-STYLE color color color
-add 5 game counter, x/o icon if win, frown if loss



##UX/UI DONEs

#NOTES:
-text-shadow gerator http://css3gen.com/text-shadow/

- write this function to reset the board = clearBoard()
This function will go through every cell in checkerboard (see previous
exercise) and set that cell's value to null.
-write another function to reset the tally clearTally - get number of div
elements that were appended and then do an equal number of divs, or try to
simple do a remove of all divs with the same class/id

- animate a fade in and out x/o pattern on page load

-define the action after win
