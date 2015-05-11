var request = require('request');
var BlackjackView = require('./blackjack-view');
var view = new BlackjackView();

var deck_id;
var balance = 1000;

// play button press
var play = function () {

  // remove 100$ from the balance
  // TODO: don't hardcode values
  balance -= 100;
  updateBalance();

  // start by dealing two cards to the player
  // and one to the dealer
  request('http://deckofcardsapi.com/api/draw/' + deck_id + '/?count=3', function (error, response, body) {
    if (error)
      atom.notifications.addError(error);
    else {
      var res = JSON.parse(body);

      var playerCard_1 = document.createElement('li');
      var playerCardsImg_1 = document.createElement('img');
      playerCardsImg_1.setAttribute('src', res.cards[0].image);
      playerCardsImg_1.setAttribute('width', 50);
      playerCardsImg_1.setAttribute('height', 63);
      playerCard_1.appendChild(playerCardsImg_1);
      view.getPlayerCards().appendChild(playerCard_1);

      var playerCard_2 = document.createElement('li');
      var playerCardImg_2 = document.createElement('img');
      playerCardImg_2.setAttribute('src', res.cards[1].image);
      playerCardImg_2.setAttribute('width', 50);
      playerCardImg_2.setAttribute('height', 63);
      playerCard_2.appendChild(playerCardImg_2);
      view.getPlayerCards().appendChild(playerCard_2);

      var dealerCard = document.createElement('li');
      var dealerCardImg = document.createElement('img');
      dealerCardImg.setAttribute('src', res.cards[2].image);
      dealerCardImg.setAttribute('width', 50);
      dealerCardImg.setAttribute('height', 63);
      dealerCard.appendChild(dealerCardImg);
      view.getDealerCards().appendChild(dealerCard);
    }
  });
}

// update balance label
var updateBalance = function () {
  view.getBalance().innerHTML = balance;
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

        // init balance label
        updateBalance();

        // set on click listener for buttons
        view.getPlayButton().onclick = play;

        // add right panel
        atom.workspace.addRightPanel({item: view.getElement()});
      }
    });
  }
}
