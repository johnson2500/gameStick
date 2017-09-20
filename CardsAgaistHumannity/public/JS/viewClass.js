class CardView {
  constructor(type, logo) {
    this.type = type;
    this.logoPath = logo;
    this.content = "";
    this.font = $("#cardContainer>div#card");
    this.card = $("#card");
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
}
