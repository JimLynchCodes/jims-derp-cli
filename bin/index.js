#!/usr/bin/env node
const argv = require('yargs').argv

const getMessageFromInput = (args) => {

    if (args['extremely-forceful'])
        return 'F&!%$NG DERP, MOTHER F&!%$ER!!!!!'

    if (args['very-forceful'])
        return 'DERP!!!'

    if (args.forceful)
        return 'Derp!'

    if (args.polite)
        return 'please derp, thank you very much.'

    return 'derp'

}

console.log(getMessageFromInput(argv));
