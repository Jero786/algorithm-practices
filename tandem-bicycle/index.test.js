const { makeTandemBicycle } = require('.');

describe('tandem bicycle', () => {
    it('should return fastest', () => {
        const redShirtSpeeds = [5, 5, 3, 9, 2];
        const blueShirtSpeeds = [3, 6, 7, 2, 1];
        const isFastest = true;

        const result = makeTandemBicycle(redShirtSpeeds, blueShirtSpeeds, isFastest);

        expect(result).toEqual(32);
    });

     it('should return slowest', () => {
        const redShirtSpeeds = [5, 5, 3, 9, 2];
        const blueShirtSpeeds = [3, 6, 7, 2, 1];
        const isFastest = false;

        const result = makeTandemBicycle(redShirtSpeeds, blueShirtSpeeds, isFastest);

        expect(result).toEqual(25);
    });
});