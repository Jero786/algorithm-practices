const { classPhotos } = require('.');

describe('class photo', () => {
  it('should be true', () => {
    const redStudents = [5, 8, 1, 3, 4];
    const blueStudents = [6, 9, 2, 4, 5];

    const result = classPhotos(redStudents, blueStudents);

    expect(result).toBeTruthy();
  });

  it('should be false', () => {
    const redStudents = [10, 8, 1, 3, 4];
    const blueStudents = [6, 9, 2, 4, 5];

    const result = classPhotos(redStudents, blueStudents);

    expect(result).toBeFalsy();
  });
});
