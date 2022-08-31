const { hasDuplicate } = require('.');

describe('contains duplicate', () => {
  it('has duplicate true', () => {
    const numbers = [1, 2, 3, 1];

    const result = hasDuplicate(numbers);

    expect(result).toBeTruthy();
  });
});
