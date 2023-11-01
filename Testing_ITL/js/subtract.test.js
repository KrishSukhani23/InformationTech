const { expect } = require('@jest/globals')
const subtract = require('./subtract')

test('Succesfulyy subtracts 2 numbers', () => {
    expect(subtract(7,5)).toBe(2)
    expect(subtract(2,-5)).toBe(7)
})