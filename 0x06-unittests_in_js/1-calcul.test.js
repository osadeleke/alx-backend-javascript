const calculateNumber = require("./1-calcul.js");
const assert = require('assert');

describe('Sum', function () {
    it('should return the sum of rounded value of each', function () {
        const result = calculateNumber('SUM', 1.4, 4.5);
        assert.equal(result, 6);
    });
});

describe('Subtract', function () {
    it('should return the difference of rounded value of each', function () {
        const result = calculateNumber('SUBTRACT', 1.4, 4.5);
        assert.equal(result, -4);
    });
});

describe('Divide', function () {
    it('should return the divided value of rounded value of each', function () {
        const result = calculateNumber('DIVIDE', 1.4, 4.5);
        assert.equal(result, 0.2);
    });

    it('should return Error because divisor is rounded up to zero (0)', function () {
        const result = calculateNumber('DIVIDE', 1.4, 0);
        assert.equal(result, 'Error');
    });
});
