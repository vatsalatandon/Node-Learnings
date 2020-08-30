const chalk = require('chalk')
const notes = require('./notes.js')

const getnotes = notes()
console.log(getnotes)

console.log(chalk.bold.underline.Yellow('Success'))