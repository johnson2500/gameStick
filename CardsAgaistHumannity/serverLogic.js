var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var decks = require('./serverSideCard.js');


app.use(require('express').static('public'));
var currentWhiteCard = decks.whiteCardDeck.getCardFromDeck();

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/html.html');
});

io.on('connection', function(socket) {
  console.log(socket.id);

  socket.on('disconnect', () => {
    console.log('user disconnected');
  });

  socket.on('getBlackCard', (msg) => {
    console.log('getingBlack')
    socket.emit('card', decks.blackCardDeck.getCardFromDeck())
  });

  socket.on('fillDeck', (msg) => {
    var x = [];
    for (var i = 0; i < 7; i++) {
      x.push(decks.blackCardDeck.getCardFromDeck())
    }
    socket.emit("filledDeck", x);
    console.log("There are " + decks.blackCardDeck.deck.length + " cards in the blackDeck");
  });

  socket.on('getWhiteCard', () => {
    currentWhiteCard = decks.whiteCardDeck.getCardFromDeck();
    // socket.broadcast.emit('whiteCard', currentWhiteCard)
    socket.emit('whiteCard', currentWhiteCard)
  })

  socket.emit('whiteCard', currentWhiteCard);

  socket.on("submitCardToTable", (msg) => {
    socket.emit("newBlackCard", decks.blackCardDeck.getCardFromDeck());
  })


});


http.listen(3000, () => {
  console.log('listening on *:3000');
});
