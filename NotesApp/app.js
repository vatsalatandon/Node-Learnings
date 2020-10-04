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
    handler(argv){
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
    handler(argv){
        notes.removeNotes(argv.title);
    }
})

//Create list command
yargs.command({
    command: 'list',
    description: 'List the notes',
    handler(){
        notes.listNotes();
    }
})
//Create read command
yargs.command({
    command: 'read',
    description: 'Reading the notes',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        notes.readNotes(argv.title);
    }
})

yargs.parse()
//console.log(yargs.argv)