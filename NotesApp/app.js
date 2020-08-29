// const addition = require('./utils.js')
// const sum = addition(4,-2)
// console.log(sum)

// const fs = require('fs')

// fs.writeFileSync('notes.js','const getNotes = function (){return "Your Notes are ready"}; module.exports = getNotes')

const notes = require('./notes.js')
const getnotes = notes()
console.log(getnotes)
