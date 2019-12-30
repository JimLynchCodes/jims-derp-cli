const responseMap = require('./response-map')

const getMessageFromInput = (args) => {

    if (args['extremely-forcefully'])
        return responseMap['extremely-forcefully']

    if (args['very-forcefully'])
        return responseMap['very-forcefully']

    if (args['forcefully'])
        return responseMap['forcefully']

    if (args['politely'])
        return responseMap['politely']

    return responseMap['[default]']

}

module.exports = getMessageFromInput;