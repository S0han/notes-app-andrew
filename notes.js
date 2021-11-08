const fs = require('fs');
const chalk = require('chalk');

const addNote = (title, body) => {
    const notes = loadNotes();
    const duplicateNote = notes.find((note) => note.title === title);

    if (!duplicateNote) {
        notes.push({
            title: title,
            body: body
        });
    
        saveNotes(notes);

        console.log(chalk.black.bgGreen('New note added!'));
    } 
    else {
        console.log(chalk.black.bgRed('Note title taken!'));
    }  
}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync('notes.json', dataJSON);
}

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json');
        const dataJSON = dataBuffer.toString();
        const data = JSON.parse(dataJSON);
        return data;
    } catch(e) {
        return [];
    }
}

const removeNote = (title) => {
    const notes = loadNotes();   
    const selectedNote = notes.filter((note) => note.title !== title);

    if (notes.length > selectedNote.length) {
        msg = chalk.black.bgGreen(`Note Removed!`);
        console.log(msg);
        
    } else {
        msg = chalk.black.bgRed('No Note Found');
        console.log(msg); 
    }
    saveNotes(selectedNote);
}

const listNotes = () => {
    const notes = loadNotes();
    const msg = chalk.yellow.bgBlack('Your Notes...');
    console.log(msg);

    return notes.forEach((note) => {
        console.log(note.title);
    });
}

const readNote = (title) => {
    const notes = loadNotes();
    specNote = notes.find((note) => note.title === title);
    if (specNote) {
        titleMsg = chalk.green.bgGray(specNote.title);
        console.log(titleMsg);
        console.log(specNote.body);
    } else {
        errMsg = chalk.black.bgRed('ERROR! Note not found!');
        console.log(errMsg);
    }  
}
 
module.exports = {
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
}



