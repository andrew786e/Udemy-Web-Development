// Require incoperates package into javascript project
const express = require("express") ;
const bodyParser = require("body-parser") ;

const app = express() ;
const port = 3000 ;

// Allows express to use body parser
// Allows users to parse data from html form 
// Extended allows extended objects to be posted 
app.use(bodyParser.urlencoded({extended : true})) ;

//  Note nodemon is used to automatically resfresh the page when the code is saved 


app.get("/" , (req,res)=>{
    // __dirname gives current file path of the current directory you are in
    res.sendFile(__dirname + "/index.html") ;
} ) ;


// Receives the post request to the home directory
// Need to install npm 
app.post("/" , (req, res)=>{

    var num1 = Number(req.body.name1) ;
    var num2 = Number(req.body.name2) ;

    var result = num1 + num2 ;

    res.send("The result for the calculation is " + result) ;
}) ;



app.get("/bmicalculator" , function(req , res){
    res.sendFile(__dirname + "/bmiCalculator.html")
}) ;

app.post("/bmicalculator" , function(req,res){

    var weight = parseFloat(req.body.weight) ;
    var height = parseFloat(req.body.height) ;

    var BMI = weight / (height * height) ;

    res.send(`Your BMI is ${BMI}`) ;

}) ;

// Listens to requests

app.listen(port , ()=>{
    console.log(`server is running on port ${port}`) ;
})

