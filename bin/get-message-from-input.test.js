const expect = require('chai').expect

const getMessageFromInput = require('./get-message-from-input')
const responseMap = require('./response-map')

describe('getMessageFromInput happy cases', () => {

    it('should return the polite response when passed the "--politely" option', () => {
        const input = 'politely'
        expect(getMessageFromInput({ [input]: true })).to.equal(responseMap[input])
    })
    
    it('should return the forceful response when passed the "--forcefully" option', () => {
        const input = 'forcefully'
        expect(getMessageFromInput({ [input]: true })).to.equal(responseMap[input])
    })
    
    it('should return the very forceful response when passed the "--very-forcefully" option', () => {
        const input = 'very-forcefully'
        expect(getMessageFromInput({ [input]: true })).to.equal(responseMap[input])
    })
    
    it('should return the extremely forceful response when passed the "--extremely-forcefully" option', () => {
        const input = 'extremely-forcefully'
        expect(getMessageFromInput({ [input]: true })).to.equal(responseMap[input])
    })

})

describe('getMessageFromInput with no recognised options', () => {

    it('should return the basic "derp" when passed no options', () => {

        const derp = responseMap['[default]']

        expect(getMessageFromInput({})).to.equal(derp)
        expect(getMessageFromInput(0)).to.equal(derp)
        expect(getMessageFromInput('')).to.equal(derp)
        expect(getMessageFromInput(NaN)).to.equal(derp)
    })

    it('should return the basic "derp" when passed unrecognised options', () => {
        expect(getMessageFromInput({ "la santa maria": true })).to.equal('derp')
    })

})