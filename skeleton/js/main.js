const View = require("./ttt-view.js"); // require appropriate file
const Game = require("../solution/game.js"); // require appropriate file

$( () => {
  // Your code here
  console.log('hello');
  const g = new Game();
  const $el = $('.ttt');
  const view = new View(g, $el);
});
