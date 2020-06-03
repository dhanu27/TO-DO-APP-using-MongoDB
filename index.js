const express=require('express');
const port=8002;
const app=express();

// Require the Database 
const db=require('./config/mongoose');

// for encode the url with the request data the have
app.use(express.urlencoded());

//  For router 
app.use('/',require('./router'));

// For static files like CSS ,JS 
app.use(express.static('./assets'));

// For set EJS as a template Engine
app.set('view engine','EJS');
app.set('views','./views');


app.listen(port,function(err){
  if(err){
      console.log("WTF ERROR");
      return ;
  }
  console.log("Server set up");
})

