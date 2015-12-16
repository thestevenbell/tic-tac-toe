#Tic Tac Toe  - a browser implementation of an oldie but goodie.
## Steven Bell - WDI5@GA@ATL - December 2015
***
###Project 1.
-Hosted Link: http://thestevenbell.github.io/tic-tac-toe/
-GitHub Source Files Link: https://github.com/thestevenbell/tic-tac-toe
-Trello Board: https://trello.com/b/vl446Sp6
-Wireframes: https://github.com/thestevenbell/tic-tac-toe/tree/master/WireframesPlanningDocs
***

###User Stories
- on page load :
  - TTT board is displayed center screen
  - players are identified by x and o, left and right of screen
  - start game button and reset game button centered on top of page above board

- *directions:*
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
-DRY up code

##JS DONE

-add x/o winner tally to the top bar
- add x/o to selected square
- must prevent the square from being selected
- switch to the next player icon
- add the selected space by player to array
- check the array after the 5th move and every other after for winner
-diasble action on div after 1st click
- highlight winner for 3 seconds with winner banner
  and highlight the winning x/o icons
  -reset the game board after single game win
  -remove classes from rows
-reset the game tally after 3 wins
  - clear the scoreKeep array
-restart game witout force page reload by click on reset button
-add board/reset button to 1/5 game win notice without resetting the counter
-deal with tie in game - reset the round?
-add "x" won round '?'

##UX/UI TO DO:

-make mediaquuery to force aspect ratio
-STYLE color color color

##UX/UI DONE
- animate win
- animate a fade in and out x/o pattern on page load
- define the action after win
-add 5 game counter, x/o icon if win, frown if loss

##FUTURE DEVELOPMENT
- diplay directions on hover over the buttons above the board
- Add # icon to the browser tab
- make responsive
  -remove the sidebars with player x/o icons
  -hardcode the aspect ratio of the board to stop elongation
  -increase size of the talley divs, move below play and reset buttons
  -ensure the buttons work
-AI
-Play timer

#TECHNOLOGY USED
-CSS
-HTML
-JavaScript
-JQuery
#NOTES and RESOURCES
-Google Web Fonts
-Bootstrap Font and Web Icons
-Reset.css
- used text-shadow gerator http://css3gen.com/text-shadow/




