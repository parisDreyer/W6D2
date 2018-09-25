 class View {
  constructor(game, $el) {
    // Call View's setupBoard method in your constructor and place the new <ul> inside your container $el; check that this is drawing a grid.
    this.game = game;
    this.$el = $el;
    // console.log($el);
    this.setupBoard();
    this.bindEvents();
  }

  bindEvents() {
    // $('li').on('click', (e) => {console.log(e); this.makeMove(e.data('pos'));});
    const thisView = this;
    $('li').each(function () {
      let $this = $(this);
      $this.on("click", function() {
        // console.log($(this).data);
        thisView.makeMove($(this).data('pos'));
        let mark = thisView.game.currentPlayer;
        $(this).text(mark);
      });
    });
  }

  makeMove($square) {
    console.log('in makemove... pos: ', $square);
    this.game.playMove($square);    
  }
/* t should make a grid to represent the board. Build the grid using an
 unordered list (<ul>). The cells can be represented inside the grid using 
 <li> elements. By giving the <ul> a display property of flex, giving it
  a fixed width, and setting flex-wrap: wrap the <li> elements will 
  appear as a 3x3 grid. (You need to do some quick division or tinkering 
  to figure out how wide the <li> elements need to be). Set a border on the
   cells to make it look like a real grid. Style unclicked cells with a 
   gray background. Change the background to yellow while the user :hovers
    over an unclicked cell. */
  setupBoard() {
    // let list = "<ul class='board'>";
    this.$el.append("<ul class='board'></ul>");
    let count = 0;
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        $('ul').append("<li class='row1'></li>");
        jQuery.data($('li')[count], 'pos', [i, j]);
        // list += `<li class='row1'></li>`; //${[i, j]}
        // list.data('row, col')val = [i, j]
        count++;
      }
    }
    // this.$el.append('</ul>');
    // this.$el.append(`<ul class='board'><li class='row1'></li><li class='row1'></li><li class='row1'></li><li class='row2'></li><li class='row2'></li><li class='row2'></li><li class='row3'></li><li class='row3'></li><li class='row3'></li></ul>`);
  }
}
// console.log("webpack is working! whatever you want");
module.exports = View;
