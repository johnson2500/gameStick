var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

function getRandomNumber() {
  var randomCode = "";
  var variation = 0;
  for (var i = 0; i < 4; i++) {
    var randNum = Math.round(Math.random()*35);
    console.log("before" ,randNum)
    if(randNum >= 26){
      randNum = randNum - 26;
      variation = 48;
    } else{
      variation = 65
    }
    randomCode += String.fromCharCode(variation + randNum);
    console.log("random Num: ", randNum, " randomCode: ", randomCode, " varaition" , variation)
  }
  return randomCode;
}

app.use(require('express').static('public'));

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket) {
  socket.on('startGame', () => {
    console.log("this is working")
    socket.emit("gameCode", getRandomNumber())
    console.log("GameHasStarted")
  })
});


http.listen(3000, () => {
  console.log('listening on *:3000');
});
