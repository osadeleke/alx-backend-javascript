const calculateNumber = require("./0-calcul.js");
const assert = require('assert');

describe('result', function () {
    it('should return the sum of rounded value of each', function () {
        const result = calculateNumber(1, 3);
        assert.equal(result, 4);
    });

    it('should return the sum of rounded value of each', function () {
        const result = calculateNumber(1, 3.7);
        assert.equal(result, 5);
    });

    it('should return the sum of rounded value of each', function () {
        const result = calculateNumber(1.2, 3.7);
        assert.equal(result, 5);
    });

    it('should return the sum of rounded value of each', function () {
        const result = calculateNumber(1.5, 3.7);
        assert.equal(result, 6);
    });
});
