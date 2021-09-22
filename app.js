const chalk = require('chalk');
const yargs = require('yargs');

const notes = require('./notes');

// Customize yargs version
yargs.version('1.1.0');

// Create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note Title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note Body',
            demandOption: true,
            type: 'string'
        }
    },
    handler: (argv) => notes.addNote(argv.title, argv.body)
});

// Create list command
yargs.command({
    command: 'list',
    describe: 'List all notes',
    handler: () => notes.listNotes()
});

// Create read command
yargs.command({
    command: 'read',
    describe: 'Read a note',
    handler: () => console.log('Reading a note')
});

// Create remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder: {
        title: {
            describe: 'Note Title',
            demandOption: true,
            type: 'string'
        }
    },
    handler: (argv) => notes.removeNote(argv.title)
});

// add, remopve, read, list 

yargs.parse();
// console.log(yargs.argv);
