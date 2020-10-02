const chalk = require('chalk')
const yargs = require('yargs')
const notes = require('./notes.js')
const { command, argv } = require('yargs')

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
        notes.addNotes(argv.title,argv.body);
    }
})

//Create remove command
yargs.command({
    command: 'remove',
    description:'Remove a note',
    builder:{
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function(argv){
        notes.removeNotes(argv.title);
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