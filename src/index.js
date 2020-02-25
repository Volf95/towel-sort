
module.exports = function towelSort (matrix) {
  if (!Array.isArray(matrix) || matrix.length === 0) {
    return [];
  }
  return matrix.reduce(function (memo, currentValue, index) {
      if (index % 2 === 0) {
          return memo.concat(currentValue);
      } else {
          return memo.concat(currentValue.reverse());
      }
  });
}
