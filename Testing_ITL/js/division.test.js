const { expect } = require('@jest/globals')
const division = require('./division')

test('Succesfulyy Divides 2 numbers', () => {
    expect(division(12,4)).toBe(3)
})