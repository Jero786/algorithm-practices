const { fibonacciNthRecursively, fibonacciNth } = require('.');

describe('Nth Fibonacci', () => {
    describe('recursively', () => {
           test.each([
            [1, 0],
            [3, 1],
            [2, 1],
            [6, 5],
        ])('with %i',(input, expected) => {
           const result = fibonacciNthRecursively(input);
            expect(result).toEqual(expected); 
        })
    });
    describe('iteratily', () => {
        test.each([
            [1, 0],
            [3, 1],
            [2, 1],
            [6, 5],
        ])('with %i',(input, expected) => {
           const result = fibonacciNth(input);
            expect(result).toEqual(expected); 
        })
    });
});