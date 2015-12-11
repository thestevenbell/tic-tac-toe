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
  - game indicates visually the winner
  - board is reset
  - winner gets a tally icon
- on winning 3 games
  - winner is highlighted
  - message displays on screen that game will reset
  - game resets after 5 seconds

#### JS
- add x/o to selected square
- must prevent the square from being selected
- switch to the next player icon
- add the selected space by player to array
- check the array after the 5th move and every other after for winner
- highlight winner for 3 seconds with winner banner
  and highlight the winning x/o icons
- add x/o winner tally to the players side
- reset the game board after single game win
- reset the game tally after 3 wins




