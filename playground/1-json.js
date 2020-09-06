const fs = require('fs')
// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday'
// }

// const bookJSON = JSON.stringify(book)
// console.log(bookJSON)

// const parsedData = JSON.parse(bookJSON)
// console.log(parsedData.title)

// fs.writeFileSync('1-json.json',bookJSON)

// const dataBuffer = fs.readFileSync('1-json.json')
// console.log(dataBuffer.toString())
// const dataJSON = dataBuffer.toString()
// const data = JSON.parse(dataJSON)
// console.log(data.title)

const jsonData = fs.readFileSync('1-json.json')
const parseData = JSON.parse(jsonData)
// console.log(parseData.name)
// console.log(parseData.age)
parseData.name = 'Vatsala'
parseData.planet = 'Pluto'
parseData.age = '23'
// console.log(parseData.name)
// console.log(parseData.planet)
// console.log(parseData.age)
// console.log(parseData)

const DatatoJson = JSON.stringify(parseData)
// console.log (DatatoJson)
fs.writeFileSync('1-json.json',DatatoJson)
