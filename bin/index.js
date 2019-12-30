#!/usr/bin/env node
const getMessageFromInput = require('./get-message-from-input')

require('yargs')
    
    .alias('version', 'v')
    
    .options({
        'politely': {
          alias: 'p',
          demandOption: false,
          default: false,
          describe: 'Prints derp politely.',
          type: 'string'
        },
        'forcefully': {
          alias: 'f',
          demandOption: false,
          default: false,
          describe: 'Prints derp forcefully.',
          type: 'string'
        },
        'very-forcefully': {
          alias: 'v',
          demandOption: false,
          default: false,
          describe: 'Prints derp very forcefully.',
          type: 'string'
        },
        'extremely-forcefully': {
          alias: 'x',
          demandOption: false,
          default: false,
          describe: 'Prints derp extremely forcefully.',
          type: 'string'
        }
      })

    .command('$0', 'Prints "derp" to the console.', () => { }, (argv) => {
        console.log(getMessageFromInput(argv));
    })

    .demandCommand()
    .help()
    .argv

