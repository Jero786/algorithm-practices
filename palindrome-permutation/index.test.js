const {
    isPalindromePermutation,
    isPalindromePermutationRecurse
} = require('.');

describe('Palindrome permutation', () => {

    it('iteratively', () => {
        // Arrange
        const array = 'tact coa';
        // Act
        const result = isPalindromePermutation(array);
        // Assert
        expect(result).toEqual(true);
    });

    it('recursively', () => {
        // Arrange
        const array = 'tact coa';
        // Act
        const result = isPalindromePermutationRecurse(array);
        // Assert
        expect(result).toEqual(true);
    });
})