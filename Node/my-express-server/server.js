const express = require("express") ;
const app = express() ;
const port = 3000 ;

// Defines what should happen when a client makes  a get request to the server
app.get("/" , function(req,res){
    res.send("Hello World") ;
}) ;

app.get("/contact" , function(req,res){
    res.send("Contact me at: angela@ggs.com")
})

app.get("/about" , function(req,res){
    res.send("My name is yeno and I am good loooking") ;
}) ;

app.get("/name" , function(req,res){
    res.send("my name is yeno") ;
})

// Listen on any specific port for any http request that gets sent to the server
app.listen(3000 , ()=>{
    console.log(`server started on port ${port}`)
}) ;

