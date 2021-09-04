const chalk = require('chalk')
const yargs = require('yargs')
const getNotes = require('./notes.js')


yargs.version('1.1.0')

// Add command
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
    handler: function (argv) {
        console.log('Title: ', argv.title)
        console.log('Body: ', argv.body)
    }
})

// Remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    handler: function () {
        console.log("Removing the note")
    }
})

// Read command
yargs.command({
    command: 'read',
    describe: 'Reads a note',
    handler: function () {
        console.log('Reads a note')
    }
})

// List command
yargs.command({
    command: 'list',
    describe: 'Returns a list of note titles',
    handler: function () {
        console.log('List of notes')
    }
})



yargs.parse()
