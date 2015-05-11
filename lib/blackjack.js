var BlackjackView = require('./blackjack-view');
var request = require('request');

var deck_id;
var balance = 1000;

// play button press
var play = function () {

  // start by dealing two cards to the player
  // and one to the dealer
  request('http://deckofcardsapi.com/api/draw/' + deck_id + '/?count=3', function (error, response, body) {
    if (error)
      atom.notifications.addError(error);
    else {
      var res = JSON.parse(body);
      debugger;
    }
  });
}

module.exports = {
  activate: function (state) {

    // make the initial deckofcardsapi call to init 6 decks
    request('http://deckofcardsapi.com/api/shuffle/?deck_count=6', function (error, response, body) {
      if (error)
        atom.notifications.addError(error);
      else {
        var res = JSON.parse(body);
        deck_id = res.deck_id;

        // init right panel
        var view = new BlackjackView();

        // init balance label
        view.getBalance().innerHTML = balance;

        // set on click listener for buttons
        view.getPlayButton().onclick = play;

        // add right panel
        atom.workspace.addRightPanel({item: view.getElement()});
      }
    });
  }
}
