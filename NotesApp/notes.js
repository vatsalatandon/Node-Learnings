const fs = require('fs');
const chalk = require('chalk');

const addNote = (title,body) => {
    const notes = loadNotes();
    // const duplicateNotes = notes.filter((note)=>note.title === title)
    const duplicateNote = notes.find((note) => note.title === title)

    //debugger -- node inspect app.js

    if(!duplicateNote){
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

const listNotes = () => {
    const notes = loadNotes();
    console.log(chalk.blue('Your Notes: '))
    notes.forEach((note)=> {
        console.log(note.title)
    });
}

const readNotes = (title) =>{
    const notes = loadNotes();
    const readNote = notes.find((note) => note.title === title)
    if(!readNote){
        console.log(chalk.red('Unable to find Note'))
    } else{
        console.log(chalk.blue.italic.bold(readNote.title + ':'))
        console.log(readNote.body)
    }
}

module.exports = {
    addNotes: addNote,
    removeNotes: removeNotes,
    listNotes: listNotes,
    readNotes: readNotes
}