const chalk = require('chalk');
const { string, argv } = require('yargs');
const yargs = require('yargs');
const notes = require('./notes.js');

//Customize yargs version
yargs.version('1.1.0');

//create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {notes.addNote(argv.title, argv.body);}
    
});

//Create remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder: {
        title: {
            describe: "Note title",
            demandOption: true,
            type: 'string',
        }
    },
    handler(argv) {notes.removeNote(argv.title);}
});

//Create list command
yargs.command({
    command: 'list',
    describe: 'Create a list of items',
    handler() {notes.listNotes();}
    
});

//Create read command
yargs.command({
    command: "read",
    describe: 'read list item',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {notes.readNote(argv.title);}
})

yargs.parse();

