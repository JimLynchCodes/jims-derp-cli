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
      boolean: true
    },
    'forcefully': {
      alias: 'f',
      demandOption: false,
      default: false,
      describe: 'Prints derp forcefully.',
      boolean: true
    },
    'very-forcefully': {
      alias: 'e',
      demandOption: false,
      default: false,
      describe: 'Prints derp very forcefully.',
      boolean: true
    },
    'extremely-forcefully': {
      alias: 'x',
      demandOption: false,
      default: false,
      describe: 'Prints derp extremely forcefully.',
      boolean: true
    }
  })

  .command('$0', 'Prints "derp" to the console.', () => { }, (argv) => {
    console.log(getMessageFromInput(argv));
  })

  .demandCommand()
  .help()
  .argv

