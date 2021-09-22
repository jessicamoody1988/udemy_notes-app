const chalk = require('chalk');
const yargs = require('yargs');

const notes = require('./notes');

// Customize yargs version
yargs.version('1.1.0');

// Create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    handler: () => console.log('Adding new note')
});

// Create list command
yargs.command({
    command: 'list',
    describe: 'List all notes',
    handler: () => console.log('Listing all notes')
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
    handler: () => console.log('Removing a note')
});

// add, remopve, read, list 

console.log(yargs.argv);