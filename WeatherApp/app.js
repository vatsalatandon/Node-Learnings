const request = require('request')

const url ='http://api.weatherstack.com/current?access_key=274ea563cf13ed844c1bccd56a6eb2b7&query=37.8267,-122.4233'

request({url: url},(error,response) => {
    const data = JSON.parse(response.body)
    console.log(data.current)
})