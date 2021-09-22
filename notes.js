const fs = require('fs');

const getNotes = () => 'Your notes...';

const addNote = (title, body) => {
    const notes = loadNotes();

    const dupNotes = notes.filter(note => note.title === title)

    if(dupNotes.length === 0) {
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

module.exports = {
    getNote: getNotes,
    addNote: addNote
};