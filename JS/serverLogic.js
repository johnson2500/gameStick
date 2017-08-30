let ex = require('express')
let app = ex();
let fs = require('fs');
let path = require('path')

let html = fs.readFile('../html.html');

app.set('port', process.env.PORT||3000);

app.get('/',(req,res)=>{
  res.sendFile(path.dirname(__dirname) + "\\html.html");
});

app.get('/home.js',(req,res)=>{
  res.sendFile(path.dirname(__dirname) + "\\home.js");
});

app.get('/CSS/css.css',(req,res)=>{
  res.sendFile(path.dirname(__dirname) + "\\CSS\\css.css");
});

app.get('/JS/view.js',(req,res)=>{
  res.sendFile(path.dirname(__dirname) + "\\JS\\view.js");
});

app.get('/JS/serverSideCard.js',(req,res)=>{
  res.sendFile(path.dirname(__dirname) + "\\JS\\serverSideCard.js");
});

app.get('/JS/clientSide.js',(req,res)=>{
  res.sendFile(path.dirname(__dirname) + "\\JS\\clientSide.js");
});

app.get('/IMGS/whitelogo.PNG',(req,res)=>{
  res.sendFile(path.dirname(__dirname) + "\\IMGS\\whitelogo.PNG");
});

app.get('/IMGS/blackLogo.PNG',(req,res)=>{
  res.sendFile(path.dirname(__dirname) + "\\IMGS\\blackLogo.PNG");
});

app.get('/JS/node_modules/socket.io/lib/socket.js',(req,res)=>{
  res.sendFile(path.dirname(__dirname) + "\\JS\\node_modules\\socket.io\\lib\\socket.io.js");
  console.log("this works");
});

app.listen(app.get('port'),()=>{
  console.log("Exppress Started");
});
