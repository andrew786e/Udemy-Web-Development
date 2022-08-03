const bodyParser = require("body-parser");
const express = require("express") ;

const app = express() ;
const port = process.env.port || 3000 ;

// Checks the views folder automatically.
app.set("view engine", "ejs") ;

app.get("/" , function(req,res){

    var today = new Date() ;
    var currentDay = today.getDay() ;
    var day = ""

    switch(currentDay){
        case 0:
            day = "Sunday" ;
            break ;
        case 1: 
            day = "Monday" ;
            break ;
        case 2: 
            day = "Tuesday" ;
            break ;
        case 3:
            day = "Wednesday" ;
            break ;
        case 4:
            day = "Thursday" ;
            break ;
        case 5:
            day = "Friday" ;
            break ;
        case 6:
            day = "Saturday" ;
            break ;
        default:
            console.log("Error: Try again later") ;

    }

    res.render("list", {kindOfDay : day}) ;
}) ;

app.listen(port , function(){
    console.log(`listening on port ${port}`) ;
}) ;