const chalk = require('chalk')
const yargs = require('yargs')
const notes = require('./notes.js')
const { command } = require('yargs')

//customise yargs version
yargs.version('1.1.0')

//add,remove,read,list
//Create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder:{
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body:{
            describe: 'Note body',
            demandOption: true,
            type:'string'
        }
    },
    handler: function(argv){
        console.log('Title:' + argv.title)
        console.log('Body:' + argv.body)
    }
})

//Create remove command
yargs.command({
    command: 'remove',
    description:'Remove a note',
    handler: function(){
        console.log('Removing the note')
    }
})

//Create list command
yargs.command({
    command: 'list',
    description: 'List the notes',
    handler: function(){
        console.log('List of all notes')
    }
})
//Create read command
yargs.command({
    command: 'read',
    description: 'Reading the notes',
    handler: function(){
        console.log('Reading a note')
    }
})

yargs.parse()
//console.log(yargs.argv)