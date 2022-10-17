const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(array) {
  if (!Array.isArray(array)){return "'arr' parameter must be an instance of the Array!";}
  if (array.length == 0){return array};
for (let i=0; i < array.length; i++){
if (typeof array[i] == 'string'){
        switch(array[i]) {
        case '--discard-next':
            array.splice(i, 2);
            break;
        case '--discard-prev':
            array.splice(i-1, 2);
            break;
        case '--double-next':
            array[i] = array[i+1];
            break;
        case '--double-prev':
            array[i] = array[i-1];
            break;
        default:
            break;
        }
        return array;
    }
}
}

module.exports = {
  transform
};
