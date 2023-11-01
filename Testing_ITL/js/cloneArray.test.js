const { expect } = require('@jest/globals')
const cloneArray = require('./cloneArray')

test('Succesfulyy clones the array', () => {
    const array = [20,48,51]
    expect(cloneArray(array)).toEqual(array)
    expect(cloneArray(array)).not.toBe(array)
})