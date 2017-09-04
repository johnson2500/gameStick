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
    this.currentBlackCardIndex = 0;
  }
  insertCard(card){
    //put card in deck in the place of the old card
    this.blackCards.push(card);
  }
  fillDeck(ar){
    for(var i = 0;i<ar.length;i++){
      var x = new Card(i,ar[i]); // get a black card
      this.insertCard(x); // insert into user deck
    }
    view.blackCardView.content = this.blackCards[0].label;
  }
  getNextIndex(){
    if(this.currentBlackCardIndex === 6){
      this.currentBlackCardIndex = 0;
      return this.currentBlackCardIndex;
    } else {
      this.currentBlackCardIndex++;
      return this.currentBlackCardIndex;
    }
  }
  getPrviousIndex(){
    if(this.currentBlackCardIndex === 0){
      this.currentBlackCardIndex = 6;
      return this.currentBlackCardIndex;
    } else {
      this.currentBlackCardIndex--;
      return this.currentBlackCardIndex;
    }
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
socket.emit('fillDeck',(msg)=>{console.log(msg)});
socket.on('filledDeck',(msg)=>{
    currentDeck.fillDeck(msg);
  view.blackCardView.content = currentDeck.blackCards[0].label;
})

// this gets the current white card
socket.on('whiteCard',(msg)=>{
  currentDeck.whiteCardInUse = new Card(0,msg);
  view.whiteCardView.initWhiteCard();
  table.initWhiteCard();
});

socket.on('userSubmittedCard',()=>{
});
