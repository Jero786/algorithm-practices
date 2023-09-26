/**
 * Given a string, write a function to check if it is a permutation of a palindrome. 
 * A palindrome is a word or phrase that is the same forwards and backwards. 
 * A permutation is a rearrangement of letters. The palindrome does not need to be 
 * limited to just dictionary words.
 * Better explanation: 
 * https://codingbootcampguides.com/coding-interviews-solving-the-palindrome-permutation-problem-in-javascript/
 */
function isPalindromePermutation(text) {
    const dictionary = {};
    const textNonSpaces = text.replaceAll(' ', '');

    for (let latter of textNonSpaces) {
        if (latter in dictionary) {
            dictionary[latter]++;
        } else {
            dictionary[latter] = 1
        }
    }

    // a single odd is allow because is the center of the palindrome
    let foundOdd = false;

    for (const letter of Object.keys(dictionary)) {
        if (isOdd(dictionary[letter])) {
            if (foundOdd) return false;

            foundOdd = true;
        }
    }

    return true;
}

function isPalindromePermutationRecurse(text) {
    const dictionary = createDictionaryRecurse(text.replace(' ', ''), 0, {})
    return isAllEvenExceptOneRecurse(Object.values(dictionary), 0, false, true);
}

function createDictionaryRecurse(text, index, result) {
    if (index > text.length - 1) return result;

    const word = text[index];

    if (word in result) {
        result[word]++;
    } else {
        result[word] = 1;
    }

    return createDictionaryRecurse(text, index + 1, result);
}

function isAllEvenExceptOneRecurse(counts, index, foundOdd, result) {
    if (index > counts.length - 1) return result;
    const count = counts[index];

    if (isOdd(count)) {
        if (foundOdd) return false;

        return isAllEvenExceptOneRecurse(counts, index + 1, true, true);
    } else {
        return isAllEvenExceptOneRecurse(counts, index + 1, foundOdd, true);
    }
}

function isOdd(number) {
    return !(number % 2 == 0);
}

module.exports = {
    isPalindromePermutation,
    isPalindromePermutationRecurse
}