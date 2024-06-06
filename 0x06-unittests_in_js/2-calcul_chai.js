function calculateNumber(type, a, b) {
  if (type == "SUM") {
    return (Math.round(a) + Math.round(b));
  };
  if (type == "SUBTRACT") {
    return (Math.round(a) - Math.round(b));
  };
  if (type == "DIVIDE") {
    if (Math.round(b) == 0) {
      return 'Error';
    } else {
      return (Math.round(a) / Math.round(b));
    };
  };
}

module.exports = calculateNumber;
// calculateNumber('SUM', 1.4, 4.5)
// calculateNumber('SUBTRACT', 1.4, 4.5)
// calculateNumber('DIVIDE', 1.4, 4.5)
// calculateNumber('DIVIDE', 1.4, 0)