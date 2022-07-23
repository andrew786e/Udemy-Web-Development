const express = require("express") ;
const app = express() ;
const paserBody = require("body-parser") ;
const port = 3000 ;

app.use(paserBody.urlencoded({extended : true})) ;


app.get("/bmicalculator" , function(req , res){
    res.sendFile(__dirname + "/bmiCalculator.html")
}) ;

app.post("/bmicalculator" , function(req,res){

    var weight = parseFloat(req.body.weight) ;
    var height = parseFloat(req.body.height) ;

    var BMI = weight / (height * height) ;

    res.send(`Your BMI is ${BMI}`) ;

}) ;

app.listen(port, function(){
    console.log(`server is running on port ${port}`) ;
})