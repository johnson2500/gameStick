// let ex = require('express')
// let app = ex();
// let fs = require('fs');
// let path = require('path')

var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.use(require('express').static('public'));

app.set('port', process.env.PORT||3000);

app.get('/',(req,res)=>{
  res.sendFile(__dirname + '\\html.html');
});

io.on('connection', function(socket){
  console.log('a user connected');
  socket.on('disconnect', function(){
    console.log('user disconnected');
  });

  socket.on('chat message', function(msg){
    console.log('message: ' + msg);
  });

  socket.on('chat message', function(msg){
    io.emit('chat message', msg);
  });

  socket.on('newUser',function(msg) {
    users.push(msg);
    console.log("newUser : " + msg);
    console.log("users" + users)
    io.emit("listOfUsers",users)
  });

});

app.listen(app.get('port'),()=>{
  console.log("Exppress Started");
});
