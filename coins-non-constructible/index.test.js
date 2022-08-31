const { nonConstructibleChange } = require('.');

describe('coins non constructibe', () => {
  it('should return a valid case one', () => {
    // Arrange
    const coins = [5, 7, 1, 1, 2, 3, 22];

    // Act
    const result = nonConstructibleChange(coins);

    // Assert
    expect(result).toEqual(20);
  });

  it('should return a valid case two', () => {
    // Arrange
    const coins = [1, 1, 1, 5];

    // Act
    const result = nonConstructibleChange(coins);

    // Assert
    expect(result).toEqual(4);
  });

  it('get total sum plus one', () => {
    // Arrange
    const coins = [1, 1, 1, 3];

    // Act
    const result = nonConstructibleChange(coins);

    // Assert
    expect(result).toEqual(7);
  });
});
