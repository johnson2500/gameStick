
var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var decks = require('./serverSideCard.js');


app.use(require('express').static('public'));
var currentWhiteCard = decks.whiteCardDeck.getCardFromDeck();

app.get('/', function(req, res){
  res.sendFile(__dirname + '/html.html');
});

io.on('connection', function(socket){
  console.log('a user connected');
  socket.on('disconnect', function(){
    console.log('user disconnected');
  });

  socket.on('getBlackCard', function(msg){
    socket.emit('card', decks.blackCardDeck.getCardFromDeck())
  });

  socket.on('fillDeck', function(msg){
    var x = [];
    for(var i = 0;i<7;i++){
      x.push(decks.blackCardDeck.getCardFromDeck())
    }
    socket.emit("filledDeck",x);
    console.log("There are " + decks.blackCardDeck.deck.length + " cards in the blackDeck");
  });

  socket.on('getWhiteCard',function() {
    currentWhiteCard = decks.whiteCardDeck.getCardFromDeck();
    socket.broadcast.emit('whiteCard',currentWhiteCard)
    socket.emit('whiteCard',currentWhiteCard)
  })
  socket.emit('whiteCard',currentWhiteCard);

});


http.listen(3000, function(){
  console.log('listening on *:3000');
});

//this is on master
