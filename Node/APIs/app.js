const express = require("express") ;
const https = require("https") ;
const bodyParser = require("body-parser") ;
const app = express() ;
const port = 3000 ;

app.use(bodyParser.urlencoded({extended: true})) ;

app.listen(port , ()=>{
    console.log(`The server is running on port ${3000}`) ;
}) ;

app.get("/" , function(req,res){
    res.sendFile(__dirname + "/index.html") ;
}) ;

app.post("/" , function(req,res){

    let city = req.body.cityName ;
    let unit = "metric"
    const apikey = "a2f4735c91afe749925520edd428bc8e" ;
    const cord = `https://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=${apikey}`;
    // res.send("Server is up and running") ;

    // Makes get request to the server to get the lat and lon of london
    https.get(cord , function(response){
        // console.log(response.statusCode) ;

        // Listens for when the data for the latitude and longitutde has been sents
        // Then transforms the data to JSON form 
        response.on("data" , function(data){
            const city_cord = JSON.parse(data) ;
            const lat = city_cord[0].lat ;
            const lon = city_cord[0].lon ;

            const city_url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=a2f4735c91afe749925520edd428bc8e&units=${unit}` ;
            // Uses the longitutde and latitude to make a get request to the API using the lon and lat data 
            // from the Geological API
            https.get(city_url , function(response){

                // Gets the data for the weather
                response.on("data" , function(data_weather){
                    const weather_convert = JSON.parse(data_weather) ;
                    const temp = weather_convert.main.temp ;
                    const weather_description = weather_convert.weather[0].description ;
                    const icon = weather_convert.weather[0].icon ;
                    const icon_location = `http://openweathermap.org/img/wn/${icon}@2x.png` ;
                    res.write("<p>The weather is " + weather_description + "</p>") ;
                    res.write(`<h1>The temprature for today is ${temp} degress Celcius</h1> `) ;
                    res.write(`<img src = "${icon_location}">`) ;
                    res.send() ;
                }) ;
            }) ;
        }) ;
    }) ;
}) ;
