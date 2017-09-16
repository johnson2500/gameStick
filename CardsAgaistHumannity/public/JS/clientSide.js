class Card {
  constructor(index,label) {
    this.label = label;
    this.index = index;
  }
}
class UserDeck {
  constructor() {
    this.blackCards = [];
    this.whiteCardsEarned = [];
    this.cardLabelArr = [];
    this.whiteCard = {};
  }
  insertCard(card){
    //put card in deck in the place of the old card
    this.blackCards.push(card);
  }
  fillDeck(ar){
    for(var i = 0;i<ar.length;i++){
      var x = new Card(i,ar[i]); // get a black card
      this.insertCard(x); // insert into user deck
      view.cardChoices[i].setAttribute("label",x.label);
      view.initClicks(view.cardChoices[i]);
    }
    view.blackCardView.content = this.blackCards[0].label;
  }
}
class User {
  constructor() {
    this.id = 0;
    this.deckInHand = {};// this will be a deck Object
    this.judge = false;
    this.opponentPickedCards = 0;//how many times someone choose your card
  }
  getBlackCard(){
    // get a black card to fill you deck
  }

  getWhiteCard(){
    // get the white card in focus for the table
  }

  submitCardToTable(){
    // submit the card from user deck that user thinks is funniest
  }

  pickWinningCard(){
    //submit to table the funniest card to the question
  }

  isJudge(){
    return this.judge;
  }

}

var currentUser = new User();
var currentDeck = new UserDeck();
var socket = io();

// this fills the user deck.
socket.emit('fillDeck',function(msg) {console.log(msg)});
socket.on('filledDeck',function (msg) {
  currentDeck.fillDeck(msg);
  view.blackCardView.content = currentDeck.blackCards[0].label;
})

// this gets the current white card
socket.on('whiteCard',function (msg) {
  currentDeck.whiteCardInUse = new Card(0,msg);
  console.log(currentDeck.whiteCardInUse);
  view.whiteCardView.initWhiteCard();
})
