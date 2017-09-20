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
    this.ind = 0;
  }
  insertCard(card) {
    this.blackCards.push(card);
  }
  insertNewCard(content){
    this.blackCards[this.ind].label = content;
  }
}

class User {
  constructor() {
    this.id = 0;
    this.userName = "";
    this.deck = new Deck();
    this.cardsEarned = 0;
    this.isPickingCards = false;
  }

  // Black Card Viewing Logic

  getNextCard(){
    return window.user.deck.blackCards[user.nextCardIndex()].label;
  }

  getPreviousCard(){
    return window.user.deck.blackCards[user.nextCardIndex()].label;
  }

  nextCardIndex() {
    if (this.deck.ind === 6) {
      this.deck.ind = 0;
      return this.deck.ind;
    } else {
      this.deck.ind++
      return this.deck.ind;
    }
  }

  previousCardIndex() {
    if (this.deck.ind === 0) {
      this.deck.ind = 6;
      return this.deck.ind;
    } else {
      this.deck.ind--
      return this.deck.ind;
    }
  }

  // Getting Black Card

  fillHand(ar) {
    for (var i = 0; i < ar.length; i++) {
      var x = new Card(i, ar[i]); // get a black card
      this.deck.insertCard(x);
    }
  }

  getBlackCard(){
    socket.emit('getBlackCard');
  }

  //Choosing Black Cards

  submitCardToTable() {
    socket.emit('submitCardToTable',this.deck.blackCards[this.deck.ind]);
  }

  // White Card Stuff

  pickWhiteCard(){
    // If is picking == true;
    if(this.isPickingCards){
        socket.emit("cardChosen",/* Some Card cardChosen */)
    } else {
      return
    }
  }

}
