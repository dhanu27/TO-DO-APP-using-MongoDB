const mongoose=require('mongoose');

// Make the connection with the database
mongoose.connect('mongodb://localhost/Task_DB');
const db=mongoose.connection;

db.on('error',console.error.bind(console,'Error with MongoDB'));
db.once('open',function(){
    console.log("Database setup Suscessfully ");
})