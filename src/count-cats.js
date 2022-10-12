const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(array) {
  let count = 0;
  let pos = 0;
  str = array.join();
  while (true) {
    let foundPos = str.indexOf('^^', pos);
    if (foundPos == -1) break;
    count++;
    pos = foundPos + 1; // продолжаем со следующей позиции
  }
  return count;
  // remove line with error and write your code here
}
module.exports = {
  countCats
};
