function initSocket() {
  socket.on('filledDeck', (msg) => {
    user.deck.fillDeck(msg);
    deckView.blackView.content = user.deck.blackCards[0].label;
  });

  socket.on('whiteCard', (msg) => {
    user.deck.whiteCard = new Card(0, msg);
    deckView.whiteView.initWhiteCard();
    pickingView.initWhiteCard();
  });

  socket.on('receivedWhiteCard', (msg) => {
    pickingView.appendUserCard(msg);
  });

  // events that  have to happen first
  socket.emit('fillDeck');
}
var deckView = new DeckView();
var pickingView = new PickingView();
var user = new User();
var socket = io();

initSocket();

// JS Client Side Events

$("#cardContainer").on("swipeleft", function() {
  $("#cardContainer").animate({
    left: "-100%"
  },200, function() {
    var left = ($("body").width() - $("#cardContainer").width())/2;
    $("#cardContainer").css({'left':'100%'})
    $("#cardContainer").animate({"left":"0" + left +"px"},200);
    deckView.viewPreviousCard();
  });
});
$("#cardContainer").on("swiperight", function() {
  $("#cardContainer").animate({
    left: "100%"
  },200, function() {
    var left = ($("body").width() - $("#cardContainer").width())/2;
    $("#cardContainer").css({'left':'-100%'})
    $("#cardContainer").animate({"left":"0" + left +"px"},200);
    deckView.viewNextCard();
  });
})
