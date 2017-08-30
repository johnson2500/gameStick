
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
    this.fillDeck();
  }
  insertCard(card){
    //put card in deck in the place of the old card
    this.blackCards.push(card);
  }
  fillDeck(){
    for(var i = 0;i<7;i++){
      var x = new Card(i,blackCardDeck.getCardFromDeck()); // get a black card
      this.insertCard(x); // insert into user deck
      view.cardChoices[i].setAttribute("label",x.label);
      view.initClicks(view.cardChoices[i]);
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
