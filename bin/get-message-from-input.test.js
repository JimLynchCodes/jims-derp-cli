const expect = require('chai').expect

const getMessageFromInput = require('./get-message-from-input')
const responseMap = require('./response-map')

describe('getMessageFromInput happy cases', () => {

    it('should return the polite response when passed the "--polite" option', () => {
        expect(getMessageFromInput({ "polite": true })).to.equal(responseMap['polite'])
    })

    it('should return the forceful response when passed the "--forceful" option', () => {
        expect(getMessageFromInput({ "forceful": true })).to.equal(responseMap['forceful'])
    })

    it('should return the very forceful response when passed the "--very-forceful" option', () => {
        expect(getMessageFromInput({ "very-forceful": true })).to.equal(responseMap['very-forceful'])
    })

    it('should return the extremely forceful response when passed the "--extremely-forceful" option', () => {
        expect(getMessageFromInput({ "extremely-forceful": true })).to.equal(responseMap['extremely-forceful'])
    })

})

describe('getMessageFromInput with no recognised options', () => {

    it('should return the basic "derp" when passed no options', () => {

        const derp = responseMap['[default]']

        expect(getMessageFromInput({})).to.equal(derp)
        expect(getMessageFromInput(undefined)).to.equal(derp)
        expect(getMessageFromInput(null)).to.equal(derp)
        expect(getMessageFromInput(0)).to.equal(derp)
        expect(getMessageFromInput('')).to.equal(derp)
        expect(getMessageFromInput(NaN)).to.equal(derp)
    })

    it('should return the basic "derp" when passed unrecognised options', () => {
        expect(getMessageFromInput({ "la santa maria": true })).to.equal('derp')
    })

})