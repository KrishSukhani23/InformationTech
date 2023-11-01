const { expect } = require('@jest/globals')
const sum = require('./sum')

test('Succesfulyy adds 2 numbers', () => {
    expect(sum(7,5)).toBe(10)
    expect(sum(2,-5)).toBe(-3)
})