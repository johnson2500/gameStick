class Card {
  constructor(index, label) {
    this.label = label;
    this.index = index;
  }
}
class Deck {
  constructor() {
    this.blackCards = [];
    this.whiteCardsEarned = [];
    this.whiteCard = {};
    this.currentBlackCardIndex = 0;
  }
  insertCard(card) {
    //put card in deck in the place of the old card
    this.blackCards.push(card);
  }
  fillDeck(ar) {
    for (var i = 0; i < ar.length; i++) {
      var x = new Card(i, ar[i]); // get a black card
      this.insertCard(x); // insert into user deck
    }
    deckView.blackView.content = this.blackCards[0].label;
  }
  getNextIndex() {
    if (this.currentBlackCardIndex === 6) {
      this.currentBlackCardIndex = 0;
      return this.currentBlackCardIndex;
    } else {
      this.currentBlackCardIndex++
      return this.currentBlackCardIndex;
    }
  }
  getPrviousIndex() {
    if (this.currentBlackCardIndex === 0) {
      this.currentBlackCardIndex = 6;
      return this.currentBlackCardIndex;
    } else {
      this.currentBlackCardIndex--
      return this.currentBlackCardIndex;
    }
  }
}

class User {
  constructor() {
    this.id = 0;
    this.deck = new Deck();
    this.opponentPickedCards = 0; //how many times someone choose your card
    this.isPickingCards = false;
  }

  pickBestCard() {

  }

  submitCardToTable() {
    // submit the card from user deck that user thinks is funniest
    socket.emit('userSubmittedCard', "test Cards");
  }

}
