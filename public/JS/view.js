class CardView {
  constructor(type,logo) {
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
  updateCardView(){
    document.getElementById('logo').src = this.logoPath;
    this.card.css("background-color", this.CSSBackGroundCode[this.type]);
    this.font.css("color", this.CSSFontColor[this.type]);
    this.cardLabel.text(this.content);
  }
  initWhiteCard(){
    this.content = currentDeck.whiteCardInUse.label;
    this.cardLabel.text(this.content);
  }

}

class View {
  constructor() {
    this.blackCardView = new CardView('black',"IMGS/blackLogo.png");
    this.whiteCardView = new CardView('white',"IMGS/whiteLogo.png");
    this.cardChoices = $(".thumbnail-label");
    this.switchView = $("#viewSwitch");
    this.currentCardInView = "white";
    this.switchView.click($.proxy(function(){this.switchCardView()},this));
  }
  switchCardView(){
    console.log(this.currentCardInView)
    if(this.currentCardInView === "white"){
      this.changeToBlackView();
     } else {
       this.changeToWhiteView();
     }
  }
  initClicks(card){
    card.addEventListener("click",(x)=>{
      this.changeToBlackView();
      this.blackCardView.cardLabel.text(x.target.getAttribute('label'));
      this.blackCardView.content = x.target.getAttribute('label');
    });
    }
  changeToBlackView(){
    this.currentCardInView = "black";
    this.blackCardView.updateCardView();
  }
  changeToWhiteView(){
    this.currentCardInView ="white";
    this.whiteCardView.updateCardView();
  }
}

var view = new View();
var cardView = new CardView();
