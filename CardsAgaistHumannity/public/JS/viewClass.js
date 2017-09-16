class CardView {
  constructor(type, logo) {
    this.type = type;
    this.logoPath = logo;
    this.content = "";
    this.font = $("#cardContainer>div#card");
    this.card = $("#cardContainer");
    this.label = $("#card-label");
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
    this.label.text(this.content);
    this.centerText();
  }
  initWhiteCard() {
    this.content = user.deck.whiteCard.label;
    this.label.text(this.content);
    this.centerText();
  }
  centerText() {
    //takes the height of the card and finds the container
    $("#card").css("top", (($("#cardContainer").height() / 2) - ($("#card").height() / 2)));
  }
}

class DeckView {
  constructor() {
    this.blackView = new CardView('black', "IMGS/blackLogo.png");
    this.whiteView = new CardView('white', "IMGS/whiteLogo.png");
    this.switchView = $("#viewSwitch");
    this.currentCardInView = "white";
    this.switchView.click($.proxy(function() {
      this.switchCardView()
    }, this));
  }
  switchCardView() {
    if (this.currentCardInView === "white") {
      this.changeToBlackView();
    } else {
      this.changeToWhiteView();
    }
  }
  changeToBlackView() {
    this.currentCardInView = "black";
    this.blackView.updateCardView();
  }
  changeToWhiteView() {
    this.currentCardInView = "white";
    this.whiteView.updateCardView();
  }
  viewPreviousCard() {
    if (this.currentCardInView === 'white') {
      this.switchCardView();
      this.blackView.content = user.deck.blackCards[user.deck.getPrviousIndex()].label
      this.blackView.label.text(this.blackView.content);
    } else {
      this.blackView.content = user.deck.blackCards[user.deck.getPrviousIndex()].label
      this.blackView.label.text(this.blackView.content);
    }
  }
  viewNextCard() {
    if (this.currentCardInView === 'white') {
      this.switchCardView();
        this.blackView.content = user.deck.blackCards[user.deck.getNextIndex()].label
        this.blackView.label.text(this.blackView.content);
    } else {
      this.blackView.content = user.deck.blackCards[user.deck.getNextIndex()].label
      this.blackView.label.text(this.blackView.content);
    }
  }
}

class PickingView {
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
    this.tableWhiteCard.text(deckView.whiteView.content);
  }
  initClicks() {}
}
