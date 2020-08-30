const validator = require('validator')
const notes = require('./notes.js')

const getnotes = notes()
console.log(getnotes)

console.log(validator.isEmail('andrew@example.com'))
console.log(validator.isURL('https://read.io'))