const request = require('request')

//const url ='http://api.weatherstack.com/current?access_key=274ea563cf13ed844c1bccd56a6eb2b7&query=37.8267,-122.4233'
const url ='http://api.weatherstack.com/current?access_key=274ea563cf13ed844c1bccd56a6eb2b7&query=37.8267,-122.4233&units=f'

request({url: url, json: true},(error,response) => {
    //console.log(response.body.current)
    console.log(response.body.current.weather_descriptions[0] + '. It is currently '+ response.body.current.temperature + ' degree out. It feels like ' + response.body.current.feelslike +' degree')
    // Change Unit
})
