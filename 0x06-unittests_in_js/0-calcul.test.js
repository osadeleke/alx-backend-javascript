const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('result', () => {
  it('should return the sum of rounded value of each', () => {
    const result = calculateNumber(1, 3);
    assert.equal(result, 4);
  });

  it('should return the sum of rounded value of each', () => {
    const result = calculateNumber(1, 3.7);
    assert.equal(result, 5);
  });

  it('should return the sum of rounded value of each', () => {
    const result = calculateNumber(1.2, 4);
    assert.equal(result, 5);
  });

  it('should return the sum of rounded value of each', () => {
    const result = calculateNumber(1.5, 3.7);
    assert.equal(result, 6);
  });
});
