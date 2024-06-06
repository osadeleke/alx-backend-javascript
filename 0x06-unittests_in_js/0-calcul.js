function calculateNumber(a, b) {
  return (Math.round(a) + Math.round(b));
}

module.exports = calculateNumber;
// calculateNumber(1, 3);
// calculateNumber(1, 3.7);
// calculateNumber(1.2, 3.7);
// calculateNumber(1.5, 3.7);