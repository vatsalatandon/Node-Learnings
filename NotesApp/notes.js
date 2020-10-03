const fs = require('fs');
const chalk = require('chalk');
const getNotes = () => {return "Your Notes are ready"};

const addNote = (title,body) => {
    const notes = loadNotes();
    const duplicateNotes = notes.filter((note)=>note.title === title)

    if(duplicateNotes.length === 0){
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log(chalk.green('New note added!'))
    }
    else {
        console.log(chalk.red('Note tite taken!'))
    }
}

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJson = dataBuffer.toString()
        return JSON.parse(dataJson)
    }
    catch (e) {
        return []
    }
}

const saveNotes = (notes) => {
    const dataJson = JSON.stringify(notes)
    fs.writeFileSync('notes.json',dataJson)
}
const removeNotes = (title) => {
    const notes = loadNotes();
    const notesToKeep = notes.filter((note)=>note.title !== title)

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