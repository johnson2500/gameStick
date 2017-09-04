class CardView {
  constructor(type, logo) {
    this.type = type;
    this.logoPath = logo;
    this.content = "this is a card";
    this.font = $("#cardContainer>div.card");
    this.card = $("#cardContainer");
    this.cardLabel = $("#card-label");
    this.CSSBackGroundCode = {
      black: "rgb(35, 31, 32)",
      white: "rgb(255, 255, 255)"
    }
    this.CSSFontColor = {
      black: 'white',
      white: 'black'
    }
  }
  updateCardView() {
    document.getElementById('logo').src = this.logoPath;
    this.card.css("background-color", this.CSSBackGroundCode[this.type]);
    this.font.css("color", this.CSSFontColor[this.type]);
    this.cardLabel.text(this.content);
  }
  initWhiteCard() {
    this.content = currentDeck.whiteCardInUse.label;
    this.cardLabel.text(this.content);
  }
}

class deckView {
  constructor() {
    this.blackCardView = new CardView('black', "IMGS/blackLogo.png");
    this.whiteCardView = new CardView('white', "IMGS/whiteLogo.png");
    this.cardChoices = $(".thumbnail-label");
    this.switchView = $("#viewSwitch");
    this.currentCardInView = "white";
    this.switchView.click($.proxy(function() {
      this.switchCardView()
    }, this));
  }
  switchCardView() {
    console.log(this.currentCardInView)
    if (this.currentCardInView === "white") {
      this.changeToBlackView();
    } else {
      this.changeToWhiteView();
    }
  }
  changeToBlackView() {
    this.currentCardInView = "black";
    this.blackCardView.updateCardView();
  }
  changeToWhiteView() {
    this.currentCardInView = "white";
    this.whiteCardView.updateCardView();
  }
  viewPreviousCard() {
    if(this.currentCardInView === 'white'){
      this.switchCardView();
      this.blackCardView.cardLabel.text(currentDeck.blackCards[currentDeck.getPrviousIndex()].label);
    } else {
      this.blackCardView.cardLabel.text(currentDeck.blackCards[currentDeck.getPrviousIndex()].label);
    }
    console.log(this.currentCardInView)
  }
  viewNextCard() {
    if(this.currentCardInView === 'white'){
      this.switchCardView();
      this.blackCardView.cardLabel.text(currentDeck.blackCards[currentDeck.getNextIndex()].label);
    } else {
      this.blackCardView.cardLabel.text(currentDeck.blackCards[currentDeck.getNextIndex()].label);
    }

    console.log(this.currentCardInView)
  }
}

class tableView {
  constructor() {
    this.cardsSubmittedList = $("#cardsSumbittedList");
    this.tableWhiteCard = $("#tableWhiteCard");
    this.initWhiteCard();
  }
  appendUserCard(content) {
    var li = $("<li>").addClass('card-submitted-title-container').
    append(
      $("<h4>").addClass('card-submitted-title').text(content)
    );
    this.cardsSubmittedList.append(li);
  }
  initWhiteCard() {
    this.tableWhiteCard.text(view.whiteCardView.content);
  }
  initClicks() {
  }
}

var view = new deckView();
var cardView = new CardView();
var table = new tableView();

$("#landingPage").hide();
$("#sumbitCardView").show();
$("#chooseCardView").hide();

$("#cardContainer").on("swipeleft", function() {
  view.viewPreviousCard();
  console.log("swipeRight")
});

$("#cardContainer").on("swiperight", function() {
  view.viewNextCard();
  console.log("sipeLeft");
});
