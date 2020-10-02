const fs = require('fs');
const chalk = require('chalk');
const getNotes = function (){return "Your Notes are ready"};

const addNote = function(title,body){
    const notes = loadNotes();
    const duplicateNotes = notes.filter(function (note){
        return note.title === title
    })

    if(duplicateNotes.length === 0){
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log('New note added!')
    }
    else {
        console.log('Note tite taken!')
    }
}

const loadNotes = function (){
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJson = dataBuffer.toString()
        return JSON.parse(dataJson)
    }
    catch (e) {
        return []
    }
}

const saveNotes = function (notes) {
    const dataJson = JSON.stringify(notes)
    fs.writeFileSync('notes.json',dataJson)
}
const removeNotes = function(title){
    const notes = loadNotes();
    const notesToKeep = notes.filter(function (note){
        return note.title !== title
    })

    if(notes.length > notesToKeep.length){
        console.log(chalk.green('Note removed'))
        saveNotes(notesToKeep)
    }else{
        console.log(chalk.red('No note found'))
    }
}

module.exports = {
    getNotes: getNotes,
    addNotes: addNote,
    removeNotes: removeNotes
}