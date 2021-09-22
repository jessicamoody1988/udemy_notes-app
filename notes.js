const fs = require('fs');
const chalk = require('chalk');

const getNotes = () => 'Your notes...';

const addNote = (title, body) => {
    const notes = loadNotes();

    //const dupNotes = notes.filter(note => note.title === title)
    const dupNote = notes.find(note => note.title === title)

    if(!dupNote) {
        notes.push({
            title: title,
            body: body
        });
    
        saveNotes(notes);
        console.log('New note added!');
    } else {
        console.log('Note title taken!');
    }
};

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync('notes.json', dataJSON);
}

const loadNotes = () => {
    try{
        const dataBuffer = fs.readFileSync('notes.json');
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
    } catch (e) {
        return [];
    }
    
};

const removeNote = (title) => {
    const notes = loadNotes();

    const notesToKeep = notes.filter(note => note.title !== title);

    if (notes.length === notesToKeep.length) {
        console.log(chalk.red.inverse('No note found!'));
    } else {
        console.log(chalk.green.inverse(`Note: "${title}" was removed!`));
    }

    saveNotes(notesToKeep)
}

const listNotes = () => {
    const notes = loadNotes();

    console.log(chalk.magenta.inverse('Your Notes:'));
    notes.forEach(note => console.log(`Title: ${note.title} -- Description: ${note.body}`));
}

const readNote = (title) => {
    const notes = loadNotes();

    const foundNote = notes.find(note => note.title.toLowerCase() === title.toLowerCase())

    if (foundNote) {
        console.log(chalk.bold(foundNote.title), foundNote.body);
    } else {
        console.log(chalk.red.inverse('Note not found!'));
    }
}

module.exports = {
    getNote: getNotes,
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
};